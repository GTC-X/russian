"use client";
import React from "react";
import LocationContextProvider from "@/context/location-context";
import VPSPakFrom from "../common/VPSPakFrom";
import ClientRegistrationForm from "../common/ClientRegistrationForm";

const ContentSection2 = () => {
  return (
    <LocationContextProvider>
      <section className="py-6 md:py-12 xl:py-14 2xl:py-16" id="new1">
        <div className="container">
          <div className="relative text-center mb-10">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl xl:text-[22px] 2xl:text-[26px] capitalize max-w-4xl leading-normal font-bold">
              Seize the opportunity to be part of the world’s premier online
              trading expo and take your trading to the next level! Visit our
              booth Booth No. 36 for exclusive insights and opportunities.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
  {/* Form Section */}
  <div className="order-1 md:order-2 w-full md:w-auto mb-10 md:mb-0">
    <ClientRegistrationForm showCountryField={true} showDropdown={false} />
  </div>

  {/* Content Section */}
  <div className="content-side-portion text-left order-2 md:order-1 w-full md:w-auto">
    <div>
      <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-base font-[600] xl:text-[25px] 2xl:text-[25px] uppercase max-w-3xl leading-tight">
        Join GTCFX at Forex Expo Dubai 2025 – Booth #36
      </h2>
      <p className="max-w-3xl mt-5">
        We're excited to invite you to visit GTCFX at Booth #36 during Forex Expo
        Dubai 2025, where we are proud to be an GLOBAL SPONSOR. This is your
        opportunity to:
      </p>
      <ul className="list-disc pl-5 mt-4">
        <li>Connect with industry experts</li>
        <li>Explore our cutting-edge trading solutions</li>
        <li>Discover how GTCFX can elevate your trading experience</li>
      </ul>

      <h3 className="font-semibold text-lg mt-6">Event Details:</h3>
      <ul className="list-none pl-0 mt-2">
        <li>
          <b>Date:</b> October 06-07, 2025
        </li>
        <li>
          <b> GLOBAL SPONSOR</b>{" "}
        </li>
        <li>
          <b>Location:</b> Dubai World Trade Centre, Dubai, UAE{" "}
        </li>
      </ul>

      <p className="mt-3">
        Join us at <b className="text-secondary">Booth #36 </b> for a rewarding
        trading journey with GTCFX!
      </p>

      <p className="mt-3 font-semibold uppercase text-secondary">
        TRADE, INVEST & PARTNER with a Globally Trusted and Multi-Regulated
        Company.
      </p>
    </div>
  </div>
</div>

        </div>
      </section>
    </LocationContextProvider>
  );
};

export default ContentSection2;
