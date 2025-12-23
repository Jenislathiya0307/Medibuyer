import { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { X } from "lucide-react";

const ReturnsManagement = () => {

  const [selected, setSelected] = useState("3 Months");

  return (
      <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
          <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
              <p className="leading-snug pr-3">The Returns Management page allows you to keep track of all your supplier returns in one place. (Read More..)</p>
              <button
                  className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
                  aria-label="Close"
              >
                  <X size={16} />
              </button>
          </div>

          <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden p-2 w-max">
                  <p className="flex justify-center items-center text-sm leading-[16px] text-black capitalize rounded-md font-bold">Show By :</p>
                  <Dropdown label={selected} className="border border-gray-300 rounded-md px-2 py-[5px] text-sm focus:outline-none bg-primary ms-auto">
                      <DropdownItem className="py-1 px-2" onClick={() => setSelected("1 Month")}>1 Month</DropdownItem>
                      <DropdownItem className="py-1 px-2" onClick={() => setSelected("3 Month")}>3 Months</DropdownItem>
                      <DropdownItem className="py-1 px-2" onClick={() => setSelected("6 Month")}>6 Months</DropdownItem>
                      <DropdownItem className="py-1 px-2" onClick={() => setSelected("12 Month")}>12 Months</DropdownItem>
                  </Dropdown>
              </div>
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden p-2 w-max">
                  <p className="flex items-center text-sm leading-[16px] text-black capitalize rounded-md font-bold w-full">Start Date :</p>
                  <input
                  type="date"
                  className="border border-gray-300 rounded px-2 py-[4px] text-sm focus:outline-none max-w-[120px] w-full h-[42px]"
                  />
              </div>
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden p-2">
                  <p className="flex items-center text-sm leading-[16px] text-black capitalize rounded-md font-bold w-full">End Date :</p>
                  <input
                  type="date"
                  className="border border-gray-300 rounded px-2 py-[4px] text-sm focus:outline-none max-w-[120px] w-full h-[42px]"
                  />
              </div>
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden p-2">
                  <input
                      type="text"
                      placeholder="Search Keyword..."
                      className="border border-gray-300 rounded px-3 py-[5px] text-sm w-52 focus:outline-none h-[42px] max-w-[150px]"
                  />
                  <button className="bg-primary hover:bg-primaryemphasis text-white px-2 py-[4px] rounded-md text-sm font-medium shadow-sm transition uppercase">
                      Search
                  </button>
              </div>
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden p-2">
                <button className="group relative h-[42px] overflow-hidden overflow-x-hidden bg-primary px-2 py-2 text-neutral-50 border-1 border-primary rounded-md">
                        <span className="relative z-10 group-hover:text-primary uppercase">Advance Filter</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                </button>
                <button className="group relative h-[42px] overflow-hidden overflow-x-hidden bg-success px-2 py-2 text-neutral-50 border-1 border-success rounded-md">
                    <span className="relative z-10 group-hover:text-success uppercase">Add A Product</span>
                    <span className="absolute inset-0 overflow-hidden">
                    <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                </button>
              </div>
          </div>
          

          <div className="border rounded-md border-ld overflow-hidden mt-5 h-[400px] overflow-y-auto">
            <table className="w-full table-auto border-collapse text-sm">
                <thead className="sticky top-0 z-10">
                    <tr className="bg-sky-600 text-white text-[14px]">
                        <th className="p-2 text-center border-r-1 border-gray-300">
                            SN
                        </th>
                        <th className="p-2 text-center whitespace-nowrap border-r-1 border-gray-300">
                          <input type="checkbox" name="" id="" />
                        </th>
                        <th className="p-2 text-center border-r-1 border-gray-300 text-center"></th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Pip Code</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Description</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Supplier</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Invoice No.</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Price</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Qty Returned</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Reason For Return</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Date Returned</th>
                        <th className="p-2 text-center border-r-1 border-gray-300">Status</th>
                        <th className="p-2 text-center">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                      <td className="p-2 bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] uppercase text-center my-3" colSpan={13}>No Records Found!</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px] hidden">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td className="p-2 border-r-1 border-gray-300 uppercase">
                            
                        </td>
                        <td className="p-2 text-center border-r-1 border-gray-300">
                            
                        </td>
                        <td className="p-2 text-center border-r-1 border-gray-300">12-11-2024</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">DG00181</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">Carbimazole Tablets SMG</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">100</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline">1</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">$1.48</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">$3.21</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">$3.21</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                        <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                    </tr>

                </tbody>
            </table>
          </div>

          <div className="border rounded-md border-ld overflow-hidden p-2 mt-5">
              <div className="grid grid-cols-12 gap-2">
                  <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary rounded-md">
                      <span className="relative z-10 group-hover:text-primary uppercase">Open: $0.00</span>
                      <span className="absolute inset-0 overflow-hidden">
                      <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                  </button>
                  <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-success px-8 py-2 text-neutral-50 border-1 border-success rounded-md">
                      <span className="relative z-10 group-hover:text-success uppercase">Credit Received: $0.00</span>
                      <span className="absolute inset-0 overflow-hidden">
                      <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                  </button>
                  <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-8 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                      <span className="relative z-10 group-hover:text-red-500 uppercase">Credit Rejected: $0.00</span>
                      <span className="absolute inset-0 overflow-hidden">
                      <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                  </button>
                  <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-[#e7ecf0] px-8 py-2 text-[#707a82] border-1 border-[#ccc] rounded-md">
                      <span className="relative z-10 group-hover:text-[#707a82] uppercase">Archive: $0.00</span>
                      <span className="absolute inset-0 overflow-hidden">
                      <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#f1f1f1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                  </button>
              </div>
          </div>

          <div className="border rounded-md border-ld overflow-hidden p-3 mt-5 bg-primary">
              <div className="flex justify-between items-center">
                <h4 className="uppercase font-bold text-white">Total Products: <span>0</span></h4>
                <h4 className="uppercase font-bold text-white">Total Amount: <span>$0.00</span></h4>
              </div>
          </div>  
      </div>
  );
};

export default ReturnsManagement;
