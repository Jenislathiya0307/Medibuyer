import OrderHistory from 'src/components/dashboards/dashboard1/BulkOrderingPanel';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Excess Stock Panel',
  },
];

const Excess_Stock_Panel = () => {
  return (
    <>
      <BreadcrumbComp title="Excess Stock Panel" items={BCrumb} />
      <OrderHistory />
    </>
  );
};

export default Excess_Stock_Panel;
