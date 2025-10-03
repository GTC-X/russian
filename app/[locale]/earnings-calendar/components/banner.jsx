import React, { useCallback, useEffect, useState } from 'react';
import { fetchAPI } from '../../components/utilities/fetch-api';
import { cos } from '@amcharts/amcharts4/.internal/core/utils/Math';
import * as XLSX from "xlsx"
import Spinner from '../../components/common/Spinner';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const EarningsDividendsCalendar = () => {
    const t = useTranslations('earningPage');
    const params = useParams();

    const [excelData, setExcelData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const fetchExcelFromURL = async (url) => {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "buffer" });

            const allData = workbook.SheetNames.map((sheetName) => ({
                name: sheetName,
                data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
            }));
            return allData; // array of { name, data }
        } catch (error) {
            console.error("Error fetching or parsing Excel:", error);
            return [];
        }
    };

    const fetchData = useCallback(async () => {
        setLoading(true);
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = `/earnings`;
        const urlParamsObject = {
            sort: { createdAt: "desc" },
            populate: "*",
            locale: params?.locale == "zh-hans" ? "zh-Hans" : params?.locale,
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };

        try {
            const res = await fetchAPI(path, urlParamsObject, options);
            const url = res?.data?.[0]?.attributes?.data?.data?.attributes?.url;
            const fullURL = "https://api.gtcfx.com" + url;
            const parsedData = await fetchExcelFromURL(fullURL);
            setData(res?.data)
            setExcelData(parsedData?.[0]?.data || []);
            setLoading(false)
        } catch (err) {
            console.error("❌ Error fetching announcements", err);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="bg-white text-[#000032] py-10  container mx-auto">
            <div className='max-w-4xl text-left'>
                <h1 className="md:text-5xl xl:text-[50px] text-2xl font-black mb-6 max-w-xl leading-normal md:leading-[60px]">{t("banner.title")}</h1>
                <p className="text-sm md:text-base text-[#4D4D70] mb-10 max-w-xl">
                    {t("banner.para")}
                </p>
            </div>
            <h2 className="md:text-xl xl:text-2xl text-lg font-semibold mb-4">{t("banner.titled")} {data?.[0]?.attributes?.date || ""}  (GMT+3)</h2>

            <div className="flex flex-col lg:flex-row gap-6 xl:gap-16 items-end">
                {/* Table */}
                <div className="w-full lg:w-2/3 bg-white rounded-md">
                    {loading ?
                        <div className=' flex justify-center min-h-[300px]'>
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                        :
                        <>
                            {Array.isArray(excelData) && excelData.length > 0 && (

                                <table className="w-full text-sm text-left border-separate">
                                    <thead>
                                        <tr className="text-[#808098] text-center">
                                            {Object.keys(excelData?.[0])?.map((header) => (
                                                <th key={header} className="w-1/3 capitalize">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#4D4D70] font-medium text-center">
                                        {excelData?.map((row, rowIndex) => (
                                            <tr
                                                key={rowIndex}
                                                className="bg-white odd:bg-[#F2F2F5] text-[#4D4D70]"
                                            >
                                                {Object.values(row).map((value, colIndex) => (
                                                    <td key={colIndex} className="py-3 px-2">
                                                        {value}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </>
                    }
                </div>

                {/* How to Calculate Dividend */}
                <div className="w-full lg:w-1/3 bg-white text-sm text-[#4D4D70]">
                    <h3 className="text-base xl:text-[22px] mb-4">{t("howToCalculate.heading")}</h3>

                    <div className="mb-4 text-base font-[##4D4D70]">
                        <p className="font-medium text-lg md:text-[18px] mb-2">{t("howToCalculate.title1")}</p>
                        <p className="mt-1 leading-relaxed">
                            {t("howToCalculate.para1")}
                        </p>
                    </div>

                    <div>
                        <p className="font-medium text-lg md:text-[18px] mb-2">{t("howToCalculate.title2")}</p>
                        <p className="mt-1 leading-relaxed">
                            {t("howToCalculate.para2")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarningsDividendsCalendar;
