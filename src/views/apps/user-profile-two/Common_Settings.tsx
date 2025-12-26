import CommonSettingsInner from "src/components/apps/userprofile-two/profile/CommonSettings";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Common Settings",
  },
];
const CommonSettings = () => {
  return (
    <>
      <BreadcrumbComp title="Common Settings" items={BCrumb} />
      <CommonSettingsInner />
    </>
  );
};

export default CommonSettings;
