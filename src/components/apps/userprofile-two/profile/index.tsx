import { UserDataProvider } from 'src/context/UserDataContext';
import ProfileBanner from './ProfileBanner';
import { Button, Label, TextInput } from 'flowbite-react';
// import Post from './Post';
// import AboutCard from './AboutCard';
// import Teams from './Teams';
// import CounterCard from './CounterCard';

const UserProfileApp = () => {
  return (
    <>
      <UserDataProvider>
        <ProfileBanner />
        <div className="mx-6 mt-6">
          {/* <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-4 col-span-12">
              <AboutCard />
              <div className='mt-6'>
                <Teams/>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
              <CounterCard/>
              <div className='mt-6'>
                <Post/>
              </div>
            </div>
          </div> */}

          <div className='bg-white border-gray-200 shadow-md p-6 rounded-[16px]'>
              <div className="bg-white border border-gray-200 shadow-md p-8 rounded-[16px]">
                <h2 className="text-[24px] font-semibold text-center mb-6">PHARMACY DETAILS</h2>

                {/* PHARMACY DETAILS FORM */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Pharmacy Name */}
                  <div>
                    <Label htmlFor="pharmacy_name" className="mb-1 block font-medium">
                      Pharmacy Name<span className="text-red-500">*</span>
                    </Label>
                    <TextInput id="pharmacy_name" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Account Number */}
                  <div>
                    <Label htmlFor="acc" className="mb-1 block font-medium">
                      Account Number<span className="text-red-500">*</span>
                    </Label>
                    <TextInput id="acc" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Address 1 */}
                  <div>
                    <Label htmlFor="addr1" className="mb-1 block font-medium">
                      Address<span className="text-red-500">*</span>
                    </Label>
                    <TextInput id="addr1" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Address 2 */}
                  <div>
                    <Label htmlFor="addr2" className="mb-1 block font-medium">Address 2</Label>
                    <TextInput id="addr2" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Area */}
                  <div>
                    <Label htmlFor="area" className="mb-1 block font-medium">Area</Label>
                    <TextInput id="area" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* City */}
                  <div>
                    <Label htmlFor="city" className="mb-1 block font-medium">City</Label>
                    <TextInput id="city" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Postcode */}
                  <div>
                    <Label htmlFor="postcode" className="mb-1 block font-medium">
                      Postcode<span className="text-red-500">*</span>
                    </Label>
                    <TextInput id="postcode" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Primary Email */}
                  <div>
                    <Label htmlFor="email" className="mb-1 block font-medium">
                      Primary Email<span className="text-red-500">*</span>
                    </Label>
                    <TextInput id="email" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Secondary Email */}
                  <div>
                    <Label htmlFor="semail" className="mb-1 block font-medium">Secondary Email</Label>
                    <TextInput id="semail" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Contact No */}
                  <div>
                    <Label htmlFor="contact" className="mb-1 block font-medium">Contact No.</Label>
                    <TextInput id="contact" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Fax Number */}
                  <div>
                    <Label htmlFor="fax" className="mb-1 block font-medium">Fax Number</Label>
                    <TextInput id="fax" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Members group */}
                  <div>
                    <Label htmlFor="mbg" className="mb-1 block font-medium">
                      Members of any buying group (if any)
                    </Label>
                    <TextInput id="mbg" type="text" sizing="md" className="w-full" />
                  </div>

                  {/* Responsible Person */}
                  <div>
                    <Label htmlFor="resp" className="mb-1 block font-medium">
                      Name of responsible person
                    </Label>
                    <TextInput id="resp" type="text" sizing="md" className="w-full" />
                  </div>
                </form>

                {/* SUPPLIER ACCOUNT DETAILS */}
                <h2 className="text-[20px] font-semibold text-center mt-10 mb-4">
                  SUPPLIER ACCOUNT DETAILS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* AAH */}
                  <div>
                    <Label className="mb-1 block font-medium">AAH</Label>
                    <TextInput className="w-full" />
                  </div>

                  {/* Alliance */}
                  <div>
                    <Label className="mb-1 block font-medium">Alliance</Label>
                    <TextInput className="w-full" />
                  </div>

                  {/* Bestway */}
                  <div>
                    <Label className="mb-1 block font-medium">Bestway</Label>
                    <TextInput className="w-full" />
                  </div>

                  {/* OTC */}
                  <div>
                    <Label className="mb-1 block font-medium">OTC</Label>
                    <TextInput className="w-full" />
                  </div>

                  {/* Phoenix */}
                  <div>
                    <Label className="mb-1 block font-medium">Phoenix</Label>
                    <TextInput className="w-full" />
                  </div>

                  {/* Sigma */}
                  <div>
                    <Label className="mb-1 block font-medium">Sigma</Label>
                    <TextInput className="w-full" />
                  </div>

                  {/* Trident */}
                  <div>
                    <Label className="mb-1 block font-medium">Trident</Label>
                    <TextInput className="w-full" />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-10">
                  <Button
                    color="primary"
                    size="lg"
                    className="w-full"
                  >
                    Submit
                  </Button>

                  <Button
                    color="primary"
                    size="lg"
                    className="w-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white rounded-full"
                  >
                    Cancel
                  </Button>
                </div>
              </div>

          </div>

        </div>
      </UserDataProvider>
    </>
  );
};

export default UserProfileApp;
