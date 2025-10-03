import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";

function pick(obj, ...keys) {
  for (const k of keys) {
    const v = obj?.[k];
    if (v !== undefined && v !== null && String(v).trim() !== "")
      return String(v);
  }
  return "";
}

export async function POST(req) {
  try {
    const ct = (req.headers.get("content-type") || "").toLowerCase();
    let values = {};

    if (ct.includes("application/json")) {
      values = await req.json();
    } else if (
      ct.includes("application/x-www-form-urlencoded") ||
      ct.includes("multipart/form-data")
    ) {
      const form = await req.formData();
      form.forEach((v, k) => (values[k] = String(v)));
    } else {
      return NextResponse.json(
        { error: "Unsupported Content-Type" },
        { status: 415 }
      );
    }

    // Coalesce common field name variants
    const username = pick(values, "userName", "username", "email");
    const password = pick(values, "Password", "password", "pass");
    const firstName = pick(values, "first_name", "firstName", "firstname");
    const lastName =
      pick(values, "last_name", "lastName", "lastname") || "null";
    const email = pick(values, "email", "mail");
    const country = pick(values, "country", "countryCode", "alpha_2_code");
    const phone = pick(values, "phone", "mobile", "tel");
    const website = pick(values, "website", "site", "url");
    const skype = pick(values, "skype");
    const account = pick(values, "accountAff", "account");

    const agreed = (key) =>
      values[key] === true || values[key] === "1" || values[key] === "true"
        ? "1"
        : "0";
    const agreedAny = values.terms ?? values.accept ?? values.agree;
    const agreedStr =
      agreedAny === true || agreedAny === "1" || agreedAny === "true"
        ? "1"
        : "0";

    // Validate required fields before hitting upstream
    const missing = [];
    if (!username) missing.push("username");
    if (!password) missing.push("password");
    if (!firstName) missing.push("firstName");
    if (!email) missing.push("email");
    if (!country) missing.push("country");
    if (!phone) missing.push("phone");

    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const params = new URLSearchParams({
      username,
      password, // CellXpert expects lowercase key
      firstName,
      lastName,
      email,
      country,
      phone,
      website,
      skype,
      AgreedToTermsAndConditions: agreedStr,
      AgreedToPrivacyPolicy: agreedStr,
      AgreedToMarketingMaterial: agreedStr,
      account,
    });

    const upstream = await fetch(
      "https://agents.gtcfx.com/api/registeraffiliate/",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
        // avoid caching
        next: { revalidate: 0 },
      }
    );

    const text = await upstream.text();

    // Normalize response: many CellXpert APIs return strings like "-1 password missing"
    // Treat non-2xx or text starting with "-" as error
    const isNegative = /^\s*-\d+/.test(text);
    if (!upstream.ok || isNegative) {
      return NextResponse.json(
        { ok: false, message: text.trim() },
        { status: upstream.ok ? 400 : upstream.status }
      );
    }

    return NextResponse.json(
      { ok: true, message: text.trim() },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err?.message || "proxy error" },
      { status: 500 }
    );
  }
}
