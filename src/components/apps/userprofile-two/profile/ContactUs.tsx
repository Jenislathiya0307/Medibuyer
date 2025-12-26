import ProfileBanner from "../profile/ProfileBanner";
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";
import CardBox from "../../../shared/CardBox";

const ContactUs = () => {

  return (
    <>
        <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
                <ProfileBanner />
            </div>
        </div>

        <div className="mx-6 mt-6">
            <div className="bg-white rounded-[16px] w-full">
                <div className="grid grid-cols-12 lg:gap-6 gap-6">
                    <div className="col-span-12">
                        <CardBox>
                        <div className="grid grid-cols-12 lg:gap-6 gap-6">
                            {/* Pharmacy Name */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="pharmacyName">Pharmacy Name *</Label>
                            </div>
                            <TextInput
                                id="pharmacyName"
                                type="text"
                                className="form-control"
                            />
                            </div>

                            {/* A/C Number */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="acNumber">A/C Number *</Label>
                            </div>
                            <TextInput
                                id="acNumber"
                                type="text"
                                className="form-control"
                            />
                            </div>

                            {/* Email */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="email">Email *</Label>
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                className="form-control"
                            />
                            </div>

                            {/* Address */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="address">Address *</Label>
                            </div>
                            <TextInput
                                id="address"
                                type="text"
                                className="form-control"
                            />
                            </div>

                            {/* Tel */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="tel">Tel.</Label>
                            </div>
                            <TextInput
                                id="tel"
                                type="text"
                                placeholder="01720473087"
                                className="form-control"
                            />
                            </div>

                            {/* Full Name */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="fullName">Full Name *</Label>
                            </div>
                            <TextInput
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                required
                                className="form-control"
                            />
                            </div>

                            {/* Subject */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="subject">Subject</Label>
                            </div>
                            <TextInput
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                className="form-control"
                            />
                            </div>

                            {/* Supplier Related Query */}
                            <div className="lg:col-span-6 col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="supplierQuery">Supplier Related Query (Optional)</Label>
                            </div>
                            <Select id="supplierQuery" className="select-md">
                                <option>None</option>
                                <option>Stock</option>
                                <option>Delivery</option>
                                <option>Account</option>
                            </Select>
                            </div>

                            {/* Message */}
                            <div className="col-span-12">
                            <div className="mb-2 block">
                                <Label htmlFor="message">Message *</Label>
                            </div>
                            <Textarea
                                id="message"
                                placeholder="Write your message here..."
                                required
                                rows={4}
                                className="form-control-textarera rounded-md"
                            />
                            </div>

                            {/* Buttons */}
                            <div className="col-span-12 flex justify-center gap-4">
                                <Button color="primary" className="w-full">
                                    SUBMIT
                                </Button>
                            </div>
                        </div>
                        </CardBox>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ContactUs;
