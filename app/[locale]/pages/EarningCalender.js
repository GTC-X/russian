'use client'
import React from 'react'
import CalendarPage from '../earnings-calendar/components/banner'
import MarginInfoPanel from "../earnings-calendar/components/marginInfoPanel";
import EarningsCalendarFAQ from "../earnings-calendar/components/faqs";

const EarningCalenderPage = () => {
  return (
   <div className="mt-6">
      <CalendarPage />
      <MarginInfoPanel />
      <EarningsCalendarFAQ />
    </div>
  )
}

export default EarningCalenderPage