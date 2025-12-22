import OrderHistory from 'src/components/dashboards/dashboard1/ProductManagementTool';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Product Management Tool',
  },
];

const Product_Management_Tool = () => {
  return (
    <>
      <BreadcrumbComp title="Product Management Tool" items={BCrumb} />
      <OrderHistory />
    </>
  );
};

export default Product_Management_Tool;
