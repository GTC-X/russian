'use client'
import React from 'react';
import SwapTab from '../components/SwapData/SwapTab';
import { useTranslations } from 'next-intl';
import Hero from '../components/common/Hero';

const SwapUpdatePage = () => {
  const t = useTranslations("swapUpdate.content")
  const t2 = useTranslations("swapUpdate.metaData")
  const data = {
    Forex: [
      {"symbol": "AUDCAD", "swap type": "in points", "swap long": 2.5, "swap short": -5.05},
    {"symbol": "AUDCHF", "swap type": "in points", "swap long": 4.86, "swap short": -7.9},
    {"symbol": "AUDDKK", "swap type": "in points", "swap long": -6, "swap short": -22.24},
    {"symbol": "AUDHUF", "swap type": "in points", "swap long": -21.51, "swap short": -25.89},
    {"symbol": "AUDJPY", "swap type": "in points", "swap long": 6.86, "swap short": -11.95},
    {"symbol": "AUDNOK", "swap type": "in points", "swap long": -2.15, "swap short": -2.15},
    {"symbol": "AUDNZD", "swap type": "in points", "swap long": -0.34, "swap short": -3.08},
    {"symbol": "AUDSEK", "swap type": "in points", "swap long": -0.64, "swap short": -26.29},
    {"symbol": "AUDSGD", "swap type": "in points", "swap long": -5, "swap short": -3},
    {"symbol": "AUDUSD", "swap type": "in points", "swap long": -3.02, "swap short": -0.1},
    {"symbol": "AUDZAR", "swap type": "in points", "swap long": -211.2, "swap short": 4.38},
    {"symbol": "CADCHF", "swap type": "in points", "swap long": 2.9, "swap short": -6.2},
    {"symbol": "CADDKK", "swap type": "in points", "swap long": -6, "swap short": -36.25},
    {"symbol": "CADJPY", "swap type": "in points", "swap long": 5.94, "swap short": -8.9},
    {"symbol": "CADMXN", "swap type": "in points", "swap long": -45.56, "swap short": -6},
    {"symbol": "CADNOK", "swap type": "in points", "swap long": 0.07, "swap short": -4.17},
    {"symbol": "CADSEK", "swap type": "in points", "swap long": -6, "swap short": -46.25},
    {"symbol": "CADSGD", "swap type": "in points", "swap long": -2.57, "swap short": -4.52},
    {"symbol": "CHFDKK", "swap type": "in points", "swap long": -67.57, "swap short": -6},
    {"symbol": "CHFHUF", "swap type": "in points", "swap long": -75.4, "swap short": -24.66},
    {"symbol": "CHFJPY", "swap type": "in points", "swap long": -1.98, "swap short": -3.56},
    {"symbol": "CHFNOK", "swap type": "in points", "swap long": -8.95, "swap short": 0.2},
    {"symbol": "CHFPLN", "swap type": "in points", "swap long": -70.95, "swap short": -12.3},
    {"symbol": "CHFSEK", "swap type": "in points", "swap long": -82.53, "swap short": -15.2},
    {"symbol": "CHFSGD", "swap type": "in points", "swap long": -8.1, "swap short": 0.26},
    {"symbol": "CHFZAR", "swap type": "in points", "swap long": -496.96, "swap short": 13.16},
    {"symbol": "CNHJPY", "swap type": "in points", "swap long": 0, "swap short": -3},
    {"symbol": "DKKNOK", "swap type": "in points", "swap long": -1, "swap short": -1},
    {"symbol": "DKKSEK", "swap type": "in points", "swap long": -4.26, "swap short": -1.87},
    {"symbol": "EURAUD", "swap type": "in points", "swap long": -9.13, "swap short": 6.21},
    {"symbol": "EURCAD", "swap type": "in points", "swap long": -1.71, "swap short": -0.22},
    {"symbol": "EURCHF", "swap type": "in points", "swap long": 3.21, "swap short": -6.94},
    {"symbol": "EURCNH", "swap type": "in points", "swap long": -1.28, "swap short": -2.17},
    {"symbol": "EURCZK", "swap type": "in points", "swap long": -14.15, "swap short": -3.52},
    {"symbol": "EURDKK", "swap type": "in points", "swap long": -7.34, "swap short": -24.33},
    {"symbol": "EURGBP", "swap type": "in points", "swap long": -4.83, "swap short": 3.32},
    {"symbol": "EURHKD", "swap type": "in points", "swap long": -18.91, "swap short": -19.37},
    {"symbol": "EURHUF", "swap type": "in points", "swap long": -41.4, "swap short": -39.14},
    {"symbol": "EURILS", "swap type": "in points", "swap long": -24.9, "swap short": 0.3},
    {"symbol": "EURJPY", "swap type": "in points", "swap long": 7.28, "swap short": -14.65},
    {"symbol": "EURMXN", "swap type": "in points", "swap long": -75.87, "swap short": -6.87},
    {"symbol": "EURNOK", "swap type": "in points", "swap long": -4.61, "swap short": 0.02},
    {"symbol": "EURNZD", "swap type": "in points", "swap long": -13.72, "swap short": 0.16},
    {"symbol": "EURPLN", "swap type": "in points", "swap long": -34.44, "swap short": -1.96},
    {"symbol": "EURSEK", "swap type": "in points", "swap long": -20.35, "swap short": -21.35},
    {"symbol": "EURSGD", "swap type": "in points", "swap long": -6.45, "swap short": -4.15},
    {"symbol": "EURTRY", "swap type": "in points", "swap long": -4616.25, "swap short": -58.75},
    {"symbol": "EURUSD", "swap type": "in points", "swap long": 0, "swap short": 0},
    {"symbol": "EURZAR", "swap type": "in points", "swap long": -351.48, "swap short": 6.83},
    {"symbol": "GBPAUD", "swap type": "in points", "swap long": -0.32, "swap short": -1.85},
    {"symbol": "GBPCAD", "swap type": "in points", "swap long": 6.47, "swap short": -9.88},
    {"symbol": "GBPCHF", "swap type": "in points", "swap long": +9.84, "swap short": -13.53},
        {"symbol": "GBPUSD", "swap type": "in points", "swap long": -3.34, "swap short": +2.20 },
    {"symbol": "GBPCZK", "swap type": "in points", "swap long": -29.76, "swap short": 0.4},
    {"symbol": "GBPDKK", "swap type": "in points", "swap long": -6, "swap short": -69.59},
    {"symbol": "GBPHKD", "swap type": "in points", "swap long": -5.35, "swap short": -60.95},
    {"symbol": "GBPHUF", "swap type": "in points", "swap long": -36.54, "swap short": -31.21},
    {"symbol": "GBPJPY", "swap type": "in points", "swap long": 11.72, "swap short": -22.15},
    {"symbol": "GBPMXN", "swap type": "in points", "swap long": -77.55, "swap short": -6},
    {"symbol": "GBPNOK", "swap type": "in points", "swap long": -1.34, "swap short": -5.97},
    {"symbol": "GBPNZD", "swap type": "in points", "swap long": 0.09, "swap short": -6.61},
    {"symbol": "GBPPLN", "swap type": "in points", "swap long": -54.79, "swap short": -6}, 
    {"symbol": "GBPSEK", "swap type": "in points", "swap long": -6, "swap short": -91.64},
    {"symbol": "GBPSGD", "swap type": "in points", "swap long": -1.4, "swap short": -10.63},
    {"symbol": "GBPTRY", "swap type": "in points", "swap long": -5240.03, "swap short": -61.25},

    {"symbol": "GBPZAR", "swap type": "in points", "swap long": -419, "swap short": 5.64},
    {"symbol": "HKDJPY", "swap type": "in points", "swap long": 0, "swap short": -2.35},
    {"symbol": "MXNJPY", "swap type": "in points", "swap long": -2, "swap short": -2.78},
    {"symbol": "NOKJPY", "swap type": "in points", "swap long": -1, "swap short": -2},
    {"symbol": "NOKSEK", "swap type": "in points", "swap long": -2, "swap short": -4},
    {"symbol": "NZDCAD", "swap type": "in points", "swap long": 1.26, "swap short": -3.98},
    {"symbol": "NZDCHF", "swap type": "in points", "swap long": 3.61, "swap short": -6.88},
    {"symbol": "NZDDKK", "swap type": "in points", "swap long": -6, "swap short": -34.99},
    {"symbol": "NZDHUF", "swap type": "in points", "swap long": -12.45, "swap short": -11.9},
    {"symbol": "NZDJPY", "swap type": "in points", "swap long": 4.47, "swap short": -10.92},
    {"symbol": "NZDNOK", "swap type": "in points", "swap long": -0.12, "swap short": -4.99},
    {"symbol": "NZDSEK", "swap type": "in points", "swap long": -6, "swap short": -45.81},
    {"symbol": "NZDSGD", "swap type": "in points", "swap long": 0.03, "swap short": -6.51},
    {"symbol": "NZDUSD", "swap type": "in points", "swap long": -1.15, "swap short": 0.16},
    {"symbol": "SEKJPY", "swap type": "in points", "swap long": -1.3, "swap short": -1.34},
    {"symbol": "SGDHKD", "swap type": "in points", "swap long": -4, "swap short": -32},
    {"symbol": "SGDJPY", "swap type": "in points", "swap long": 0, "swap short": -14.22},
    {"symbol": "TRYJPY", "swap type": "in points", "swap long": -1.56, "swap short": -6.75},
    {"symbol": "USDCAD", "swap type": "in points", "swap long": 4.23, "swap short": -7.9},
    {"symbol": "USDCHF", "swap type": "in points", "swap long": 5.33, "swap short": -7.33},
    {"symbol": "USDCNH", "swap type": "in points", "swap long": 0.05, "swap short": -9.2},
    {"symbol": "USDCNY", "swap type": "in points", "swap long": -71.5, "swap short": -49.75},
    {"symbol": "USDCZK", "swap type": "in points", "swap long": -1.65, "swap short": -13.93},
    {"symbol": "USDDKK", "swap type": "in points", "swap long": -6, "swap short": -54.35},
    {"symbol": "USDHKD", "swap type": "in points", "swap long": 0.75, "swap short": -53.74},
    {"symbol": "USDHUF", "swap type": "in points", "swap long": -20.36, "swap short": -2.69},
    {"symbol": "USDILS", "swap type": "in points", "swap long": -18, "swap short": -19},
    {"symbol": "USDJPY", "swap type": "in points", "swap long": 9.81, "swap short": -18.46},
    {"symbol": "USDMXN", "swap type": "in points", "swap long": -40.51, "swap short": -8.31},
    {"symbol": "USDNOK", "swap type": "in points", "swap long": 0.04, "swap short": -4.81},
    {"symbol": "USDPLN", "swap type": "in points", "swap long": -12.39, "swap short": -3.7},
    {"symbol": "USDSEK", "swap type": "in points", "swap long": -6, "swap short": -72.59},
    {"symbol": "USDSGD", "swap type": "in points", "swap long": 0.03, "swap short": -9.9},
    {"symbol": "USDTHB", "swap type": "in points", "swap long": -30, "swap short": -28},
    {"symbol": "USDTRY", "swap type": "in points", "swap long": -3661.5, "swap short": -70.36},
    {"symbol": "USDZAR", "swap type": "in points", "swap long": -231.6, "swap short": 3.21},
    {"symbol": "ZARJPY", "swap type": "in points", "swap long": 0, "swap short": -2.35},
    ],
    Metal: [
      {"symbol": "XAGUSD", "swap type": "in points", "swap long": -5.54, "swap short":1.31},
      {"symbol": "XAUAUD", "swap type": "in points", "swap long": -27.7, "swap short": -5.8},
      {"symbol": "XAUCHF", "swap type": "in points", "swap long": -27.7, "swap short": -5.8},
      {"symbol": "XAUEUR", "swap type": "in points", "swap long": -27.7, "swap short": -5.8},
      {"symbol": "XAUGBP", "swap type": "in points", "swap long": -27.7, "swap short": -5.8},
      {"symbol": "XAUJPY", "swap type": "in points", "swap long": -27.7, "swap short": -5.8},
      {"symbol": "XAUUSD", "swap type": "in points", "swap long": -35.5, "swap short": 10.29},
      {"symbol": "BRNUSD", "swap type": "in points", "swap long": 0.16, "swap short": -2.94},
      {"symbol": "USOILRoll", "swap type": "in points", "swap long": 1.11, "swap short": -50.43},
      {"symbol": "WTIUSD", "swap type": "in points", "swap long": -0.53, "swap short": -2.05},
    ],
    Crypto: [
      {"symbol": "ADAUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "ATOMUSDT", "swap type": "in percentage terms, using current price", "swap long": -24, "swap short": -13.5},
      {"symbol": "BATUSDT", "swap type": "in percentage terms, using current price", "swap long": -24, "swap short": -13.5},
      {"symbol": "BCHUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "BTCUSDT", "swap type": "in percentage terms, using current price", "swap long": -8.625, "swap short": -3.75},
      {"symbol": "DASHUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "DOGEUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "EOSUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "ETHUSDT", "swap type": "in percentage terms, using current price", "swap long": -34.5, "swap short": -19},
      {"symbol": "FILUSDT", "swap type": "in percentage terms, using current price", "swap long": -24, "swap short": -13.5},
      {"symbol": "LTCUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "TRUMPUSDT", "swap type": "in percentage terms, using current price", "swap long": -34.5, "swap short": -19},
      {"symbol": "TRXUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "USDSUDT", "swap type": "in money, using margin currency", "swap long": -8, "swap short": -4},
      {"symbol": "XLMUSDT", "swap type": "in percentage terms, using current price", "swap long": -27, "swap short": -16.5},
      {"symbol": "XMRUSDT", "swap type": "in percentage terms, using current price", "swap long": -24, "swap short": -13.5},
      {"symbol": "XRPUSDT", "swap type": "in percentage terms, using current price", "swap long": -24, "swap short": -13.5},
      {"symbol": "ZECUSDT", "swap type": "in percentage terms, using current price", "swap long": -24, "swap short": -13.5},
    ],
    Indices: [
      {"symbol": "CUCUSD", "swap type": "in points", "swap long": -68.94, "swap short": 1.54},
      {"symbol": "XPDUSD", "swap type": "in points", "swap long": -19.92, "swap short": 0.07},
      {"symbol": "XPTUSD", "swap type": "in points", "swap long": -21.94, "swap short": 0.2},
      {"symbol": "AUS200c", "swap type": "in percentage terms, using current prices", "swap long": -7.42, "swap short": -22},
      {"symbol": "CN50c", "swap type": "in percentage terms, using current prices", "swap long": -8.5, "swap short": -2.5},
      {"symbol": "EU50c", "swap type": "in percentage terms, using current prices", "swap long": -7.25, "swap short": 0.25},
      {"symbol": "GER40c", "swap type": "in percentage terms, using current prices", "swap long": -5.17, "swap short": 1.08},
      {"symbol": "HK50c", "swap type": "in percentage terms, using current prices", "swap long": -5.24, "swap short": 1.24},
      {"symbol": "JPN225c", "swap type": "in percentage terms, using current prices", "swap long": -2.73, "swap short": -1.88},
      {"symbol": "SPA35c", "swap type": "in percentage terms, using current prices", "swap long": -7.25, "swap short": -0.25},
      {"symbol": "SPT_DXY", "swap type": "in points", "swap long": -2.5, "swap short": -2.5},
      {"symbol": "UK100c", "swap type": "in percentage terms, using current prices", "swap long": -3.25, "swap short": 0.72},
      {"symbol": "US30c", "swap type": "in percentage terms, using current prices", "swap long": -3.42, "swap short": 0.51},
      {"symbol": "US500c", "swap type": "in percentage terms, using current prices", "swap long": -3.42, "swap short": 0.51},
      {"symbol": "USTECHc", "swap type": "in percentage terms, using current prices", "swap long": -3.42, "swap short": 0.51},
      {"symbol": "AUD_Basket", "swap type": "in points", "swap long": -18.93, "swap short": -16},
      {"symbol": "Crypto_Basket", "swap type": "in percentage terms, using current prices", "swap long": -27.62, "swap short": -16},
      {"symbol": "EUR_Basket", "swap type": "in points", "swap long": -356.51, "swap short": -611.82},
      {"symbol": "Energy_Basket", "swap type": "in points", "swap long": -33.86, "swap short": -14.06},
      {"symbol": "GBP_Basket", "swap type": "in points", "swap long": -33.34, "swap short": -7.24},
      {"symbol": "Index_Basket", "swap type": "in percentage terms, using current prices", "swap long": -8.52, "swap short": 0.36},
      {"symbol": "Metal_Basket", "swap type": "in points", "swap long": -292.95, "swap short": 6.85},
      {"symbol": "USD_Basket", "swap type": "in points", "swap long": -12.43, "swap short": -10.32},
      {"symbol": "NGCUSD", "swap type": "in points", "swap long": -110, "swap short": -60.12},
      {"symbol": "UKOUSD", "swap type": "in points", "swap long": 0.04, "swap short": -2.18},
      {"symbol": "USOUSD", "swap type": "in points", "swap long": 0.03, "swap short": -2.38},
    ],
  };

  return (
    <>
    <Hero
     title={t2("title")}
        description={t2("des")}
    />
      <section className='py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20'>
        <div className='container'>
            <div className='text-center'>
            <h2 className="HeadingH2 mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">{t("heading1")}</h2>
            <p>{t("des1")}</p>
            <p>{t("des2")}</p>
            </div>
            <div className='inner-information'>
                <SwapTab data={data} />
            </div>
        </div>
        
      </section>
    </>
  );
};

export default SwapUpdatePage;
