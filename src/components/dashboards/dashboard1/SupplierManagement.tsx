import { X } from "lucide-react";

const SupplierManagement = () => {

  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
        <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
            <p className="leading-snug pr-3">The Supplier Management page on Drug Comparison allows you to easily turn on or off a supplier from appearing in your cascade. (Read More..)</p>
            <button
                className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
                aria-label="Close"
            >
                <X size={16} />
            </button>
        </div>      
        <div className="rounded overflow-hidden">
            <table className="min-w-[1000px] w-full table-auto border-collapse text-sm">
              <thead>
                <tr className="bg-sky-600 text-white text-[14px]">
                  <th className="p-2 border-r-1 border-gray-300 uppercase">S.No.</th>
                  <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Supplier Name</th>
                  <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Supplier A/C.</th>
                  <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Minimum Daily Spend($)</th>
                  <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Power Status</th>
                  <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Next Schedule</th>
                  <th className="p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                
                <tr className="bg-white even:bg-sky-50">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">1</td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">AAH</td>
                  <td className="p-2 text-center border-r-1 border-gray-300 uppercase">706S11014289U</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">
                    <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                  </td>
                  <td className="p-2 text-center border-r-1 border-gray-300">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-16 h-[24px] bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition-colors duration-300"></div>

                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full transition-all duration-300 peer-checked:translate-x-10"></div>

                        <span className="absolute left-4 text-xs font-semibold text-white peer-checked:opacity-100 opacity-0 transition-opacity duration-300 text-white">ON</span>
                        <span className="absolute right-4 text-xs font-semibold text-gray-600 peer-checked:opacity-0 opacity-100 transition-opacity duration-300 text-white">OFF</span>
                    </label>
                  </td>
                  <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center font-semibold">
                    <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                  </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">2</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">ALLIANCE</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">999R00072059P</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-16 h-[24px] bg-green-500 peer-focus:outline-none rounded-full transition-colors duration-300"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full transition-all duration-300 translate-x-10"></div>
                        <span className="absolute left-4 text-xs font-semibold text-white">ON</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                    </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">3</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">BESTWAY</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                        LEI011T###9A3B7AEFEB12570CCBA323708B37576D
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-16 h-[24px] bg-green-500 rounded-full"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full translate-x-10"></div>
                        <span className="absolute left-4 text-xs font-semibold text-white">ON</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                    </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">4</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">BNS</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">B7362</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">200.00</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-16 h-[24px] bg-gray-300 rounded-full"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full"></div>
                        <span className="absolute right-4 text-xs font-semibold text-gray-600">OFF</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold flex gap-2 justify-center">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                        <span className="p-[5px_10px] border-1 border-gray-400 rounded-md">LOG</span>
                    </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">5</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">CLARITY</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">Y17861</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-16 h-[24px] bg-gray-300 rounded-full"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full"></div>
                        <span className="absolute right-4 text-xs font-semibold text-gray-600">OFF</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold flex gap-2 justify-center">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                        <span className="p-[5px_10px] border-1 border-gray-400 rounded-md">LOG</span>
                    </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">6</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">OTC</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">OTC0000805028</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-16 h-[24px] bg-green-500 rounded-full"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full translate-x-10"></div>
                        <span className="absolute left-4 text-xs font-semibold text-white">ON</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                    </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">7</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">PHOENIX</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">8766</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-16 h-[24px] bg-green-500 rounded-full"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full translate-x-10"></div>
                        <span className="absolute left-4 text-xs font-semibold text-white">ON</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                    </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">8</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">SIGMA</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">DCD2473087LEI</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-16 h-[24px] bg-green-500 rounded-full"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full translate-x-10"></div>
                        <span className="absolute left-4 text-xs font-semibold text-white">ON</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                    </td>
                </tr>

                <tr className="bg-white even:bg-sky-50">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">9</td>
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">TRIDENT</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">606R00146655Q</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <span className="p-[5px_10px] border-1 border-gray-300 rounded-md">Daily Spend Amount</span>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-16 h-[24px] bg-green-500 rounded-full"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full translate-x-10"></div>
                        <span className="absolute left-4 text-xs font-semibold text-white">ON</span>
                        </label>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center font-semibold">
                        <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                    </td>
                </tr>

              </tbody>
            </table>
        </div>  
    </div>
  );
};

export default SupplierManagement;
