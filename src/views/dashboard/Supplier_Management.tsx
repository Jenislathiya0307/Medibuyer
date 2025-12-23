import SupplierManagement from 'src/components/dashboards/dashboard1/SupplierManagement';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Supplier Management',
  },
];

const Supplier_Management = () => {
  return (
    <>
      <BreadcrumbComp title="Supplier Management" items={BCrumb} />
      <SupplierManagement />
    </>
  );
};

export default Supplier_Management;
