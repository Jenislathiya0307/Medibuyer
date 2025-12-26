import { BiSearchAlt } from "react-icons/bi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdSync } from "react-icons/io";


const OrderPanel = () => {


  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
      <div className="w-full min-h-screen text-[13px] font-sans">

        <div className="grid grid-cols-12 gap-4 gap-2 mb-4">

          <div className="col-span-8 flex items-center gap-2">
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden py-3 px-3 w-max">
                  <p className="flex justify-center items-center text-sm leading-[16px] text-black capitalize rounded-md font-bold">Suppliers</p>
                  <span className="uppercase p-[10px_15px] border border-gray-300 rounded-md">All Selected</span>
              </div>
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden py-3 px-3 w-max">
                  <p className="flex justify-center items-center text-sm leading-[16px] text-black capitalize rounded-md font-bold">Order No.</p>
                  <span className="uppercase p-[10px_15px] border border-gray-300 rounded-md">SS94014</span>
              </div>
              <div className="flex gap-2 border rounded-md border-ld overflow-hidden py-3 px-3">
                  <p className="flex justify-center items-center text-sm leading-[16px] text-black capitalize rounded-md font-bold">Order Ref.</p>
                  <span className="uppercase p-[10px_15px] border border-gray-300 rounded-md">Order Reference</span>
              </div>
          </div>

          <div className="col-span-4 border rounded-md border-ld overflow-hidden p-2">
              <div className="grid grid-cols-12 gap-2">
                  <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-4 py-2 text-neutral-50 border-1 border-primary rounded-md">
                      <span className="relative z-10 group-hover:text-primary uppercase">New Order</span>
                      <span className="absolute inset-0 overflow-hidden">
                      <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                  </button>
                  <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-success px-4 py-2 text-neutral-50 border-1 border-success rounded-md">
                      <span className="relative z-10 group-hover:text-success uppercase">Transmit</span>
                      <span className="absolute inset-0 overflow-hidden">
                      <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                  </button>
                  <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-4 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                      <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
                      <span className="absolute inset-0 overflow-hidden">
                      <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                  </button>
              </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-8">

            <div className='border rounded-md border-ld overflow-hidden h-[400px] overflow-y-auto mb-5'>
              <table className="w-full table-auto border-collapse text-sm">
                <thead className="sticky top-0 z-10">
                  <tr className='bg-sky-600 text-white text-[14px]'>
                    <th className="p-2 text-center border-r-1 border-gray-300">Edit</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Product Description</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Pack</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Qty</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Category</th>
                    <th className="p-2 text-center">Supplier</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-white even:bg-sky-50 text-[12px]">
                    <td className="p-2 text-center border-r-1 border-gray-300">
                      <BiSearchAlt className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                    </td>

                    <td className="py-1 px-3 border-r-1 border-gray-300">
                      <div className="flex items-center">
                        <input className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" placeholder="E.g. &quot;Aten 25 tab /28&quot; for Atenolol 25mg tab 28 pack&quot;" type="text" />
                      </div>
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                      <input className="p-2 border-1 border-gray-300 rounded-md focus-visible:outline-0 w-[80px]" type="number" name="" id="" />
                    </td>
                    <td className="p-2 text-center border-r-1 border-gray-300">
                      <span className="p-[5px_10px] border border-gray-300 rounded-md">None</span>
                    </td>
                    <td className="p-2 text-center">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between border-y border-gray-300 py-5">
              <button className="border border-primary text-primary px-4 py-2 text-xs rounded font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                PACK SIZE OPTIMISATION
              </button>
              <button className="border border-primary text-primary px-4 py-2 text-xs rounded font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                BRAND TO GENERIC OPTIMISATION
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 gap-y-5 my-5">
              {[
                { name: "AAH", today: "32.72", color: "text-red-600" },
                { name: "ALLIANCE", today: "0.00", color: "text-blue-700" },
                { name: "BESTWAY", today: "0.66", color: "text-orange-600" },
                { name: "OTC", today: "14.83", color: "text-gray-700" },
                { name: "PHOENIX", today: "150.05", color: "text-cyan-600" },
                { name: "SIGMA", today: "2.76", color: "text-indigo-600" },
                { name: "TRIDENT", today: "5.27", color: "text-purple-700" },
              ].map((s, i) => (
                  <div key={i} className="border rounded-md border-ld p-2 pt-5 relative flex flex-col gap-2 items-center text-center bg-primary">
                    <div className={`${s.color} text-xs border rounded-md border-ld w-full p-2 bg-white font-bold`}>{s.name}: £--.--</div>
                    <div className="text-xs border rounded-md border-ld w-full p-2 bg-white">Today's Spend: £{s.today}</div>
                    <span className={`${s.color} text-[10px] border rounded-md border-ld w-max p-1 px-[5px] absolute top-[-12px] bg-white font-medium`}>Excl Today's Spend</span>
                  </div>
              ))}
            </div>

            <div className="flex justify-between items-center border rounded-md border-ld overflow-hidden p-3 mt-5 bg-primary text-white">
              <span className="uppercase font-bold text-white">TOTAL PRODUCTS: 0</span>
              <span className="uppercase font-bold text-white">GRAND TOTAL: £--.--</span>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-4">

            <div className="border rounded-md border-ld overflow-hidden">
              <div className="relative">
                <h3 className="flex justify-center items-center gap-2 text-[14px] text-white bg-primary font-semibold border-b p-2 text-center uppercase">
                  ORDER STATUS <IoMdSync className="h-[20px] w-[20px]"/>
                </h3>
                <FaRegCircleQuestion className="absolute top-[50%] translate-y-[-50%] text-white right-[10px]" />
              </div>
              
              <div className="text-[12px] flex justify-between p-2 gap-2">
                <div className="font-semibold p-[10px_15px] border border-gray-300 rounded-md w-full">Pending Orders (5 days)</div>
                <div className="font-semibold p-[10px_15px] border border-gray-300 rounded-md w-full">Sent Orders (Today)</div>
              </div>
            </div>

            <div className="border rounded-md border-ld overflow-hidden">
              <div className="relative">
                <h3 className="flex justify-center items-center gap-2 text-[14px] text-white bg-red-500 font-semibold border-b p-2 text-center uppercase">
                  MANUAL ORDER <button className="text-[10px] uppercase text-white underline cursor-pointer">[Clear All]</button>
                </h3>
              </div>

              <div className="text-[12px] p-2">
                <input className="w-full border border-gray-300 rounded px-2 py-2" placeholder="Search Manual Orders" />
                <div className="text-primary p-3 font-semibold cursor-pointer text-center underline">
                  PRODUCT NOT FOUND - PLEASE REORDER [1]
                </div>

                <div className="p-[10px_15px] border border-gray-300 rounded-md w-full">
                  20/08/25 08:44 - 6047666 - LORMETAZEPAM 1MG TABS (30) AAH - QTY 1 - ORDER NUMBER - PMR2SS94012
                </div>
              </div>

            </div>

            <div className="border rounded-md border-ld overflow-hidden">
              <div className="relative">
                <h3 className="text-[14px] text-white bg-gray-500 font-semibold border-b p-2 text-center uppercase">Updates</h3>
              </div>
              <div className="text-[12px] text-gray-600 p-2 text-center">No new updates.</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
