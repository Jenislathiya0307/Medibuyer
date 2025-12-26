import ChangePassword from "src/components/apps/userprofile-two/profile/ChangePassword";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Change Password",
  },
];
const Change_Password = () => {
  return (
    <>
      <BreadcrumbComp title="Change Password" items={BCrumb} />
      <ChangePassword />
    </>
  );
};

export default Change_Password;
