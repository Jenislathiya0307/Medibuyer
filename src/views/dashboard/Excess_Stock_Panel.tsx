import ExcessStockPanel from 'src/components/dashboards/dashboard1/ExcessStockPanel';
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
      <ExcessStockPanel />
    </>
  );
};

export default Excess_Stock_Panel;
