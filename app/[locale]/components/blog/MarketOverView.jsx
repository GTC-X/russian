// import { useTranslations } from 'next-intl';
// import React from 'react';

// const MarketOverViewNew = () => {

//   const t= useTranslations("market_overview")
//     // ✅ Extract header values as an array
//   const headers = Object.values(t.raw("headers"));


//   const rows = [
//     {
//       instrument: "FX",
//       data: [
//         t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),


//       ],
//     },
//     {
//       instrument: "Metals",
//       data: [
//             t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),





//       ],
//     },
//     {
//       instrument: "OIL/Energies (BRNUSD)",
//       data: [
//         t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),






//       ],
//     },
//     {
//       instrument: "OIL/Energies (WTIUSD)",
//       data: [
//         t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),






//       ],
//     },
//     {
//       instrument: "OIL/Energies (NGCUSD)",
//       data: [
//            t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),






//       ],
//     },
//     {
//       instrument: "Indices - AUS200c",
//       data: [
//              t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),



//       ],
//     },
//     {
//       instrument: "Indices - CN50c",
//       data: [
//            t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),




//       ],
//     },
//     {
//       instrument: "Indices - EU50c",
//       data: [
//             t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),




//       ],
//     },
//     {
//       instrument: "Indices - FRA40c",
//       data: [
//               t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),



//       ],
//     },
//     {
//       instrument: "Indices - GER40c",
//       data: [
//           t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),


//       ],
//     },
//     {
//       instrument: "Indices - HK50c",
//       data: [
//            t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),



//       ],
//     },
//     {
//       instrument: "Indices - JPN225c",
//       data: [
//             t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),




//       ],
//     },
//     {
//       instrument: "Indices - SPA35c",
//       data: [
//              t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),




//       ],
//     },
//     {
//       instrument: "Indices - UK100c",
//       data: [
//         t('status.normal'),
//         t('status.closed'),
//           t('status.daylight1'),

//       ],
//     },
//     {
//       instrument: "Indices - US30c",
//       data: [
//               t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),

//       ],
//     },
//     {
//       instrument: "Indices - US500c",
//       data: [
//           t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),

//       ],
//     },
//     {
//       instrument: "Indices - USTECHc",
//       data: [
//            t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),

//       ],
//     },

//     {
//       instrument: "EU Shares:Exchanges - SIX",
//       data: [
//           t('status.normal'),
//         t('status.normal'),
//         t('status.normal'),

//          ],
//     },
//     {
//       instrument: "EU Shares:Exchanges - BM",
//       data: [
//          t('status.normal'),
//         t('status.normal'),
//         t('status.normal'),

//       ],
//     },
//     {
//       instrument: "EU Shares:Exchanges - EURONEXT",
//       data: [
//          t('status.normal'),
//         t('status.normal'),
//         t('status.normal'),

//       ],
//     },
//     {
//       instrument: "EU Shares:Exchanges - LSE",
//       data: [
//              t('status.normal'),
//         t('status.closed'),
//         t('status.normal'),

//       ],
//     },
//     {
//       instrument: "EU Shares:Exchanges - XETRA",
//       data: [
//            t('status.normal'),
//         t('status.normal'),
//         t('status.normal'),

//       ],
//     },

//     {
//       instrument: "NYSE (US Shares:Exchanges)",
//       data: [
//        t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),

//       ],
//     },
//     {
//       instrument: "NDAQ (US Shares:Exchanges)",
//       data: [
//                 t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),

//       ],
//     },
//     {
//       instrument: "HKEX (Asia Shares:Exchanges)",
//       data: [
//                t('status.normal'),
//          t('status.normal'),
//          t('status.normal'),
//       ],
//     },
//     {
//       instrument: "TSE (Asia Shares:Exchanges)",
//       data: [
//         t('status.closed'),
//         t('status.normal'),
//         t('status.normal'),

//       ],
//     },
//     {
//       instrument: "Crypto",
//       data: [
//         t('status.normal'),
//         t('status.normal'),
//         t('status.normal'),

//       ],
//     },
//     {
//       instrument: "GOLD Futures",
//       data: [
//          t('status.normal'),
//         t('status.normal'),
//         t('status.normal'),
//       ],
//     },

//   ]; 

//   const renderCellContent = (item) => {
//     if (!item) return "";

//     return item.split('\n').map((line, i) => (
//       <span key={i} style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{line}</span>
//     ));
//   };

//   const getCellClass = (item) => {
//     if (!item) return "";
//     const normalizedItem = item.trim().toLowerCase();

//     if (normalizedItem.includes("early closed")) return "bg-secondary text-white";
//     if (normalizedItem.includes("closed")) return "bg-primary text-white";
//     if (normalizedItem.includes("early close")) return "bg-secondary text-white";

//     return "";
//   };

//   return (
//     <table className="trading_hours_table container">
//       <thead className="header-section">
//         <tr>
//           {headers.length > 0 ? headers.map((header, index) => (
//             <th key={index} className="shadow-2xl text-xs">{header}</th>
//           )) : <th>Error: Headers not found</th>}
//         </tr>
//       </thead>
//       <tbody>
//         {rows.map((row, index) => (
//           <tr key={index}>
//             <td scope="row">{row.instrument}</td>
//             {row.data.map((item, idx) => (
//               <td key={idx} className={getCellClass(item)}>
//                 <span className='text-sm'>{renderCellContent(item)}</span>
//               </td>
//             ))}
//           </tr>
//         ))} 
//       </tbody>
//     </table>
//   );
// };

// export default MarketOverViewNew;


import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useState } from 'react';
import * as XLSX from "xlsx";
import { fetchAPI } from '../utilities/fetch-api';
import { useParams } from 'next/navigation';

const MarketOverViewNew = () => {
  const params = useParams();

  const t = useTranslations("market_overview")
  // ✅ Extract header values as an array

  const [excelSheets, setExcelSheets] = useState([]); // all sheets
  const [loading, setLoading] = useState(true)

  const fetchExcelFromURL = async (url) => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "buffer" });

      const allData = workbook.SheetNames.map((sheetName) => ({
        name: sheetName,
        data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 }),
      }));
      return allData; // array of { name, data }
    } catch (error) {
      console.error("Error fetching or parsing Excel:", error);
      return [];
    }
  };


  const fetchData = useCallback(async () => {
    setLoading(true)
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/holiday-schedules`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: "*",
      locale: params?.locale == "zh-hans" ? "zh-Hans" : params?.locale,
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const res = await fetchAPI(path, urlParamsObject, options);
      console.log({ res })
      const url = res?.data?.[0]?.attributes?.file?.data?.attributes?.url;
      const fullURL = "https://api.gtcfx.com" + url;
      const parsedSheets = await fetchExcelFromURL(fullURL);
      setExcelSheets(parsedSheets);
      setLoading(false)
    } catch (err) {
      console.error("❌ Error fetching Excel data", err);
      setLoading(false)
    }
  }, []);


  useEffect(() => {
    fetchData();
  }, []);


  const renderCellContent = (item) => {
    if (!item) return "";

    return item.split('\n').map((line, i) => (
      <span key={i} style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{line}</span>
    ));
  };

  const getCellClass = (item) => {
    if (!item) return "";
    const normalizedItem = item.trim().toLowerCase();

    if (normalizedItem.includes("early closed")) return "bg-secondary text-white";
    if (normalizedItem.includes("closed")) return "bg-primary text-white";
    if (normalizedItem.includes("early close")) return "bg-secondary text-white";

    return "";
  };


  const rawSheet = excelSheets[0]?.data || [];

  // First row is the header
  const header = rawSheet[0] || [];

  // Remaining rows = table body
  const row = rawSheet.slice(1).map((row) => ({
    instrument: row[0],
    data: row.slice(1),
  }));

  return (
    <>
      {loading ?
        <div className=' my-6 flex justify-center items-center min-h-64'>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
        :
        <table className="trading_hours_table container">
          <thead className="header-section">
            <tr>
              {header.length > 0 ? (
                header.map((header, index) => (
                  <th key={index} className="shadow-2xl text-xs">
                    {header}
                  </th>
                ))
              ) : (
                <th>Error: Headers not found</th> 
              )}
            </tr>
          </thead>
          <tbody>
            {row.map((row, index) => (
              <tr key={index}>
                <td className="font-medium">{row.instrument}</td>
                {row.data.map((item, idx) => (
                  <td key={idx} className={getCellClass(item)}>
                    <span className="text-sm">{renderCellContent(item)}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
};

export default MarketOverViewNew;