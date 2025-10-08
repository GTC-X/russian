import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next/link";
import { useLocationDetail } from "@/context/useLocationDetail";

const Button = () => {
  const t = useTranslations("common");
  const { countryCode } = useLocationDetail();
  const router = useRouter();
  const locale = useLocale();

  // Registration link condition: Uzbekistan vs. Default
  const registrationLink =
    countryCode === "UZ"
      ? "https://mygtcportal.com/getview?view=register&token=298uowwweowwwwww"
      : "https://mygtcportal.com/agent_register?token=2jeuowwwe2owwwww";

  return (
    <div className="flex flex-row gap-5 justify-center relative pt-4">
      <Link
        className="bg-gradient-to-r from-[hsl(227,53%,33%)] via-[#1b2258] to-[#10122d] shine-button text-white text-sm 3xl:text-xl px-1 md:px-8 py-3 text-center rounded-md md:w-auto uppercase w-[220px] md:m-0 mx-auto duration-500 transition-colors hover:bg-gradient-to-r hover:from-[#10122d] hover:to-[#1b245e]"
        href='https://mygtcportal.com/agent_register?token=2jeuowwwe2owwwww'
        target="_blank"
      >
        {t("liveAccount")}
      </Link>
      <button
        className="bg-secondary text-white text-xs 3xl:text-xl px-1 md:px-8 py-3 text-center shine-button rounded-md md:w-auto w-[200px] md:m-0 uppercase mx-auto transition-colors duration-900 hover:bg-gradient-to-r hover:from-[#10122d] hover:to-[#1b245e]"
        onClick={() => {
          router.push("/free-demo-account", { locale: locale });
        }}
      >
        {t("demoAccount")}
      </button>
    </div>
  );
};

export default Button;
