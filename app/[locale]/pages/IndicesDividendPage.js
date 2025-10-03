'use client';
import React from 'react';
import Hero from '../components/common/Hero';

const exDividendData = {
  title: 'Ex-Dividends (14/07/2025)',
  timezone: 'GMT+3',
  headers: ['Indices', 'Symbols', 'Adjustment Points'],
  rows: [
    { indices: 'Australia 200 CFD', symbol: 'AUS200c', points: '/' },
    { indices: 'FTSE CHINA 50 CFD', symbol: 'CN50c', points: '11.08' },
    { indices: 'Hong Kong 50 CFD', symbol: 'HK50c', points: '/' },
    { indices: 'EU Stocks 50 CFD', symbol: 'EU50c', points: '/' },
    { indices: 'France 40 CFD', symbol: 'FRA40c', points: '/' },
    { indices: 'Germany 40 CFD', symbol: 'GER40c', points: '/' },
    { indices: 'Japan 225 CFD', symbol: 'JPN225c', points: '/' },
    { indices: 'Spain 35 Index CFD', symbol: 'SPA35c', points: '0.562' },
    { indices: 'UK 100 CFD', symbol: 'UK100c', points: '/' },
    { indices: 'US 30 Index CFD', symbol: 'US30c', points: '/' },
    { indices: 'US SP 500 CFD', symbol: 'US500c', points: '0.01' },
    { indices: 'US Tech 100 CFD', symbol: 'USTECHc', points: '/' }
  ]
};

const IndicesDividendPage = () => {
  const { title, timezone, headers, rows } = exDividendData;

  return (
    <>
 <Hero
        imageUrl="/blogs.webp"
        title="Latest Forex Market News & Strategies"
        description="GTCFX Blog offers in-depth forex trading guides, market insights, and expert advice to help you succeed in the financial markets. Start learning today!"
      />
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className='text-center max-w-3xl mx-auto mb-10'>
          <h2 className='HeadingH2'>Trade Indices Dividends with GTCFX Broker and Maximize Your Market Gains</h2>
          <p>Discover how trading indices dividends can boost your portfolio with GTCFX. Access top global indices, benefit from dividend payouts, and trade with a trusted broker. Start earning smarter today!</p>
      </div>
     
      <div className="overflow-x-auto rounded-md border border-white/20 bg-black/10 p-4">
        <table className="w-full text-sm border border-white/20 text-primary">
          <thead className="bg-gradient-to-r from-[#293794] to-[#000021]  text-white">
            <tr>
              <th colSpan={3} className="text-center py-3 font-bold text-lg tracking-wide ">
                 Ex-Dividend 14/07/2025 <span className="text-sm">({timezone})</span> :
              </th>
            </tr>
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 text-left border border-white/20 font-medium uppercase text-xs tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition`}
              >
                <td className="px-4 py-3 border border-gray-300">{row.indices}</td>
                <td className="px-4 py-3 border border-gray-300 font-mono">{row.symbol}</td>
                <td className="px-4 py-3 border border-gray-300 text-right">
                  {row.points !== '/' ? (
                    <span className="text-green-600 font-medium">{row.points}</span>
                  ) : (
                    <span className="text-gray-400">{row.points}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};


export default IndicesDividendPage