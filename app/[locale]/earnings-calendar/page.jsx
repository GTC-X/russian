

import { createTranslator } from "next-intl";
import React from "react";
import EarningCalenderPage from "../pages/EarningCalender";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/earnings-dividends-calendar`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/earnings-dividends-calendar`;


  return {
    title: t("metaData.earningPage.title"),
    description: t("metaData.earningPage.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return (
    <>
    <EarningCalenderPage />
    </>
  );
};

export default Page;