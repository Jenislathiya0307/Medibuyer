import { useEffect, useRef, useState } from "react";

const ProfitLossReport = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  const [height1, setHeight1] = useState("0px");
  const [height2, setHeight2] = useState("0px");

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref1.current) return;
    setHeight1(open1 ? `${ref1.current.scrollHeight}px` : "0px");
  }, [open1]);

  useEffect(() => {
    if (!ref2.current) return;
    setHeight2(open2 ? `${ref2.current.scrollHeight}px` : "0px");
  }, [open2]);

  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeRefs = useRef<(SVGSVGElement | null)[]>([]);

  return (
    <>
      <section className="mb-6 text-center bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="text-sm font-semibold text-slate-700">Start Date</div>
          <input type="date" className="border rounded px-3 py-2 text-sm" defaultValue="2025-08-01" />
          <div className="text-sm font-semibold text-slate-700">End Date</div>
          <input type="date" className="border rounded px-3 py-2 text-sm" defaultValue="2025-08-20" />
          <button className="ml-auto sm:ml-0 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded text-sm">Search</button>
        </div>
      </section>

      <div className="mb-6 flex items-center justify-between text-center bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
        <div className="flex items-center gap-5 w-full">
          <div>
            <button className="flex gap-2 items-center text-center w-max text-sm">
              <svg className="h-[30px] w-[30px]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="bg-sky-600" d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM199 303L279 223C288.4 213.6 303.6 213.6 312.9 223C322.2 232.4 322.3 247.6 312.9 256.9L273.9 295.9L424 295.9C437.3 295.9 448 306.6 448 319.9C448 333.2 437.3 343.9 424 343.9L273.9 343.9L312.9 382.9C322.3 392.3 322.3 407.5 312.9 416.8C303.5 426.1 288.3 426.2 279 416.8L199 336.8C189.6 327.4 189.6 312.2 199 302.9z"/></svg>
              Previous Month
            </button>
          </div>
          <div className="flex items-center gap-3 justify-center text-xs bg-yellow-50 border border-yellow-200 p-3 rounded w-full text-center">
            SHOW ALL PROFIT AND LOSS MARGIN CALCULATIONS AFTER CLAWBACK PRICE :
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="relative w-9 h-5 bg-[#ccc] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <button className="flex gap-2 items-center text-center w-max text-sm">
              Next Month
              <svg className="h-[30px] w-[30px]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="bg-sky-600" d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM361 417C351.6 426.4 336.4 426.4 327.1 417C317.8 407.6 317.7 392.4 327.1 383.1L366.1 344.1L216 344.1C202.7 344.1 192 333.4 192 320.1C192 306.8 202.7 296.1 216 296.1L366.1 296.1L327.1 257.1C317.7 247.7 317.7 232.5 327.1 223.2C336.5 213.9 351.7 213.8 361 223.2L441 303.2C450.4 312.6 450.4 327.8 441 337.1L361 417.1z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <section className="bg-white border-gray-200 shadow-md px-4 py-5 rounded-[10px] mb-[8px]">
          <button onClick={() => setOpen1(!open1)} className="flex items-center gap-3 justify-between w-full">
            <div className="flex items-center gap-3">
              <span className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-sky-50 text-sky-600 text-lg font-semibold">1</span>
              <span className="text-lg font-semibold text-slate-800">Supplier Spend Summary</span>
            </div>

            <div className="ml-auto text-sm text-gray-500">Your Total Spend (ex. VAT) with each Supplier on various categories</div>
            <button className="ml-4 text-sm text-sky-600">
              <svg className="h-[30px] w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 128C128 92.7 156.7 64 192 64L405.5 64C422.5 64 438.8 70.7 450.8 82.7L493.3 125.2C505.3 137.2 512 153.5 512 170.5L512 208L128 208L128 128zM64 320C64 284.7 92.7 256 128 256L512 256C547.3 256 576 284.7 576 320L576 416C576 433.7 561.7 448 544 448L512 448L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 448L96 448C78.3 448 64 433.7 64 416L64 320zM192 480L192 512L448 512L448 416L192 416L192 480zM520 336C520 322.7 509.3 312 496 312C482.7 312 472 322.7 472 336C472 349.3 482.7 360 496 360C509.3 360 520 349.3 520 336z"/></svg>
            </button>
            <svg className={`w-4 h-4 text-gray-400 ${open1 ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div ref={ref1}
            style={{ maxHeight: height1 }}  
            className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          >
          <div className="flex items-center gap-3 justify-center text-sm bg-yellow-50 border border-yellow-200 py-4 px-3 rounded w-full text-center relative mb-3 mt-5">
            Your Total Spent (ex. VAT) with each Supplier on various categories. This is generated based on all orders sent via MediBuyer.
            <svg className="absolute top-[10px] right-[10px] h-[15px] w-[15px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
          </div>

          <div className="rounded overflow-hidden">
            <table className="min-w-[1000px] w-full table-auto border-collapse text-sm">
              <thead>
                <tr className="bg-sky-600 text-white text-[14px]">
                  <th className="border-r-1 border-gray-300"></th>
                  <th className="p-2 text-center border-r-1 border-gray-300">Supplier</th>
                  <th className="p-2 text-center border-r-1 border-gray-300">Generics</th>
                  <th className="p-2 text-center border-r-1 border-gray-300">Branded Generics</th>
                  <th className="p-2 text-center border-r-1 border-gray-300">Ethicals</th>
                  <th className="p-2 text-center border-r-1 border-gray-300">Surgicals</th>
                  <th className="p-2 text-center border-r-1 border-gray-300">P Lines</th>
                  <th className="p-2 text-center border-r-1 border-gray-300">OTC</th>
                  <th className="p-2 text-center border-r-1 border-gray-300">Others</th>
                  <th className="p-2 text-center">Total</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                
                <tr className="bg-white even:bg-sky-50">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">1</td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">A&H</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£461.02 <span className="text-xs text-gray-400 block">10.62%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£0.00 <span className="text-xs text-gray-400 block">0.00%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£1,981.72 <span className="text-xs text-gray-400 block">17.19%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£5.30 <span className="text-xs text-gray-400 block">2.67%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£40.43 <span className="text-xs text-gray-400 block">5.58%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£143.68 <span className="text-xs text-gray-400 block">10.56%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£37.09 <span className="text-xs text-gray-400 block">16.10%</span></td>
                  <td className="p-2 text-center font-semibold">£2,669.24</td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">2</td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">ALLIANCE</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£246.34 <span className="text-xs text-gray-400 block">5.78%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£6.58 <span className="text-xs text-gray-400 block">2.23%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£650.30 <span className="text-xs text-gray-400 block">5.43%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£3.61 <span className="text-xs text-gray-400 block">1.82%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£176.69 <span className="text-xs text-gray-400 block">24.39%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£377.44 <span className="text-xs text-gray-400 block">27.75%</span></td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£10.72 <span className="text-xs text-gray-400 block">10.72%</span></td>
                  <td className="p-2 text-center font-semibold">£1,472.08</td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">3</td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">PHOENIX</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£1,409.46</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£113.65</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£4,852.80</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£152.02</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£132.50</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£376.46</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£150.05</td>
                  <td className="p-2 text-center font-semibold">£7,186.94</td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">4</td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">PHOENIX</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£1,409.46</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£113.65</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£4,852.80</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£152.02</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£132.50</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£376.46</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£150.05</td>
                  <td className="p-2 text-center font-semibold">£7,186.94</td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">5</td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">PHOENIX</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£1,409.46</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£113.65</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£4,852.80</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£152.02</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£132.50</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£376.46</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">£150.05</td>
                  <td className="p-2 text-center font-semibold">£7,186.94</td>
                </tr>

                <tr className="bg-sky-600 text-white">
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300"></td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">TOTAL</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">£8,241.98</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">£313.42</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">£11,516.26</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">£198.33</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">£774.09</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">£1,360.07</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">£729.95</td>
                  <td className="p-2 text-center font-semibold">£23,134.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white border-gray-200 shadow-md px-4 py-5 rounded-[10px] mb-[8px]">
        <button onClick={() => setOpen2(!open2)} className="flex items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-3">
            <span className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-sky-50 text-sky-600 text-lg font-semibold">2</span>
            <span className="text-lg font-semibold text-slate-800">Profit Margin Summary</span>
          </div>

          <div className="ml-auto text-sm text-gray-500">Profit Margin against Drug Tariff (including relevant Price Concessions).</div>
          <button className="ml-4 text-sm text-sky-600">
            <svg className="h-[30px] w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 128C128 92.7 156.7 64 192 64L405.5 64C422.5 64 438.8 70.7 450.8 82.7L493.3 125.2C505.3 137.2 512 153.5 512 170.5L512 208L128 208L128 128zM64 320C64 284.7 92.7 256 128 256L512 256C547.3 256 576 284.7 576 320L576 416C576 433.7 561.7 448 544 448L512 448L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 448L96 448C78.3 448 64 433.7 64 416L64 320zM192 480L192 512L448 512L448 416L192 416L192 480zM520 336C520 322.7 509.3 312 496 312C482.7 312 472 322.7 472 336C472 349.3 482.7 360 496 360C509.3 360 520 349.3 520 336z"/></svg>
          </button>
          <svg className={`w-4 h-4 text-gray-400 ${open2 ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div ref={ref2}
          style={{ maxHeight: height2 }}
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        >
          <div className="flex items-center gap-3 justify-center text-sm bg-yellow-50 border border-yellow-200 py-4 px-3 rounded w-full text-center relative mb-3 mt-5 ">
            Profit Margin against Drug Tariff (including relevant Price Concessions). Please note this data does not take into account any Fees such as Dispensing Fees or NHSBSA Claw Back.
            <svg className="absolute top-[10px] right-[10px] h-[15px] w-[15px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
          </div>

          <div className="">
            <div className="rounded overflow-hidden">
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="bg-sky-600 text-white text-[14px]">
                    <th className="p-2 text-center border-r-1 border-gray-300"></th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Month - Year</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Category</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Total Drug Cost</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Total Drug Tariff Reimbursement</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Total Profit</th>
                    <th className="p-2 text-center">Profit Margin (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white even:bg-sky-50 text-[12px]">
                    <td className="p-2 text-center border-r-1 border-gray-300">1</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">AUGUST - 2025</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">GENERIC</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£4,319.02</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£8,345.78</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£4,026.76</td>
                    <td className="p-2 text-center font-semibold">48.25%</td>
                  </tr>

                  <tr className="bg-white even:bg-sky-50 text-[12px]">
                    <td className="p-2 text-center border-r-1 border-gray-300">2</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">AUGUST - 2025</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">BRANDED GENERICS</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£304.92</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£324.25</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£19.33</td>
                    <td className="p-2 text-center">6.33%</td>
                  </tr>

                  <tr className="bg-white even:bg-sky-50 text-[12px]">
                    <td className="p-2 text-center border-r-1 border-gray-300">3</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">AUGUST - 2025</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">SURGICALS</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£198.33</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£217.18</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">£18.85</td>
                    <td className="p-2 text-center">9.50%</td>
                  </tr>

                  <tr className="bg-sky-600 text-[12px] text-white">
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 font-semibold">TOTAL</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 font-semibold">£18,127.63</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 font-semibold">£23,270.25</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 font-semibold">£5,242.62</td>
                    <td className="p-2 text-center font-semibold">22.43%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-2 mb-8">
        {[
          "Supplier Savings Report",
          "CD and Fridge Line Spend Summary",
          "Manufacturer Spend Summary",
          "Expensive Generic Lines - Over £20",
          "Top 200 Generic Usage Report",
          "Top 100 Ethical and Surgical Usage Report",
          "Top 100 Most Profitable Lines - Generics",
          "Top 100 Most Profitable Lines - Ethical and Branded Generics",
          "Top 100 Most Profitable Lines - Surgical",
          "Top 100 Least Profitable Lines - Generics",
          "Top 100 Least Profitable Lines - Ethical and Branded Generics",
          "Loss Report: Manual Order of Expensive Item",
          "Pack Optimisation Savings Report",
          "Pack Optimisation Loss Report",
          "Pack Size Optimisation Compliance Report",
          "Brand to Generic Savings Report",
          "Brand to Generic Loss Report",
          "Brand to Generic Compliance Report",
          "Loss Report By Product Rule",
          "Loss Report by Switching OFF a Supplier",
        ].map((label, i) => (
          <div key={i} className="bg-white border-gray-200 shadow-md px-4 py-5 rounded-[10px] mb-[8px]">
            
            {/* Trigger Button */}
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => {
                const panel = panelRefs.current[i];
                const box = activeRefs.current[i];

                if (!panel || !box) return;

                if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
                  panel.style.maxHeight = "0px";
                  box.classList.remove("rotate-180");
                } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                  box.classList.add("rotate-180");
                }
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-sky-50 text-sky-600 text-lg font-semibold">
                  {i + 3}
                </span>
                <span className="text-lg font-semibold text-slate-800">{label}</span>
              </div>

              <svg ref={(el) => (activeRefs.current[i] = el)} className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Accordion Panel */}
            <div
              ref={(el) => (panelRefs.current[i] = el)}
              className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="py-3 text-sm text-gray-600">
                Click the print/export icon to download this report. This area would show a short description and quick actions for the report.
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProfitLossReport;
