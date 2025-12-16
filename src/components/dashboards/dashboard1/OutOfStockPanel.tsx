import React, { useState } from "react";
import { X } from "lucide-react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import {
  FaEuroSign,
  FaShoppingCart
} from "react-icons/fa";


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
        <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-3 mt-5">
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
        )}

        <div className="rounded overflow-hidden">
          <table className="w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-sky-600 text-white text-[14px]">
                <th className="p-2 text-center border-r-1 border-gray-300">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="p-2 text-center whitespace-nowrap border-r-1 border-gray-300">S. N.</th>
                <th className="p-2 text-center border-r-1 border-gray-300">Date</th>
                <th className="p-2 text-center border-r-1 border-gray-300">PIP</th>
                <th className="p-2 text-center border-r-1 border-gray-300">Product Description</th>
                <th className="p-2 text-center border-r-1 border-gray-300">Qty</th>
                <th className="p-2 text-center border-r-1 border-gray-300">Supplier</th>
                <th className="p-2 text-center border-r-1 border-gray-300">Status</th>
                <th className="p-2 text-center border-r-1 border-gray-300">Last Ordered</th>
                <th className="p-2 text-center"></th>
              </tr>
            </thead>
            <tbody>
              
              <tr className="bg-white even:bg-sky-50 text-[12px]">
                <td className="p-2 text-center font-medium border-r-1 border-gray-300">-</td>
                <td className="p-2 text-center font-medium border-r-1 border-gray-300">1</td>
                <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">20-08-2025 08:44:14</td>
                <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">6047666</td>
                <td className="p-2 text-center text-red-500 text-left border-r-1 border-gray-300">LORMETAZEPAM 1MG TABS (30) AAH</td>
                <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">1</td>
                <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">NOT ORDERED - PRODUCT NOT FOUND</td>
                <td className="p-2 text-center font-semibold border-r-1 border-gray-300">-</td>
                <td className="p-2 text-center flex justify-center gap-1">
                  <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" /> 
                  <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" /> 
                  <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" /> 
                  <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" /> 
                  <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">2</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:25:38</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">MOU0061X</td>
                  <td className="p-2 text-center text-left border-r-1 border-gray-300">MOUNJARO KWIKPEN 5MG/0.6ML 2.4ML X1 (1)</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">4</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AAH</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AGENCY RESTRICTED</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">3</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">19-08-2025 17:22:50</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">1085158</td>
                  <td className="p-2 text-center text-red-500 text-left border-r-1 border-gray-300">OXYTETRACYCLINE TABS 250MG PHD/EG 28 (28)</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">4</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">NOT ORDERED - PRODUCT ABOVE DRUG TARIFF</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">4</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">19-08-2025 17:22:50</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">1164938</td>
                  <td className="p-2 text-center text-red-500 text-left border-r-1 border-gray-300">PIOGLITAZONE TABLETS 45MG 28</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">2</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">NOT ORDERED - PRODUCT ABOVE DRUG TARIFF</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">QTY 1<br />04/08 05:25 PM</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">5</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:25:38</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">MOU0061X</td>
                  <td className="p-2 text-center text-left border-r-1 border-gray-300">MOUNJARO KWIKPEN 5MG/0.6ML 2.4ML X1 (1)</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">4</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AAH</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AGENCY RESTRICTED</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">6</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">19-08-2025 17:22:50</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">1164938</td>
                  <td className="p-2 text-center text-red-500 text-left border-r-1 border-gray-300">PIOGLITAZONE TABLETS 45MG 28</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">2</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">NOT ORDERED - PRODUCT ABOVE DRUG TARIFF</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">QTY 1<br />04/08 05:25 PM</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">7</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:25:38</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">MOU0061X</td>
                  <td className="p-2 text-center text-left border-r-1 border-gray-300">MOUNJARO KWIKPEN 5MG/0.6ML 2.4ML X1 (1)</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">4</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AAH</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AGENCY RESTRICTED</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">8</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">19-08-2025 17:22:50</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">1164938</td>
                  <td className="p-2 text-center text-red-500 text-left border-r-1 border-gray-300">PIOGLITAZONE TABLETS 45MG 28</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">2</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">NOT ORDERED - PRODUCT ABOVE DRUG TARIFF</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">QTY 1<br />04/08 05:25 PM</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">9</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:25:38</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">MOU0061X</td>
                  <td className="p-2 text-center text-left border-r-1 border-gray-300">MOUNJARO KWIKPEN 5MG/0.6ML 2.4ML X1 (1)</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">4</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AAH</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">AGENCY RESTRICTED</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>

              <tr className="bg-white even:bg-sky-50 text-[12px]">
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300"><input type="checkbox" name="" id="" /></td>
                  <td className="p-2 text-center font-medium border-r-1 border-gray-300">10</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">19-08-2025 17:22:50</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">1164938</td>
                  <td className="p-2 text-center text-red-500 text-left border-r-1 border-gray-300">PIOGLITAZONE TABLETS 45MG 28</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">2</td>
                  <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                  <td className="p-2 text-center text-red-500 border-r-1 border-gray-300">NOT ORDERED - PRODUCT ABOVE DRUG TARIFF</td>
                  <td className="p-2 text-center font-semibold border-r-1 border-gray-300">QTY 1<br />04/08 05:25 PM</td>
                  <td className="p-2 text-center flex justify-center gap-1">
                      <BiEdit className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaEuroSign className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <RiDeleteBin5Line className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FiPlusSquare className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                      <FaShoppingCart className="h-[25px] w-[25px] rounded-sm bg-sky-600 text-white p-1 cursor-pointer" />
                  </td>
              </tr>


            </tbody>
          </table>
        </div>

        <div className="border rounded-md border-ld overflow-hidden p-2 mt-5">
          <div className="grid grid-cols-12 rounded-md overflow-hidden">
            <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-8 py-2 text-neutral-50 border-1 border-red-500">
              <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
              <span className="absolute inset-0 overflow-hidden">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
            <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary">
              <span className="relative z-10 group-hover:text-primary uppercase">Add to Availability Tracker</span>
              <span className="absolute inset-0 overflow-hidden">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
            <button className="col-span-4 group relative h-12 overflow-hidden overflow-x-hidden bg-success px-8 py-2 text-neutral-50 border-1 border-success">
              <span className="relative z-10 group-hover:text-success uppercase">Add to Order Paid</span>
              <span className="absolute inset-0 overflow-hidden">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </div>
        </div>
        

    </div>
  );
};

export default OutOfStockPanel;
