import ProfileBanner from "../profile/ProfileBanner";
import { X } from "lucide-react";

const OrderPanelSettings = () => {

  return (
    <>
        <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
                <ProfileBanner />
            </div>
        </div>

        <div className="mx-6 mt-6">
            <div className="bg-white border border-gray-200 shadow-md p-6 rounded-[16px]">
                <h2 className="text-[20px] text-center font-semibold text-gray-700 tracking-wide border-b pb-4 mb-0 mb-0 uppercase mb-5">Supplier Spend Settings</h2>
                <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
                    <p className="leading-snug pr-3">Minimum Daily Spend ($) is the amount you wish to spend with a specific supplier. It will be displayed under the supplier's name on the order panel, along with today's spend. This allows you tox track your spending for the day against your daily minimum spend. You are still required to track your spend and ensure compliance with supplier requirements. The information provided is solely for viewing purposes and does NOT include alerts if you fail to meet your minimum spend threshold.</p>
                    <button
                        className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
                        aria-label="Close"
                    >
                        <X size={16} />
                    </button>
                </div>
                <div className="border rounded-md border-ld overflow-hidden mt-5 h-[400px] overflow-y-auto">
                    <table className="w-full table-auto border-collapse text-sm">
                        <thead className="sticky top-0 z-10">
                            <tr className="bg-sky-600 text-white text-[14px]">
                                <th className="p-2 text-center border-r-1 border-gray-300 w-[50%]">Supplier Name</th>
                                <th className="p-2 text-center w-[50%]">Minimum Daily Spend ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">AAH</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">AAH</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">ALLIANCE</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">BESTWAY</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">BNS</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">200</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">CLARITY</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">OTC</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">PHOENIX</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">SIGMA</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>

                            <tr className="bg-white even:bg-sky-50 text-[12px]">
                                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">TRIDENT</td>
                                <td className="p-2 text-center uppercase font-bold flex">
                                    <span className="p-[5px_10px] border border-gray-300 rounded-md mx-auto">Please Enter Daily Spend Amount</span>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  );
};

export default OrderPanelSettings;
