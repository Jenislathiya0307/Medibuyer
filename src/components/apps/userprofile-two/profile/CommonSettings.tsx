import ProfileBanner from "../profile/ProfileBanner";

const CommonSettings = () => {

  return (
    <>
        <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
                <ProfileBanner />
            </div>
        </div>

        <div className="mx-6 mt-6">
            <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
                <div className="w-full space-y-10">

                    <h2 className="text-[20px] text-center font-semibold text-gray-700 tracking-wide border-b pb-4 mb-0 mb-0 uppercase">
                        AVAILABILITY TRACKER
                    </h2>

                    <div className="space-y-6 p-8 mb-0">

                        <div className="flex items-center justify-between border-b border-gray-200 pb-4 gap-5">
                            <div>
                                <p className="text-[16px] font-semibold text-gray-800 flex items-center gap-2 pb-1">
                                Daily Email Notifications at 8:30am
                                <span className="text-yellow-500 text-sm cursor-pointer">✏️</span>
                                </p>
                                <p className="text-gray-600 text-sm">
                                You will receive an email notification when an item comes back in stock at 8.30am.
                                Activate the availability tracker and add up to 3 email addresses, separated by commas,
                                to receive a copy of this email.
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

                        <div className="flex items-center justify-between border-b border-gray-200 pb-4 gap-5">
                            <div>
                                <p className="text-[16px] font-semibold text-gray-800 flex items-center gap-2 pb-1">
                                Daily Email Notifications at 2:30pm
                                <span className="text-yellow-500 text-sm cursor-pointer">✏️</span>
                                </p>
                                <p className="text-gray-600 text-sm">
                                You will receive an email notification when an item comes back in stock at 2.30pm.
                                Activate the availability tracker and add up to 3 email addresses, separated by commas,
                                to receive a copy of this email.
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

                        <div className="flex items-center justify-between pb-4 gap-5">
                            <div>
                                <p className="text-[16px] font-semibold text-gray-800 flex items-center gap-2 pb-1">
                                Automatically Order Items when they're back In Stock
                                </p>
                                <p className="text-gray-600 text-sm">
                                The system will check for stock availability every hour and will automatically order it
                                if they come back in stock. If the item is out of stock at the point of ordering, then
                                it will be added back to the Availability Tracker.
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

                    <h2 className="text-[20px] text-center font-semibold text-gray-700 tracking-wide border-b pb-4 mb-0 uppercase">
                        BULK ORDER
                    </h2>

                    <div className="flex items-center justify-between p-8 mb-0 gap-5">
                        <div>
                        <p className="text-[16px] font-semibold text-gray-800 flex items-center gap-2 pb-1">
                            BLOCK Bulk Order Lines if ordered from the PMR system
                        </p>
                        <p className="text-gray-600 text-sm">
                            This will block the items being ordered from the PMR system if they are listed in the Bulk Order Page.
                            The aim is to stop you from ordering 1 for 1 on bulk / fast moving lines.
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

                    <h2 className="text-[20px] text-center font-semibold text-gray-700 tracking-wide border-b pb-4 mb-0 uppercase">
                        FAILED ORDER
                    </h2>

                    <div className="flex items-center justify-between p-8 mb-0 gap-5">
                        <div>
                        <p className="text-[16px] font-semibold text-gray-800 flex items-center gap-2 pb-1">Daily Failed Order email</p>
                        <p className="text-gray-600 text-sm">
                            This will give you a summary of any orders that didn’t complete successfully.
                            You will need to contact the supplier to check the status of the order.
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

                    <h2 className="text-[20px] text-center font-semibold text-gray-700 tracking-wide border-b pb-4 mb-0 uppercase">
                        DRUG TARIFF CLAWBACK PRICE
                    </h2>

                    <div className="flex items-center justify-between p-8 mb-0 gap-5">
                        <div>
                        <p className="text-[16px] font-semibold text-gray-800 flex items-center gap-2 pb-1">Drug Tariff Clawback Price</p>
                        <p className="text-gray-600 text-sm">
                            This will conceal the Drug Tariff clawback price from the second listing on the order pad when turned off.
                            If you wish to view the clawback price, simply toggle the button to ON.
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

export default CommonSettings;
