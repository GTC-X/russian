import { useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';



const AccordionItem = ({ item, index, isOpen, toggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="py-5">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => toggle(index)}
      >
        <span className="text-base md:text-[18px] font-medium text-[#000032] leading-[24px]">
          {item.question}
        </span>
        <span className="text-[#4D4D70] text-2xl">
          {isOpen ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mt-2 text-base text-[#4D4D70]">{item.answer}</div>
      </div>
    </div>
  );
};

const EarningsFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations('earningPage');

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: t("faqs.question1"),
      answer: t("faqs.answer1"),
    },
    {
      question: t("faqs.question2"),
      answer: t("faqs.answer2"),
    },
    {
      question: t("faqs.question3"),
      answer: t("faqs.answer3"),
    },
    {
      question: t("faqs.question4"),
      answer: t("faqs.answer4"),
    },
    {
      question: t("faqs.question5"),
      answer: t("faqs.answer5"),
    },
    {
      question: t("faqs.question6"),
      answer: t("faqs.answer6"),
    },
    {
      question: t("faqs.question7"),
      answer: t("faqs.answer7"),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto pt-10 md:pt-20 px-4 text-[#20205B]">
      <h2 className="md:text-3xl xl:text-[40px] text-xl font-bold leading-tight mb-5 text-[#000032]">
        {t("faqs.heading")}
      </h2>
      <div className="divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            toggle={toggleAccordion}
          />
        ))}
      </div>
    </section>
  );
};

export default EarningsFaq;
