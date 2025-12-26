import ProfileBanner from "../profile/ProfileBanner";
import { Label, TextInput } from 'flowbite-react';

const ChangePassword = () => {

  return (
    <>
        <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
                <ProfileBanner />
            </div>
        </div>

        <div className="mx-6 mt-6">
            <div className="bg-white border border-gray-200 shadow-md p-8 rounded-[16px] w-full">

                <h2 className="text-[20px] font-semibold text-center tracking-wide mb-8">
                    CHANGE PASSWORD
                </h2>

                <form>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div>
                        <Label htmlFor="pharmacy_name" className="mb-1 block font-medium">
                            Pharmacy Name <span className="text-red-500">*</span>
                        </Label>
                        <TextInput
                            id="pharmacy_name"
                            type="text"
                            readOnly
                            className="w-full"
                        />
                        </div>

                        <div>
                        <Label htmlFor="old_password" className="mb-1 block font-medium">
                            Old Password <span className="text-red-500">*</span>
                        </Label>
                        <TextInput id="old_password" type="password" className="w-full" />
                        </div>

                        <div>
                        <Label htmlFor="new_password" className="mb-1 block font-medium">
                            New Password <span className="text-red-500">*</span>
                        </Label>
                        <TextInput id="new_password" type="password" className="w-full" />
                        </div>

                        <div>
                        <Label htmlFor="confirm_password" className="mb-1 block font-medium">
                            Confirm Password <span className="text-red-500">*</span>
                        </Label>
                        <TextInput id="confirm_password" type="password" className="w-full" />
                        </div>

                    </div>

                    <div className="flex justify-center mt-10">
                        <button type="button" className="relative flex items-center justify-center text-center font-medium focus:outline-none group p-0.5 focus:ring-0 cursor-pointer rounded-full h-12 px-5 text-base bg-primary hover:bg-primaryemphasis text-white w-full">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </>
  );
};

export default ChangePassword;
