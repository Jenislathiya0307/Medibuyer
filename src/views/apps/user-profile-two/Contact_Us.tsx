import ContactUs from "src/components/apps/userprofile-two/profile/ContactUs";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Contact Us",
  },
];
const Contact_Us = () => {
  return (
    <>
      <BreadcrumbComp title="Contact Us" items={BCrumb} />
      <ContactUs />
    </>
  );
};

export default Contact_Us;
