import { X } from "lucide-react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoPrintSharp } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";

const BulkOrderingPanel = () => {

  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
        <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
            <p className="leading-snug pr-3">Your Bulk Ordering panel is the perfect place to organise your favourite or most frequently ordered lines, making it much easier to re-order them altogether whenever you need. (Read More...)</p>
            <button
                className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
                aria-label="Close"
            >
                <X size={16} />
            </button>
        </div>

        <div className="flex items-center justify-between gap-2 border rounded-md border-ld overflow-hidden p-2 w-full">
          <div className="flex items-center gap-2">
            <button className="group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary rounded-md">
              <span className="relative z-10 group-hover:text-primary uppercase">Page 1 (0)</span>
              <span className="absolute inset-0 overflow-hidden">
              <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
            <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" /> 
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border rounded-md border-ld overflow-hidden p-2 w-full mt-5">
            <div className="flex items-center gap-2">
              <p className="text-black">BLOCK Bulk Order Lines if ordered from the PMR system:</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox"/>
                <div className="w-16 h-[24px] bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>
                <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full transition-all peer-checked:translate-x-10"></div>
                <span className="absolute left-4 text-xs text-white font-semibold opacity-0 peer-checked:opacity-100">ON</span>
                <span className="absolute right-4 text-xs text-gray-600 font-semibold peer-checked:opacity-0 opacity-100">OFF</span>
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex gap-2 overflow-hidden">
                <input
                    type="text"
                    placeholder="Search Keyword..."
                    className="border border-gray-300 rounded px-3 py-[5px] text-sm w-52 focus:outline-none h-[42px]"
                />
                <button className="bg-primary hover:bg-primaryemphasis text-white px-2 py-[4px] rounded-md text-sm font-medium shadow-sm transition uppercase">
                    Search
                </button>
              </div>
              <div className="flex gap-2">
                  <AiOutlineCloudUpload className="h-[44px] w-[44px] rounded-sm bg-sky-600 text-white p-[10px] cursor-pointer"/>
                  <FaRegCircleQuestion className="h-[44px] w-[44px] rounded-sm bg-sky-600 text-white p-[10px] cursor-pointer"/>
                  <IoPrintSharp className="h-[44px] w-[44px] rounded-sm bg-sky-600 text-white p-[10px] cursor-pointer"/>
              </div>
            </div>
        </div>
        

        <div className="border rounded-md border-ld overflow-hidden mt-5 h-[400px] overflow-y-auto">
          <table className="w-full table-auto border-collapse text-sm">
              <thead className="sticky top-0 z-10">
                  <tr className="bg-sky-600 text-white text-[14px]">
                      <th className="p-2 text-center border-r-1 border-gray-300">
                        <input type="checkbox" name="" id="" />
                      </th>
                      <th className="p-2 text-center whitespace-nowrap border-r-1 border-gray-300">
                        <FaRegCircleQuestion className="mx-auto" />
                      </th>
                      <th className="p-2 text-center border-r-1 border-gray-300 text-center">Pip</th>
                      <th className="p-2 text-center border-r-1 border-gray-300">Product Description</th>
                      <th className="p-2 text-center border-r-1 border-gray-300">Pack</th>
                      <th className="p-2 text-center border-r-1 border-gray-300">Qty</th>
                      <th className="p-2 text-center">Notes</th>
                  </tr>
              </thead>
              <tbody>

                  <tr className="bg-white even:bg-sky-50 text-[12px]">
                      <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                          <BiSearchAlt className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                      </td>
                      <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                      <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                      <td className="p-2 text-center border-r-1 border-gray-300">
                        <input className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" placeholder="E.g. &quot;Aten 25 tab /28&quot; for Atenolol 25mg tab 28 pack&quot;" type="text"></input>
                      </td>
                      <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                      <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                        <input type="number" className="p-2 border-1 border-gray-300 rounded-md focus-visible:outline-0 w-[80px]" name="" id="" />
                      </td>
                      <td className="p-2 text-center uppercase text-red-500 font-bold">
                        <input type="text" className="p-2 border-1 border-gray-300 rounded-md focus-visible:outline-0" name="" id="" />
                      </td>
                  </tr>

              </tbody>
          </table>
        </div>

        <div className="border rounded-md border-ld overflow-hidden p-2 mt-5">
            <div className="grid grid-cols-12 gap-2">
                <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-[#e7ecf0] px-8 py-2 text-[#707a82] border-1 border-[#ccc] rounded-md">
                  <span className="relative z-10 group-hover:text-[#707a82] uppercase">Clear QTY</span>
                  <span className="absolute inset-0 overflow-hidden">
                  <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#f1f1f1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>

                <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-8 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                    <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
                    <span className="absolute inset-0 overflow-hidden">
                    <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                </button>

                <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-success px-8 py-2 text-neutral-50 border-1 border-success rounded-md">
                    <span className="relative z-10 group-hover:text-success uppercase">Add To Order</span>
                    <span className="absolute inset-0 overflow-hidden">
                    <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                </button>

                <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary rounded-md">
                    <span className="relative z-10 group-hover:text-primary uppercase">Move Line</span>
                    <span className="absolute inset-0 overflow-hidden">
                    <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                </button>
            </div>
        </div>

    </div>
  );
};

export default BulkOrderingPanel;
