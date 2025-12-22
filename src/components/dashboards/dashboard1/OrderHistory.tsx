import { BiSearchAlt } from "react-icons/bi";

const OrderHistory = () => {

  return (
    <>
        <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px] mb-6">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3 flex gap-2 border rounded-md border-ld p-2">
                    <select className="border border-gray-300 rounded-md px-2 py-[5px] text-sm focus:outline-none w-full">
                        <option disabled selected>Today</option>
                        <option>Yesterday</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                </div>
                <div className="col-span-3 flex gap-2 border rounded-md border-ld p-2">
                    <p className="flex justify-center items-center text-sm leading-[16px] bg-primary text-white uppercase rounded-md p-2">Status</p>
                    <select className="border border-gray-300 rounded-md px-2 py-[5px] text-sm focus:outline-none w-full">
                        <option disabled>Status</option>
                        <option>All Selected</option>
                        <option>Not Ordered</option>
                        <option>Out of Stock</option>
                    </select>
                </div>
                <div className="col-span-3 flex gap-2 border rounded-md border-ld p-2">
                    <p className="flex justify-center items-center text-sm leading-[16px] bg-primary text-white uppercase rounded-md py-3 px-4 whitespace-nowrap">Start Date</p>
                    <input
                    type="date"
                    className="border border-gray-300 rounded px-2 py-[4px] text-sm focus:outline-none w-full"
                    />
                </div>
                <div className="col-span-3 flex gap-2 border rounded-md border-ld p-2">
                    <p className="flex justify-center items-center text-sm leading-[16px] bg-primary text-white uppercase rounded-md py-3 px-4 whitespace-nowrap">End Date</p>
                    <input
                    type="date"
                    className="border border-gray-300 rounded px-2 py-[4px] text-sm focus:outline-none w-full"
                    />
                </div>
                <div className="col-span-9 flex gap-2 border rounded-md border-ld p-2">
                    <input
                        type="text"
                        placeholder="Search Keyword..."
                        className="border border-gray-300 rounded px-3 py-[5px] text-sm w-full focus:outline-none"
                    />
                    <button className="bg-primary hover:bg-primaryemphasis text-white py-3 px-4 rounded-md text-sm font-medium shadow-sm transition uppercase">
                        Search
                    </button>
                </div>
                <div className="col-span-3 flex gap-2 border rounded-md border-ld p-2">
                    <button className="flex gap-2 items-center justify-center bg-primary hover:bg-primaryemphasis text-white py-3 px-4 rounded-md text-sm font-medium shadow-sm transition uppercase w-full">
                    Product Search <BiSearchAlt className="w-[15px] h-[15px]" />
                    </button>
                </div>
            </div>

            <div className="rounded overflow-hidden mb-3 mt-5">
                <table className="w-full table-auto border-collapse text-sm">
                <thead>
                    <tr className="bg-sky-600 text-white text-[14px]">
                    <th className="p-2 text-center border-r-1 border-gray-300">
                        <input type="checkbox" name="" id="" />
                    </th>
                    <th className="p-2 text-center whitespace-nowrap border-r-1 border-gray-300">S. N.</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Order No.</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Total Products</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Created</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Transmit</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Status</th>
                    <th className="p-2 text-center">Refrence</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">1</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">PMR2SS94012</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">16</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">20-08-2025 08:44</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">20-08-2025 08:45</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">2</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">PMR2SS94008</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">64</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:22</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:25</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Progress</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">3</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">SS94007</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">1</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:15</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 17:23</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">4</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">SS94006</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">6</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 15:10</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 16:52</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">5</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">SS94005</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">2</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 15:09</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 15:09</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">6</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">SS94004</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">1</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 12:46</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 12:46</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">7</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">SS94003</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">2</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 11:34</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 11:57</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">8</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">SS94002</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">1</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 11:18</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 11:18</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">9</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">PMR2SS93999</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">32</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 10:53</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 10:54</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Progress</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>

                    <tr className="bg-white even:bg-sky-50 text-[12px]">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">10</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">SS93998</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">3</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 09:09</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">19-08-2025 10:53</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase underline underline-offset-1 cursor-pointer">View Order</td>
                        <td className="p-2 text-center border-r-1 border-gray-300">-</td>
                    </tr>


                </tbody>
                </table>
            </div>

            <div className="border rounded-md border-ld overflow-hidden p-2 mt-5">
                <div className="grid grid-cols-12 gap-2">
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary rounded-md">
                        <span className="relative z-10 group-hover:text-primary uppercase">Edit Order</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-success px-8 py-2 text-neutral-50 border-1 border-success rounded-md">
                        <span className="relative z-10 group-hover:text-success uppercase">Merge Order</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#c0ead2] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-8 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                        <span className="relative z-10 group-hover:text-red-500 uppercase">Re - order</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary rounded-md">
                        <span className="relative z-10 group-hover:text-primary uppercase">Old Order History</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                </div>
            </div>

            <div className="border rounded-md border-ld overflow-hidden p-2 mt-5 flex justify-center items-center gap-5">
                <p className="flex items-center">Showing 1 - 10 of 148</p>
                <div className="flex gap-2 align-center">
                    <button className="bg-[#ccc] p-[5px_15px] rounded-[5px] text-white">1</button>
                    <button className="bg-primary p-[5px_15px] rounded-[5px] text-white">2</button>
                    <button className="bg-primary p-[5px_15px] rounded-[5px] text-white">3</button>
                    <button className="bg-primary p-[5px_15px] rounded-[5px] text-white">Next</button>
                </div>
            </div>
        </div>
        <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
            <div className="grid grid-cols-12">
                <div className="col-span-8 flex gap-2 items-center">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-3 flex gap-2 items-center border border-ld rounded-[5px] p-2 text-[12px]">
                            <p className="p-[5px_10px] bg-primary text-white rounded-[5px]">Date</p>
                            <input className="h-full focus-visible:outline-0 w-full" type="date" name="" id="" />
                        </div>
                        <div className="col-span-3 flex gap-2 items-center border border-ld rounded-[5px] p-2 text-[12px]">
                            <p className="p-[5px_10px] bg-primary text-white rounded-[5px]">Order No.</p>
                            <input className="h-full focus-visible:outline-0 w-[100px]" type="text" name="" id="" placeholder="XXXXXX_XXXXXX" />
                        </div>
                        <div className="col-span-2 flex gap-2 items-center border border-ld rounded-[5px] p-2 text-[12px]">
                            <p className="p-[5px_10px] bg-primary text-white rounded-[5px]">Supplier</p>
                            <input className="h-full focus-visible:outline-0 w-full" type="text" name="" id="" placeholder="XXXX" />
                        </div>
                        <div className="col-span-2 flex gap-2 items-center border border-ld rounded-[5px] p-2 text-[12px]">
                            <p className="p-[5px_10px] bg-primary text-white rounded-[5px]">Total</p>
                            <input className="h-full focus-visible:outline-0 w-full" type="text" name="" id="" placeholder="$X.XX" />
                        </div>
                    </div>
                </div>
                <div className="col-span-4 flex gap-2">
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-[#ccc] px-8 py-2 text-neutral-50 border-1 border-[#ccc] ms-auto rounded-md">
                        <span className="relative z-10 group-hover:text-[#ccc] uppercase">View Response</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#f1f1f1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary rounded-md">
                        <span className="relative z-10 group-hover:text-primary uppercase">Print</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="rounded overflow-hidden mb-5 mt-5">
                <table className="w-full table-auto border-collapse text-sm">
                    <thead>
                        <tr className="bg-sky-600 text-white text-[14px]">
                            <th className="p-2 text-center whitespace-nowrap border-r-1 border-gray-300">Pip Code</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Description</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Quantity</th>
                            <th className="p-2 text-center border-r-1 border-gray-300">Unit Price</th>
                            <th className="p-2 text-center">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">XXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">XXXXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300">X</td>
                            <td className="p-2 text-center border-r-1 border-gray-300"> X.XX</td>
                            <td className="p-2 text-center">X.XX</td>
                        </tr>
                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">XXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">XXXXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300">X</td>
                            <td className="p-2 text-center border-r-1 border-gray-300"> X.XX</td>
                            <td className="p-2 text-center">X.XX</td>
                        </tr>
                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">XXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">XXXXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300">X</td>
                            <td className="p-2 text-center border-r-1 border-gray-300"> X.XX</td>
                            <td className="p-2 text-center">X.XX</td>
                        </tr>
                        <tr className="bg-white even:bg-sky-50 text-[12px]">
                            <td className="p-2 text-center font-medium border-r-1 border-gray-300">XXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300 uppercase">XXXXXX</td>
                            <td className="p-2 text-center border-r-1 border-gray-300">X</td>
                            <td className="p-2 text-center border-r-1 border-gray-300"> X.XX</td>
                            <td className="p-2 text-center">X.XX</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center">
                <div className="bg-white border border-ld p-3 rounded-md w-max">
                    <div className="flex items-center gap-5">
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" name="" id="web_checkbox" className="h-[20px] w-[20px] accent-primary" />
                            <label htmlFor="web_checkbox" className="uppercase font-bold text-black">Web</label>
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" name="" id="email_checkbox" className="h-[20px] w-[20px] accent-primary" />
                            <label htmlFor="email_checkbox" className="uppercase font-bold text-black">Email</label>
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" name="" id="fax_checkbox" className="h-[20px] w-[20px] accent-primary" />
                            <label htmlFor="fax_checkbox" className="uppercase font-bold text-black">Fax</label>
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" name="" id="print_checkbox" className="h-[20px] w-[20px] accent-primary" />
                            <label htmlFor="print_checkbox" className="uppercase font-bold text-black">Print</label>
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" name="" id="sent_checkbox" className="h-[20px] w-[20px] accent-primary" />
                            <label htmlFor="sent_checkbox" className="uppercase font-bold text-black">Mark As Sent</label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-8 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                        <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-success px-8 py-2 text-neutral-50 border-1 border-success rounded-md">
                        <span className="relative z-10 group-hover:text-success uppercase">Transmit</span>
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

export default OrderHistory;
