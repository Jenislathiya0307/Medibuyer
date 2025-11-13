import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const FeedbackForm = () => {
  
  return (
    <>
      <div className="grid">
        <div className='text-center bg-white border-gray-200 shadow-md p-6 rounded-[16px]'>
          <h2 className='text-[24px] mb-3'>Feedback Form</h2>
          <p>This Form is intended for a feature request on Drug Comparison. Please use the Contact Us button for all other day to day queries e.g. Products, Mapping Errors etc.</p>
          <div className='text-left border-gray-200 rounded-[16px] p-6'>
            <form className="mt-6">

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="name">Full Name<span className="text-red-500">*</span></Label>
                </div>
                <TextInput id="name" type="text" sizing="md" className="form-control" />
              </div>

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="pharmacy_name">Pharmacy Name<span className="text-red-500">*</span></Label>
                </div>
                <TextInput id="pharmacy_name" type="text" sizing="md" className="form-control" />
              </div>
      
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="emadd">Email Address<span className="text-red-500">*</span></Label>
                </div>
                <TextInput id="emadd" type="text" sizing="md" className="form-control" />
              </div>

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="postcode">Postcode:<span className="text-red-500">*</span></Label>
                </div>
                <TextInput id="postcode" type="text" sizing="md" className="form-control" />
              </div>
      
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="comment">Comments & Suggestions<span className="text-red-500">*</span></Label>
                </div>
                <Textarea
                  rows={5}
                  id="comment"
                  className="w-full form-control-textarea"
                />
              </div>
      
              <div className='flex gap-4'>
                <Button color="primary" size="lg" className="col-6 w-full">
                  Submit
                </Button>
                <Button color="primary" size="lg" className="col-6 w-full relative flex items-center justify-center text-center font-medium focus:outline-none group p-0.5 focus:ring-0 cursor-pointer rounded-full px-5 text-sm bg-lighterror dark:bg-darkerror text-error hover:bg-error hover:text-white">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
