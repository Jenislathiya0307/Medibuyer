const PackOptimisationPanel = () => {

  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
        <div className="border rounded-md border-ld overflow-hidden p-2 mb-5">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2">
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-primary px-8 py-2 text-neutral-50 border-1 border-primary rounded-md">
                        <span className="relative z-10 group-hover:text-primary uppercase">Block Packsize</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-primary-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
                    <button className="col-span-3 group relative h-12 overflow-hidden overflow-x-hidden bg-[#e7ecf0] px-8 py-2 text-[#707a82] border-1 border-[#ccc] ms-auto rounded-md">
                        <span className="relative z-10 group-hover:text-[#707a82] uppercase">Block Brand Optimisation</span>
                        <span className="absolute inset-0 overflow-hidden">
                        <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-[#f1f1f1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>
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
                </div>
            </div>
            <p className="text-center text-black my-5">Any products added on this page will be blocked and excluded from the Pack Size Optimisation comparison.</p>
            <div className="rounded overflow-hidden">
                <table className="min-w-[1000px] w-full table-auto border-collapse text-sm">
                <thead>
                    <tr className="bg-sky-600 text-white text-[14px]">
                    <th className="p-2 border-r-1 border-gray-300 uppercase">
                        <input type="checkbox" name="" id="" />
                    </th>
                    <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Pip</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Product Description</th>
                    <th className="p-2 text-center border-r-1 border-gray-300">Pack</th>
                    <th className="p-2 text-center">Notes</th>
                    </tr>
                </thead>
                <tbody className="text-[12px]">
                    
                    <tr className="bg-white even:bg-sky-50">
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">1</td>
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">AAH</td>
                        <td className="p-2 text-center border-r-1 border-gray-300 uppercase">
                            <input className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" type="text" placeholder={'E.g. "Aten 25 tab /28" for Atenolol 25mg tab 28 pack"'} />
                        </td>
                        <td className="p-2 text-center font-medium border-r-1 border-gray-300">-</td>
                        <td className="p-2 text-center font-semibold">
                            -
                        </td>
                    </tr>

                </tbody>
                </table>
            </div> 
            <div className="border rounded-md border-ld overflow-hidden p-2 flex justify-center gap-2 mt-5 w-full">
                <button className="max-w-[50%] w-full group relative h-12 overflow-hidden overflow-x-hidden bg-red-500 px-10 py-2 text-neutral-50 border-1 border-red-500 rounded-md">
                    <span className="relative z-10 group-hover:text-red-500 uppercase">Delete</span>
                    <span className="absolute inset-0 overflow-hidden">
                    <span className="w-full absolute left-0 aspect-square origin-center -translate-x-full rounded-full bg-red-100 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default PackOptimisationPanel;
