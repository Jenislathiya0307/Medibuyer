import { X } from "lucide-react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbShoppingCartCopy } from "react-icons/tb";
import { Dropdown, DropdownItem } from "flowbite-react";
import { FaFileCsv } from "react-icons/fa6";
import { IoPrintSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { FaEuroSign } from "react-icons/fa";
import { RxCounterClockwiseClock } from "react-icons/rx";


const AvailabilityTrackerPanel = () => {

  return (
    <>
        <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
            <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
                <p className="leading-snug pr-3">The Availability Tracker refreshes itself throughout the day to check the stock status of particular lines. This is done using our Smart Stock Status algorithm, and therefore may not be a 100% accurate reflection of the supplier's stock levels. (Read More..)</p>
                <button
                    className="text-[#777] hover:text-[#000] transition-colors ml-2 mt-[2px]"
                    aria-label="Close"
                >
                    <X size={16} />
                </button>
            </div>
            <div className="border rounded-md border-ld overflow-hidden p-2 mb-5">
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2">
                        <Dropdown label="- All -" className="bg-primary rounded-md">
                            <DropdownItem className="py-1 px-2">Sort by Time</DropdownItem>
                            <DropdownItem className="py-1 px-2">Sort by Unread</DropdownItem>
                            <DropdownItem className="py-1 px-2">Sort by Favourites</DropdownItem>
                        </Dropdown>
                        <Dropdown label="- All -" className="bg-primary rounded-md">
                            <DropdownItem className="py-1 px-2">Sort by Time</DropdownItem>
                            <DropdownItem className="py-1 px-2">Sort by Unread</DropdownItem>
                            <DropdownItem className="py-1 px-2">Sort by Favourites</DropdownItem>
                        </Dropdown>
                        <Dropdown label="- Filter -" className="bg-primary rounded-md">
                            <DropdownItem className="py-1 px-2">Sort by Time</DropdownItem>
                            <DropdownItem className="py-1 px-2">Sort by Unread</DropdownItem>
                            <DropdownItem className="py-1 px-2">Sort by Favourites</DropdownItem>
                        </Dropdown>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Search Keyword..."
                                className="border border-gray-300 rounded px-3 py-[5px] text-sm w-52 focus:outline-none"
                            />
                            <button className="bg-primary hover:bg-primaryemphasis text-white py-3 px-4 rounded-md text-sm font-medium shadow-sm transition uppercase">
                                Search
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <FaFileCsv className="h-[44px] w-[44px] rounded-sm bg-sky-600 text-white p-[10px] cursor-pointer"/>
                            <IoPrintSharp className="h-[44px] w-[44px] rounded-sm bg-sky-600 text-white p-[10px] cursor-pointer"/>
                            <IoSettingsSharp className="h-[44px] w-[44px] rounded-sm bg-sky-600 text-white p-[10px] cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-black">The Availability Tracker allows you to keep Track of when items are back in stock using our Smart Stock Status algorithm. Simply add the items below and turn ON the email notifications to start receiving daily email updates. Please <a href="" className="underline">Click here</a> to learn how about Stock Status works.</p>
            <div className="rounded overflow-hidden mt-5">
                <table className="w-full table-auto border-collapse text-sm">
                    <thead>
                        <tr className="bg-sky-600 text-white text-[14px]">
                            <th className="p-2 text-center border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th className="p-2 text-center whitespace-nowrap border-r-1 border-gray-300"></th>
                            <th className="p-2 text-center border-r-1 border-gray-300 text-center">
                                <FaRegCircleQuestion className="mx-auto" />
                            </th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Data Added</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">PIP</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Product Description</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Pack</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Qty</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Price</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Jul 25 DT Price</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Aug 25 DT Price</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Max Price ($)</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Status</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Supplier</th>
                            <th className="p-2 text-center">-</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td className="p-2 border-r-1 border-gray-300 uppercase">
                                <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300">
                                <div className="flex gap-2">
                                    <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <RxCounterClockwiseClock className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                </div>
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
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                                <div className="flex items-center flex-col">
                                    <TbShoppingCartCopy className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <p className="pt-1">22m</p>
                                </div>
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                            <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                        </tr>

                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td className="p-2 border-r-1 border-gray-300 uppercase">
                                <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300">
                                <div className="flex gap-2">
                                    <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <RxCounterClockwiseClock className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                </div>
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
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                                <div className="flex items-center flex-col">
                                    <TbShoppingCartCopy className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <p className="pt-1">22m</p>
                                </div>
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                            <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                        </tr>

                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td className="p-2 border-r-1 border-gray-300 uppercase">
                                <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300">
                                <div className="flex gap-2">
                                    <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <RxCounterClockwiseClock className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                </div>
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
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                                <div className="flex items-center flex-col">
                                    <TbShoppingCartCopy className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <p className="pt-1">22m</p>
                                </div>
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                            <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                        </tr>

                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td className="p-2 border-r-1 border-gray-300 uppercase">
                                <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300">
                                <div className="flex gap-2">
                                    <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <RxCounterClockwiseClock className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                </div>
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
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                                <div className="flex items-center flex-col">
                                    <TbShoppingCartCopy className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <p className="pt-1">22m</p>
                                </div>
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                            <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                        </tr>

                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td className="p-2 border-r-1 border-gray-300 uppercase">
                                <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300">
                                <div className="flex gap-2">
                                    <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <RxCounterClockwiseClock className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                </div>
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
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                                <div className="flex items-center flex-col">
                                    <TbShoppingCartCopy className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <p className="pt-1">22m</p>
                                </div>
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                            <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                        </tr>
                        
                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td className="p-2 border-r-1 border-gray-300 uppercase">
                                <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300">
                                <div className="flex gap-2">
                                    <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <RxCounterClockwiseClock className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                </div>
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
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                                <div className="flex items-center flex-col">
                                    <TbShoppingCartCopy className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <p className="pt-1">22m</p>
                                </div>
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                            <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                        </tr>
                        
                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td className="p-2 border-r-1 border-gray-300 uppercase">
                                <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer mx-auto" />
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300">
                                <div className="flex gap-2">
                                    <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <RxCounterClockwiseClock className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                </div>
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
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                                <div className="flex items-center flex-col">
                                    <TbShoppingCartCopy className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                                    <p className="pt-1">22m</p>
                                </div>
                            </td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                            <td className="p-2 text-center uppercase text-red-500 font-bold">Bestway</td>
                        </tr>

                    </tbody>
                </table>
                <div className="border rounded-md border-ld overflow-hidden p-2 flex justify-center gap-2 mt-5 w-full">
                    <button className="w-full group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-10 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                        <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                    <button className="w-full group relative h-12 overflow-hidden overflow-x-hidden bg-success px-10 py-2 text-neutral-50 border-1 border-success rounded-md">
                        <span className="relative z-10 group-hover:text-success uppercase">Add To Order</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default AvailabilityTrackerPanel;
