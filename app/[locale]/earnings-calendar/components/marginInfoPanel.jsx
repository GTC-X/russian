import { useTranslations } from 'next-intl';
import React from 'react';

const EarningsMarginImpact = () => {
  const t = useTranslations('earningPage');

  return (
    <section className="bg-[#F2F2F5] flex justify-end py-12 md:py-20 relative">
      {/* Sticky Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:flex justify-end">
        <div className="sticky top-1/3 -translate-y-3/2 h-[80vh] flex items-start justify-cente">
          <img
            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/bg-earning.webp"
            alt="Sticky Background"
            className="max-h-full object-contain"
          />
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Text Content */}
          <div className="w-full lg:w-2/3 text-[#20205B] space-y-8 text-[15px] leading-[1.8]">
            <div className=' max-w-[710px]'>
              <h2 className="md:text-3xl xl:text-[40px] text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">
                {t("howStockEarning.title")}
              </h2>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                {t("howStockEarning.desc")}
              </p>
            </div>

            <div className=' max-w-[710px]'>
              <h3 className="md:text-[20px] xl:text-[24px]  text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">{t("howStockEarning.item1.heading")}</h3>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                {t("howStockEarning.item1.para1")}
              </p>
            </div>

            <div className=' max-w-[710px]'>
              <h3 className="md:text-[20px] xl:text-[24px] text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">{t("howStockEarning.item2.heading")}</h3>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                {t("howStockEarning.item2.para1")}
              </p>
            </div>

            <div className=' max-w-[710px]'>
              <h3 className="md:text-[20px] xl:text-[24px]  text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">{t("howStockEarning.item3.heading")}</h3>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                {t("howStockEarning.item3.para1")}
              </p>
              <ul className="list-none ml-6 mt-2 space-y-2 text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                {[
                  t("howStockEarning.item3.list1"),
                  t("howStockEarning.item3.list2"),
                  t("howStockEarning.item3.list3"),
                  t("howStockEarning.item3.list4"),
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-3 h-3 mt-1 text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847L19.336 24 12 19.897 4.664 24 6 15.597 0 9.75l8.332-1.595L12 .587z" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px] my-2">
                {t("howStockEarning.item3.para2")}
              </p>
            </div>

            <div className=' max-w-[710px]'>
              <h3 className="md:text-[20px] xl:text-[24px] text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">{t("howStockEarning.item4.heading")}</h3>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px] my-2">
                {t("howStockEarning.item4.para1")}
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                <li>{t("howStockEarning.item4.list1")}</li>
                <li>{t("howStockEarning.item4.list2")}</li>
                <li>{t("howStockEarning.item4.list3")}</li>
                <li>{t("howStockEarning.item4.list4")}</li>
                <li>{t("howStockEarning.item4.list5")}</li>
              </ul>
            </div>

            <div className=' max-w-[710px]'>
              <h3 className="md:text-[20px] xl:text-[24px] text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">{t("howStockEarning.item5.heading")}</h3>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                {t("howStockEarning.item5.para1")}
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                <li>{t("howStockEarning.item5.list.one")}</li>
                <li>{t("howStockEarning.item5.list.two")}</li>
              </ul>
            </div>

            <div>
              <h3 className="md:text-[20px] xl:text-[24px] text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">{t("howStockEarning.item6.heading")}</h3>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
               {t("howStockEarning.item6.para1")}
              </p>
            </div>

            <div className='mb-5'>
              <h3 className="md:text-[20px] xl:text-[24px] text-xl font-bold mb-5 font-[#000032] leading-normal md:leading-[48px]">{t("howStockEarning.item7.heading")}</h3>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
               {t("howStockEarning.item7.para1")}
              </p>
              <p className="text-[#4D4D70] text-base md:text-[22px] leading-normal xl:leadding-[32px]">
                {t("howStockEarning.item7.para2")}
              </p>
            </div>

            <div>
              <a href='https://web.mygtc.app/login/register?code=2544249&scope=1' target='_blank' className="bg-[#000032] hover:bg-[#1b1b4d] text-white text-sm md:text-lg font-semibold px-8 py-4 rounded-[12px] transition duration-200">
                {t("btnText")}
              </a>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};

export default EarningsMarginImpact;
