import { X } from "lucide-react";
import { BiSearchAlt } from "react-icons/bi";

const ProductManagementTool = () => {

  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
      <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
          <p className="leading-snug pr-3">The Product Management tool allows you to set a maximum price you are willing to pay for certain lines, meaning the system will not automatically continue to try ordering from suppliers further down the cascade if their price exceeds what you have set to be your maximum. (Read More..)</p>
          <button
              className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
              aria-label="Close"
          >
              <X size={16} />
          </button>
      </div>

      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex gap-2 border rounded-md border-ld overflow-hidden p-2">
            <button className="group relative h-[42px] overflow-hidden overflow-x-hidden bg-primary px-2 py-2 text-neutral-50 border-1 border-primary rounded-md">
                    <span className="relative z-10 group-hover:text-primary uppercase">Active Products</span>
                    <span className="absolute inset-0 overflow-hidden">
                    <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
            </button>
            <button className="group relative h-[42px] overflow-hidden overflow-x-hidden bg-[#e7ecf0] px-2 py-2 text-[#707a82] border-1 border-[#ccc] rounded-md">
                  <span className="relative z-10 group-hover:text-[#707a82] uppercase">Suggested Products</span>
                  <span className="absolute inset-0 overflow-hidden">
                  <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#f1f1f1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
              </button>
          </div>
        <div className="flex gap-2 border rounded-md border-ld overflow-hidden p-2">
            <input
                type="text"
                placeholder="Search Keyword..."
                className="border border-gray-300 rounded px-3 py-[5px] text-sm w-52 focus:outline-none h-[42px]"
            />
            <button className="bg-primary hover:bg-primaryemphasis text-white px-2 py-[4px] rounded-md text-sm font-medium shadow-sm transition uppercase">
                Search
            </button>
            <button className="group relative h-[40px] overflow-hidden overflow-x-hidden bg-white px-2 py-2 text-[#707a82] border-1 border-[#ccc] rounded-md">
                <span className="relative z-10 group-hover:text-[#707a82] uppercase">Overrider Setting</span>
                <span className="absolute inset-0 overflow-hidden">
                <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#f1f1f1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
            </button>
        </div>
      </div>
      

      <div className="border rounded-md border-ld overflow-hidden mt-5 h-[400px] overflow-y-auto">
        <table className="w-full table-auto border-collapse text-sm">
            <thead className="sticky top-0 z-10">
                <tr className="bg-sky-600 text-white text-[14px]">
                    <th className="p-2 text-center border-r-1 border-gray-300">
                        S.N.
                    </th>
                    <th className="p-2 text-center whitespace-nowrap border-r-1 border-gray-300">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th className="p-2 text-center border-r-1 border-gray-300 text-center">-</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Pip</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Product Description</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Pack</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Jul 25 DT Price</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Aug 25 DT Price</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Max Price($)</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Category</th>
                    <th className="p-2 text-center">Expiry Date</th>
                </tr>
            </thead>
            <tbody>
                
                <tr className="bg-white even:bg-sky-50 text-[12px]">
                    <td className="p-2 text-center font-medium border-r-1 border-gray-300">-</td>
                    <td className="p-2 border-r-1 border-gray-300 uppercase">
                        <BiSearchAlt className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                      <input className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" placeholder="E.g. &quot;Aten 25 tab /28&quot; for Atenolol 25mg tab 28 pack&quot;" type="text"></input>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                      <span className="p-[5px_10px] border border-gray-300 rounded-md">None</span>
                    </td>
                    <td className="p-2 text-center uppercase text-red-500 font-bold">-</td>
                </tr>

            </tbody>
        </table>
      </div>

      <div className="border rounded-md border-ld overflow-hidden p-3 mt-5 bg-primary max-w-max mx-auto">
          <div className="flex justify-center items-center">
            <h4 className="flex gap-3 uppercase font-bold text-white px-5">Total Record: <span>0</span></h4>
          </div>
      </div>  

      <div className="border rounded-md border-ld overflow-hidden p-2 mt-5">
          <div className="grid grid-cols-12 gap-2">
              <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-2 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                  <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
                  <span className="absolute inset-0 overflow-hidden">
                  <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
              </button>
              <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-success px-2 py-2 text-neutral-50 border-1 border-success rounded-md">
                  <span className="relative z-10 group-hover:text-success uppercase">Update Expiry</span>
                  <span className="absolute inset-0 overflow-hidden">
                  <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
              </button>
              <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-[#e7ecf0] px-2 py-2 text-[#707a82] border-1 border-[#ccc] rounded-md">
                  <span className="relative z-10 group-hover:text-[#707a82] uppercase">Update Max Price Based on Consession Price</span>
                  <span className="absolute inset-0 overflow-hidden">
                  <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#f1f1f1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
              </button>
          </div>
      </div>
    </div>
  );
};

export default ProductManagementTool;
