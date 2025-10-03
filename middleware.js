import createMiddleware from "next-intl/middleware";

export const AppLanguage = {
  English: "en",
  Russian: "ru_RU",
};

export default createMiddleware({
   // A list of all locales that are supported
   locales: ["en","ru_RU"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "ru_RU",
  localeDetection: false,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // API, _next, static pages, and any pathnames with a dot (e.g. favicon.ico)
  matcher: [
    "/((?!api|_next|_vercel|lp-static|.*\\..*).*)"  // Exclude /static path
  ],
};