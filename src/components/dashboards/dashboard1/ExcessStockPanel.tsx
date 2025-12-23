import { useState } from "react";
import { X } from "lucide-react";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Dropdown, DropdownItem } from "flowbite-react";
import { IoPrintSharp } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";

const ExcessStockPanel = () => {

  const [selected, setSelected] = useState("- All -");

  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
      <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
          <p className="leading-snug pr-3">The Excess Stock panel keeps a log of all your pharmacy's excess stock all in one place, meaning that making the use of your excess stock is easier than ever. (Read More...)</p>
          <button
              className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
              aria-label="Close"
          >
              <X size={16} />
          </button>
      </div>

      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex gap-2 justify-between border rounded-md border-ld overflow-hidden p-2 w-full">
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
                    <th className="p-2 text-center border-r-1 border-gray-300">Pip</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Product Description</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Pack</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Qty</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Batch No.</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Expiry</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Added On</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Notes</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">DT Price</th>
                    <th className="p-2 text-center">DT Subtotal</th>
                </tr>
            </thead>
            <tbody>
                
                <tr className="bg-white even:bg-sky-50 text-[12px]">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                      <BiSearchAlt className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                    </td>
                    <td className="p-2 border-r-1 border-gray-300 uppercase">
                        -
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                      <input className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" placeholder="E.g. &quot;Aten 25 tab /28&quot; for Atenolol 25mg tab 28 pack&quot;" type="text"></input>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                      <input type="number" name="" id="" className="p-2 border-1 border-gray-300 rounded-md focus-visible:outline-0 w-[80px]" />
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                      <Dropdown label={selected} className="bg-primary rounded-md mx-auto">
                          <DropdownItem onClick={() => setSelected("Sort by Time")} className="py-1 px-2">Sort by Time</DropdownItem>
                          <DropdownItem onClick={() => setSelected("Sort by Unread")} className="py-1 px-2">Sort by Unread</DropdownItem>
                          <DropdownItem onClick={() => setSelected("Sort by Favourites")} className="py-1 px-2">Sort by Favourites</DropdownItem>
                      </Dropdown>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                      <input type="text" className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" />
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center uppercase text-red-500 font-bold">-</td>
                </tr>

            </tbody>
        </table>
      </div>

      <div className="border rounded-md border-ld overflow-hidden p-3 mt-5 bg-primary">
          <div className="flex justify-between items-center">
            <h4 className="flex gap-3 uppercase font-bold text-white">Total Products: <span>0</span></h4>
            <h4 className="flex gap-3 uppercase font-bold text-white">Grand Total: <span>$0.00</span></h4>
          </div>
      </div>  

      <div className="border rounded-md border-ld overflow-hidden p-2 mt-5 w-max mx-auto">
        <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-8 py-2 text-neutral-50 border-1 border-red-500 rounded-md w-max">
            <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
            <span className="absolute inset-0 overflow-hidden">
            <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
        </button>
      </div>
    </div>
  );
};

export default ExcessStockPanel;
