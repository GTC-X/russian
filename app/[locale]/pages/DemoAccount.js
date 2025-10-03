"use client";
import { useTranslations } from "next-intl";
import Banner from "../components/account/LiveDemo/Banner";
import DemoAccountBoxes from "../components/account/LiveDemo/DemoAccountBoxes";
import MainForm from "../components/common/MainForm";
import LocationContextProvider from "@/context/location-context";
import TradeInvest from "../components/MoneyExpo/TradeInvest";
import WhyGTC from "../components/home/WhyGTC";
import WhyBoss from "../components/about/WhyBoss";
import PaymentOption from "../components/account/PaymentOption";
import WhyGtcGroup from "./WhyGtcGroup";



const DemoAccountPage = () => {
  const t = useTranslations("accounts");

  return (
    <>
    <LocationContextProvider>
      <Banner
      />
     <WhyGTC />
     <PaymentOption paddingClass="py-0" />
    <WhyGtcGroup />
 
   
      </LocationContextProvider>
    </>
  );
};

export default DemoAccountPage;
  