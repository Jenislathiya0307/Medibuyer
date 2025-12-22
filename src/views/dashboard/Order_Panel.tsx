import OrderHistory from 'src/components/dashboards/dashboard1/OrderPanel';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Order Panel',
  },
];

const Order_Panel = () => {
  return (
    <>
      <BreadcrumbComp title="Order Panel" items={BCrumb} />
      <OrderHistory />
    </>
  );
};

export default Order_Panel;
