import OrderHistory from 'src/components/dashboards/dashboard1/OrderHistory';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'OrderHistory',
  },
];

const Order_History = () => {
  return (
    <>
      <BreadcrumbComp title="Order History" items={BCrumb} />
      <OrderHistory />
    </>
  );
};

export default Order_History;
