'use client';
import { Tab } from '@headlessui/react';
import React from 'react';

const SwapTab = ({ data }) => {
  const tabs = Object.keys(data);

  // Format helper: show + for positives, keep negatives, always 2 decimals
  const formatValue = (col, value) => {
    const needsSign = col === 'swap long' || col === 'swap short';
    if (!needsSign) return value;

    const num = typeof value === 'number' ? value : Number(value);
    if (Number.isNaN(num)) return value;

    return num > 0 ? `+${num.toFixed(2)}` : num.toFixed(2);
  };

  return (
    <div className="tabs-container md:pt-8">
      <Tab.Group>
        {/* Tabs Navigation */}
        <Tab.List className="tabs-header flex overflow-x-auto gap-2 md:gap-4 border-b pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `px-3 md:px-6 py-2 text-sm md:text-base font-medium rounded-t-lg transition-all whitespace-nowrap ${
                  selected
                    ? 'bg-gradient-to-r from-primary to-[#263B93] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        {/* Tab Panels */}
        <Tab.Panels className="tab-content mt-4 border border-gray-300 shadow-lg p-4 rounded-lg">
          {tabs.map((tab) => {
            const rows = Array.isArray(data[tab]) ? data[tab] : [];
            const hasRows = rows.length > 0;
            const columns = hasRows ? Object.keys(rows[0]) : [];

            return (
              <Tab.Panel key={tab} className="focus:outline-none">
                {hasRows ? (
                  <div className="max-h-[600px] overflow-y-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary to-[#263B93] text-white capitalize text-xs md:text-base">
                          {columns.map((column) => (
                            <th
                              key={column}
                              className="border border-gray-300 px-4 py-2 ltr:text-left rtl:text-right text-sm font-medium"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={
                              rowIndex % 2 === 0
                                ? 'bg-white'
                                : 'bg-gray-100 hover:bg-gray-50'
                            }
                          >
                            {columns.map((col) => (
                              <td
                                key={col}
                                className="border border-gray-300 px-4 py-3 text-sm md:text-base"
                              >
                                {formatValue(col, row[col])}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    No data available for {tab}.
                  </div>
                )}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SwapTab;
