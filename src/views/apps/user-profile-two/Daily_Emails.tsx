import DailyEmails from "src/components/apps/userprofile-two/profile/DailyEmails";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "DailyEmails",
  },
];
const UserProfile = () => {
  return (
    <>
      <BreadcrumbComp title="Daily Emails" items={BCrumb} />
      <DailyEmails />
    </>
  );
};

export default UserProfile;
