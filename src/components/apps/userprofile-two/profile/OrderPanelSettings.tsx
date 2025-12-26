import ProfileBanner from "../profile/ProfileBanner";

const OrderPanelSettings = () => {

  return (
    <>
        <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
                <ProfileBanner />
            </div>
        </div>

        <div className="mx-6 mt-6">
            <div className="bg-white border border-gray-200 shadow-md p-6 rounded-[16px]">
                <div className="w-full space-y-12">

                <h2 className="text-[20px] text-center font-semibold text-gray-700 tracking-wide border-b pb-4 mb-0 uppercase">
                    ORDER PANEL SETTINGS
                </h2>

                <div className="space-y-6 p-8 mb-0">
                    <p className="text-[16px] font-semibold text-gray-700">
                    (1) Order Status Window Settings – 
                    <span className="font-normal"> Configure the default tab to efficiently manage and track order.</span>
                    </p>

                    <div className="flex items-center gap-6 pl-6">
                    <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                        <input type="radio" name="orders" className="w-4 h-4" />
                        Pending Orders
                    </label>

                    <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                        <input type="radio" name="orders" className="w-4 h-4" />
                        Sent Orders
                    </label>
                    </div>
                </div>

                <div className="space-y-6 p-8 pt-0 mb-0">
                    <p className="text-[16px] font-semibold text-gray-700">
                    (2) Review Your PMR Immediately After It Is Imported – 
                    <span className="font-normal"> You can enable or disable link under the Order Status Pending Tab.</span>
                    </p>

                    <div className="flex items-center gap-6 pl-6">
                    <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                        <input type="radio" name="review" className="w-4 h-4" />
                        Enable Review Your Order
                    </label>

                    <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                        <input type="radio" name="review" className="w-4 h-4" />
                        Disable Review Your Order
                    </label>
                    </div>

                </div>

                <h2 className="text-[20px] text-center font-semibold text-gray-700 tracking-wide border-b pb-4 mb-0 uppercase">
                    PRODUCT RULE EFFECT
                </h2>

                <div className="flex items-center justify-between p-8">
                    <div>
                    <p className="text-[16px] font-semibold text-gray-800">
                        BRAND TO GENERIC OPTIMISATION WITH PRODUCT RULE
                    </p>

                    <p className="text-gray-600 text-sm mt-1 w-[85%]">
                        When enabled, Brand to Generic Optimisation will also take product rules into account when suggesting generic alternatives.
                    </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-16 h-[24px] bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>
                        <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full transition-all peer-checked:translate-x-10"></div>
                        <span className="absolute left-4 text-xs text-white font-semibold opacity-0 peer-checked:opacity-100">ON</span>
                        <span className="absolute right-4 text-xs text-gray-600 font-semibold peer-checked:opacity-0 opacity-100">OFF</span>
                    </label>
                </div>

                </div>
            </div>
        </div>

    </>
  );
};

export default OrderPanelSettings;
