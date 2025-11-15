import OutOfStockPanel from 'src/components/dashboards/dashboard1/OutOfStockPanel';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'OutOfStockPanel',
  },
];

const OutOf_Stock_Panel = () => {
  return (
    <>
      <BreadcrumbComp title="Out Of Stock Panel" items={BCrumb} />
      <OutOfStockPanel />
    </>
  );
};

export default OutOf_Stock_Panel;
