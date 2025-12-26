import { AiOutlineQuestionCircle } from "react-icons/ai";
import ProfileBanner from "../profile/ProfileBanner";

const DailyEmails = () => {

  return (
    <>
        <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
                <ProfileBanner />
            </div>
        </div>

        <div className="mx-6 mt-6">
            <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
                <div className="bg-white border border-gray-200 shadow-md p-8 rounded-[16px]">
                    <h2 className="text-[22px] font-semibold text-center mb-8">
                        DAILY EMAIL SETTINGS
                    </h2>
                    <form className="space-y-8">

                        {/* Row 1 – Daily Orders Email */}
                        <div className="flex items-center justify-between gap-6">
                            <label className="flex items-center text-[15px] font-medium gap-6">
                                Daily Orders Email
                                <AiOutlineQuestionCircle className="ml-1 text-gray-400 text-[16px]" />
                            </label>
                            <div className="w-[70%]">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-16 h-[24px] bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>
                                    <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full transition-all peer-checked:translate-x-10"></div>
                                    <span className="absolute left-4 text-xs text-white font-semibold opacity-0 peer-checked:opacity-100">ON</span>
                                    <span className="absolute right-4 text-xs text-gray-600 font-semibold peer-checked:opacity-0 opacity-100">OFF</span>
                                </label>
                            </div>
                        </div>

                        {/* Sort By */}
                        <div className="flex items-center justify-between gap-6">
                        <label className="text-[15px] font-medium">Sort By</label>

                        <select className="w-[70%] border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-0">
                            <option>A – Z Product Description</option>
                            <option>Z – A Product Description</option>
                            <option>Highest Price</option>
                            <option>Lowest Price</option>
                        </select>
                        </div>

                        {/* Data Type */}
                        <div className="flex items-center justify-between gap-6">
                        <label className="text-[15px] font-medium">Data Type</label>

                        <select className="w-[70%] border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-0">
                            <option>All</option>
                            <option>Only Orders</option>
                            <option>Only Credits</option>
                        </select>
                        </div>

                        {/* CC Email */}
                        <div className="flex items-center justify-between gap-6">
                        <label className="flex items-center text-[15px] font-medium">
                            CC Email
                            <AiOutlineQuestionCircle className="ml-1 text-gray-400 text-[16px]" />
                        </label>

                        <input
                            type="text"
                            placeholder="Enter comma separated emails"
                            className="w-[70%] border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-0"
                        />
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="text-center pt-4">
                            <button type="button" className="relative flex items-center justify-center text-center font-medium focus:outline-none group p-0.5 focus:ring-0 cursor-pointer rounded-full h-12 px-5 text-base bg-primary hover:bg-primaryemphasis text-white w-full">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default DailyEmails;
