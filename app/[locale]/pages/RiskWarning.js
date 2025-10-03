"use client";
import React, { useState } from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import { Tab, Disclosure } from "@headlessui/react";
import { FaFilePdf } from "react-icons/fa";
const RiskWarningPage = () => {
  const t = useTranslations("footerPage");

  const legalData = {
  'GTC Financial Consultancy': [
    {
      title: 'GTC Financial Consultancy and GTC Global LTD ( Mauritius)',
      items: [
        { name: 'Client Onboarding Application GTC FC - MU – Retail V1.0', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/01.+Client+Onboarding+Application+GTC+FC+-+Retail+V1.0+.pdf' },
        { name: 'Corporate Onboarding Application GTC FC - MU - Corporate V1.0', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/01.+Corporate+Onboarding+Application+GTC+FC+-+MU+V1.0.pdf' },
        { name: 'Terms of Business', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/03.+GTC+FC-MU+Retail+TOB+V1.0+09-06-2025.pdf' },
        { name: 'Complaint Handling Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/04.+Complaint+Handling+Policy+V1.0+09-06-2025.pdf' },
        { name: 'Conflict of Interest Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/05.+Conflict+of+Interest+Policy+V1.0+09-06-2025.pdf' },
        { name: 'Risk Warning Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/06.+GTC+Financial+Consultancy+LLC+%E2%80%93+Risk+Warning+Notice+V1.0+09-06-2025.pdf' },
        { name: 'Cookie Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/07.+GTC+Financial+COnultancy+LLC+-+Cookie+Policy++V1.0+09-06-2025.pdf' },
        { name: 'Privacy Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/08.+Privacy+Policy+%E2%80%93+GTC+Financial+Consultancy+LLC+V1.0+09-06-2025.pdf' }
      ]
    },
    {
      title: 'GTC Financial Consultancy and GTC Global Trade Capital Co.Ltd (Vanuatu)',
      items: [
        { name: 'Client Onboarding Application GTC FC - VA – Retail V1.0', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/01.+Client+Onboarding+Application+GTC+FC+-+Retail+V1.0+.pdf#' },
        { name: 'Corporate Onboarding Application GTC FC - VA - Corporate V1.0', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/01.+Client+Onboarding+Application+GTC+FC+-+Vanuatu+-+Croporate+V1.0.pdf' },
        { name: 'Terms of Business', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/03.+GTC+FC+TOB+V1.0+V1.0+09-06-2025.pdf' },
        { name: 'Complaint Handling Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/04.+Complaint+Handling+Policy++V1.0+09-06-2025.pdf' },
        { name: 'Conflict of Interest Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/05.+Conflict+of+Interest+Policy+V1.0+09-06-2025.pdf' },
        { name: 'Risk Warning Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/06.+GTC+Financial+Consultancy+LLC+%E2%80%93+Risk+Warning+Notice+1.0V1.0+09-06-2025.pdf' },
        { name: 'Cookie Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/07.+GTC+Financial+COnultancy+LLC+-+Cookie+Policy+V1.0+09-06-2025.pdf' },
        { name: 'Privacy Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/08.+Privacy+Policy+%E2%80%93+GTC+Financial+Consultancy+LLC+V1.0+09-06-2025.pdf' }
      ]
    }
  ],
  'GTC Global LTD ( Mauritius)': [
    {
      title: 'Documents',
      items: [
        { name: 'Client Onboarding Application - MU – Retail', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Individual+Application+Form+-GTC+Global+Ltd..pdf' },
        { name: 'Corporate Onboarding Application - MU - Corporate', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Corporate+Account+Opening+-+GTC+Global+Ltd..pdf' },
        { name: 'Client Agreement', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Mauritius+TOB+-+Proposed+Clauses+to+add.pdf' },
        { name: 'Privacy Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/PRIVACY%2BPOLICY%2BGTCFX.pdf' },
        { name: 'Risk Warning', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Risk%2BWarning.pdf' },
        { name: 'Cookie Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Cookie%2BPolicy.pdf' },
        { name: 'Website Disclaimer', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Website%2BDisclaimer.pdf' }
      ]
    }
  ],
  'GTC Global Trade Capital Co.Ltd (Vanuatu)': [
    {
      title: 'Documents',
      items: [
        { name: 'Client Agreement', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu+-+TOB.pdf' },
        { name: 'Privacy Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu++PRIVACY%2BPOLICY%2BGTCFX.pdf' },
        { name: 'Risk Warning', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu+-+Risk%2BWarning.pdf' },
        { name: 'Cookie Policy', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu++-+Cookie%2BPolicy.pdf' },
        { name: 'Website Disclaimer', link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu++-+Website%2BDisclaimer.pdf' }
      ]
    }
  ]
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

  const categories = Object.keys(legalData);
  const [selectedTab, setSelectedTab] = useState(0);

  // Open accordion index per tab
  const [openIndexes, setOpenIndexes] = useState(
    categories.map(() => 0) // default open first index in each tab
  );

  const handleAccordionToggle = (tabIndex, index) => {
    setOpenIndexes((prev) =>
      prev.map((item, i) => (i === tabIndex ? (item === index ? item : index) : item))
    );
  };

  return (
    <>
      <Hero
        imageUrl="/banner/faq.webp"
        title="Legal Policies & Client Agreements "
        description="Access all legal documents, client onboarding forms, privacy policies, risk disclosures, and regulatory information for GTC Financial Consultancy, GTC Global LTD (Mauritius), and GTC Global Trade Capital Co. Ltd (Vanuatu).
"
      />
    <div className="w-full max-w-6xl px-4 py-12 mx-auto">
      <Tab.Group
        selectedIndex={selectedTab}
        onChange={(index) => {
          setSelectedTab(index);
        }}
      >
        <Tab.List className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 border-b pb-2 mb-5">

          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'py-2 px-4 rounded-t-md text-sm md:text-base font-medium whitespace-nowrap',
                  selected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className=" shadow-2xl p-2 border border-gray-100">
          {categories.map((category, tabIdx) => (
            <Tab.Panel key={category} className="space-y-4">
              {legalData[category].map((section, secIdx) => {
                const isOpen = openIndexes[tabIdx] === secIdx;

                return (
                  <div key={secIdx} className="border rounded-md">
                    <button
                      onClick={() => handleAccordionToggle(tabIdx, secIdx)}
                      className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-white text-left font-medium text-sm md:text-base"
                    >
                      <span>{section.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-4 py-3 bg-white">
                        <ul className="space-y-2">
                          {section.items.map((doc, idx) => (
                            <li key={idx}>
                              <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-700 hover:underline"
                              >
                                <FaFilePdf className="text-red-600 w-4 h-4" />
                                <span className="text-sm md:text-base">{doc.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </>
  );
}; 

export default RiskWarningPage;
