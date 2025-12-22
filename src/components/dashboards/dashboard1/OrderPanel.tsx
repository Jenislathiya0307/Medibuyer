const OrderPanel = () => {

  return (
    <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
      <div className="rounded overflow-hidden">
          <table className="min-w-[1000px] w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-sky-600 text-white text-[14px]">
                <th className="p-2 border-r-1 border-gray-300 uppercase">Edit</th>
                <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Product Description</th>
                <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Pack</th>
                <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Qty</th>
                <th className="p-2 text-center border-r-1 border-gray-300 uppercase">Category</th>
                <th className="p-2 text-center">Supplier</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              
              <tr className="bg-white even:bg-sky-50">
                <td className="p-2 text-center font-medium border-r-1 border-gray-300">1</td>
                <td className="p-2 text-center font-medium border-r-1 border-gray-300 uppercase">
                  <input type="text" className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" placeholder={'E.G."ATEN 25 TAB /28" FOR ATENOL 25MG TAB 28 PACK'} />
                </td>
                <td className="p-2 text-center border-r-1 border-gray-300 uppercase">-</td>
                <td className="p-2 text-center border-r-1 border-gray-300">
                  <input type="text" className="p-2 border-1 border-gray-300 w-full rounded-md focus-visible:outline-0" />
                </td>
                <td className="p-2 text-center border-r-1 border-gray-300">
                  <span className="p-[5px_10px] border-1 border-success text-success rounded-md uppercase">Create Schedule</span>
                </td>
                <td className="p-2 text-center font-semibold">
                  
                </td>
              </tr>

            </tbody>
          </table>
      </div>  
    </div>
  );
};

export default OrderPanel;
