import React, { useState } from "react";
import { X } from "lucide-react";

const OutOfStockPanel: React.FC = () => {

  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
        <div className="grid grid-cols-12 gap-2 border rounded-md border-ld overflow-hidden p-2">
            <div className="col-span-3 flex gap-2 border rounded-md border-ld overflow-hidden p-2">
                <p className="flex justify-center items-center text-sm leading-[16px] bg-primary text-white uppercase rounded-md py-3 px-4">Status</p>
                <select className="border border-gray-300 rounded-md px-2 py-[5px] text-sm focus:outline-none w-full">
                    <option disabled>Status</option>
                    <option>All Selected</option>
                    <option>Not Ordered</option>
                    <option>Out of Stock</option>
                </select>
            </div>
            <div className="col-span-3 flex gap-2 border rounded-md border-ld overflow-hidden p-2">
                <p className="flex justify-center items-center text-sm leading-[16px] bg-primary text-white uppercase rounded-md py-3 px-4 whitespace-nowrap">Start Date</p>
                <input
                type="date"
                className="border border-gray-300 rounded px-2 py-[4px] text-sm focus:outline-none w-full"
                />
            </div>
            <div className="col-span-3 flex gap-2 border rounded-md border-ld overflow-hidden p-2">
                <p className="flex justify-center items-center text-sm leading-[16px] bg-primary text-white uppercase rounded-md py-3 px-4 whitespace-nowrap">End Date</p>
                <input
                type="date"
                className="border border-gray-300 rounded px-2 py-[4px] text-sm focus:outline-none w-full"
                />
            </div>
            <div className="col-span-3 flex gap-2 border rounded-md border-ld overflow-hidden p-2">
                <input
                    type="text"
                    placeholder="Search Keyword..."
                    className="border border-gray-300 rounded px-3 py-[5px] text-sm w-52 focus:outline-none"
                />
                <button className="bg-primary hover:bg-primaryemphasis text-white py-3 px-4 rounded-md text-sm font-medium shadow-sm transition uppercase">
                    Search
                </button>
            </div>
        </div>
        {visible && (
        <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm">
            <p className="leading-snug pr-3">
                The Out of Stock panel lists all lines which weren’t successfully
                ordered. By having all these lines displayed in one place, it enables
                you to easily select which items you wish to re-order, as well as gain a
                better understanding of why each line was rejected.{" "}
                <a
                href="#"
                className="text-[#3a3a3a] underline hover:text-[#000]"
                >
                (Read More…)
                </a>
            </p>
            <button
                onClick={() => setVisible(false)}
                className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
                aria-label="Close"
            >
                <X size={16} />
            </button>
        </div>
        )};
    </div>
  );
};

export default OutOfStockPanel;
