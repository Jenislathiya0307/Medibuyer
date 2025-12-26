import OrderPanelSettings from "src/components/apps/userprofile-two/profile/OrderPanelSettings";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Order Panel Settings",
  },
];
const Order_Panel_Settings = () => {
  return (
    <>
      <BreadcrumbComp title="Order Panel Settings" items={BCrumb} />
      <OrderPanelSettings />
    </>
  );
};

export default Order_Panel_Settings;
