import SupplierSpendSettings from "src/components/apps/userprofile-two/profile/SupplierSpendSettings";
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
const Supplier_Spend_Settings = () => {
  return (
    <>
      <BreadcrumbComp title="Order Panel Settings" items={BCrumb} />
      <SupplierSpendSettings />
    </>
  );
};

export default Supplier_Spend_Settings;
