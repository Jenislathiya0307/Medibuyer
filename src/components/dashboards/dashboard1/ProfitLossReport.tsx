const ProfitLossReport = () => {
  
  return (
    <>
      {/* Date filter area */}
      <section className="bg-white rounded shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="text-sm font-semibold text-slate-700">Start Date</div>
          <input type="date" className="border rounded px-3 py-2 text-sm" defaultValue="2025-08-01" />
          <div className="text-sm font-semibold text-slate-700">End Date</div>
          <input type="date" className="border rounded px-3 py-2 text-sm" defaultValue="2025-08-20" />
          <button className="ml-auto sm:ml-0 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded text-sm">Search</button>
        </div>
      </section>

      {/* Info / notice */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-xs border rounded-full px-3 py-1 bg-white shadow">Previous Month</button>
          <div className="text-xs bg-yellow-50 border border-yellow-200 px-3 py-1 rounded">SHOW ALL PROFIT AND LOSS MARGIN CALCULATIONS AFTER CLAWBACK PRICE</div>
        </div>
        <div className="text-xs">Next Month &rarr;</div>
      </div>

      {/* 1. Supplier Spend Summary */}
      <section className="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
          <h2 className="text-lg font-semibold text-slate-800">1. Supplier Spend Summary</h2>
          <div className="ml-auto text-sm text-gray-500">Your Total Spend (ex. VAT) with each Supplier on various categories</div>
          <button className="ml-4 text-sm text-sky-600">📄</button>
        </div>

        {/* table wrapper - horizontal scroll on small screens */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-[1000px] w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-sky-600 text-white text-xs">
                <th className="p-2 text-left">Supplier</th>
                <th className="p-2 text-right">Generics</th>
                <th className="p-2 text-right">Branded Generics</th>
                <th className="p-2 text-right">Ethicals</th>
                <th className="p-2 text-right">Surgicals</th>
                <th className="p-2 text-right">P Lines</th>
                <th className="p-2 text-right">OTC</th>
                <th className="p-2 text-right">Others</th>
                <th className="p-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* sample rows */}
              <tr className="bg-white even:bg-gray-50">
                <td className="p-2 font-medium">A&H</td>
                <td className="p-2 text-right">£461.02 <span className="text-xs text-gray-400 block">10.62%</span></td>
                <td className="p-2 text-right">£0.00 <span className="text-xs text-gray-400 block">0.00%</span></td>
                <td className="p-2 text-right">£1,981.72 <span className="text-xs text-gray-400 block">17.19%</span></td>
                <td className="p-2 text-right">£5.30 <span className="text-xs text-gray-400 block">2.67%</span></td>
                <td className="p-2 text-right">£40.43 <span className="text-xs text-gray-400 block">5.58%</span></td>
                <td className="p-2 text-right">£143.68 <span className="text-xs text-gray-400 block">10.56%</span></td>
                <td className="p-2 text-right">£37.09 <span className="text-xs text-gray-400 block">16.10%</span></td>
                <td className="p-2 text-right font-semibold">£2,669.24</td>
              </tr>

              <tr className="bg-white even:bg-gray-50">
                <td className="p-2 font-medium">ALLIANCE</td>
                <td className="p-2 text-right">£246.34 <span className="text-xs text-gray-400 block">5.78%</span></td>
                <td className="p-2 text-right">£6.58 <span className="text-xs text-gray-400 block">2.23%</span></td>
                <td className="p-2 text-right">£650.30 <span className="text-xs text-gray-400 block">5.43%</span></td>
                <td className="p-2 text-right">£3.61 <span className="text-xs text-gray-400 block">1.82%</span></td>
                <td className="p-2 text-right">£176.69 <span className="text-xs text-gray-400 block">24.39%</span></td>
                <td className="p-2 text-right">£377.44 <span className="text-xs text-gray-400 block">27.75%</span></td>
                <td className="p-2 text-right">£10.72 <span className="text-xs text-gray-400 block">10.72%</span></td>
                <td className="p-2 text-right font-semibold">£1,472.08</td>
              </tr>

              {/* repeat similar rows to approximate the design */}
              <tr className="bg-white even:bg-gray-50">
                <td className="p-2 font-medium">PHOENIX</td>
                <td className="p-2 text-right">£1,409.46</td>
                <td className="p-2 text-right">£113.65</td>
                <td className="p-2 text-right">£4,852.80</td>
                <td className="p-2 text-right">£152.02</td>
                <td className="p-2 text-right">£132.50</td>
                <td className="p-2 text-right">£376.46</td>
                <td className="p-2 text-right">£150.05</td>
                <td className="p-2 text-right font-semibold">£7,186.94</td>
              </tr>

              {/* totals row */}
              <tr className="bg-sky-50">
                <td className="p-2 font-semibold">TOTAL</td>
                <td className="p-2 text-right font-semibold">£8,241.98</td>
                <td className="p-2 text-right font-semibold">£313.42</td>
                <td className="p-2 text-right font-semibold">£11,516.26</td>
                <td className="p-2 text-right font-semibold">£198.33</td>
                <td className="p-2 text-right font-semibold">£774.09</td>
                <td className="p-2 text-right font-semibold">£1,360.07</td>
                <td className="p-2 text-right font-semibold">£729.95</td>
                <td className="p-2 text-right font-semibold">£23,134.10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Profit Margin Summary */}
      <section className="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
          <h2 className="text-lg font-semibold text-slate-800">2. Profit Margin Summary</h2>
          <div className="ml-4 text-sm text-gray-500">Profit Margin against Drug Tariff (including relevant Price Concessions).</div>
          <button className="ml-auto text-sm text-sky-600">📄</button>
        </div>

        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full table-auto text-sm">
              <thead>
                <tr className="bg-sky-600 text-white text-xs">
                  <th className="p-2 text-left">#</th>
                  <th className="p-2 text-left">Month - Year</th>
                  <th className="p-2 text-left">Category</th>
                  <th className="p-2 text-right">Total Drug Cost</th>
                  <th className="p-2 text-right">Total Drug Tariff Reimbursement</th>
                  <th className="p-2 text-right">Total Profit</th>
                  <th className="p-2 text-right">Profit Margin (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white even:bg-gray-50">
                  <td className="p-2">1</td>
                  <td className="p-2">AUGUST - 2025</td>
                  <td className="p-2">GENERIC</td>
                  <td className="p-2 text-right">£4,319.02</td>
                  <td className="p-2 text-right">£8,345.78</td>
                  <td className="p-2 text-right">£4,026.76</td>
                  <td className="p-2 text-right font-semibold">48.25%</td>
                </tr>

                <tr className="bg-white even:bg-gray-50">
                  <td className="p-2">2</td>
                  <td className="p-2">AUGUST - 2025</td>
                  <td className="p-2">BRANDED GENERICS</td>
                  <td className="p-2 text-right">£304.92</td>
                  <td className="p-2 text-right">£324.25</td>
                  <td className="p-2 text-right">£19.33</td>
                  <td className="p-2 text-right">6.33%</td>
                </tr>

                <tr className="bg-white even:bg-gray-50">
                  <td className="p-2">3</td>
                  <td className="p-2">AUGUST - 2025</td>
                  <td className="p-2">SURGICALS</td>
                  <td className="p-2 text-right">£198.33</td>
                  <td className="p-2 text-right">£217.18</td>
                  <td className="p-2 text-right">£18.85</td>
                  <td className="p-2 text-right">9.50%</td>
                </tr>

                <tr className="bg-sky-50">
                  <td className="p-2"></td>
                  <td className="p-2 font-semibold">TOTAL</td>
                  <td className="p-2"></td>
                  <td className="p-2 text-right font-semibold">£18,127.63</td>
                  <td className="p-2 text-right font-semibold">£23,270.25</td>
                  <td className="p-2 text-right font-semibold">£5,242.62</td>
                  <td className="p-2 text-right font-semibold">22.43%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Collapsible accordion list of reports (3..22) */}
      <section className="space-y-2 mb-8">
        {[
          "3. Supplier Savings Report",
          "4. CD and Fridge Line Spend Summary",
          "5. Manufacturer Spend Summary",
          "6. Expensive Generic Lines - Over £20",
          "7. Top 200 Generic Usage Report",
          "8. Top 100 Ethical and Surgical Usage Report",
          "9. Top 100 Most Profitable Lines - Generics",
          "10. Top 100 Most Profitable Lines - Ethical and Branded Generics",
          "11. Top 100 Most Profitable Lines - Surgical",
          "12. Top 100 Least Profitable Lines - Generics",
          "13. Top 100 Least Profitable Lines - Ethical and Branded Generics",
          "14. Loss Report: Manual Order of Expensive Item",
          "15. Pack Optimisation Savings Report",
          "16. Pack Optimisation Loss Report",
          "17. Pack Size Optimisation Compliance Report",
          "18. Brand to Generic Savings Report",
          "19. Brand to Generic Loss Report",
          "20. Brand to Generic Compliance Report",
          "21. Loss Report By Product Rule",
          "22. Loss Report by Switching OFF a Supplier",
        ].map((label, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded overflow-hidden">
            <button
              className="w-full px-4 py-3 flex items-center justify-between text-left"
              onClick={(e) => {
                // simple accordion behaviour - toggles next sibling
                const panel = e.currentTarget.nextElementSibling;
                if (!panel) return;
                panel.classList.toggle("hidden");
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-sky-50 text-sky-600 text-xs font-semibold">{i + 3}</span>
                <span className="font-medium text-slate-800">{label}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs px-2 py-1 border rounded">📄</button>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div className="px-4 py-3 hidden">
              <div className="text-sm text-gray-600">Click the print/export icon to download this report. This area would show a short description and quick actions for the report.</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProfitLossReport;
