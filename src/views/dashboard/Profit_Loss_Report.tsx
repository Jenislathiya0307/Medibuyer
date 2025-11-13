import ProfitLossReport from "src/components/dashboards/dashboard1/ProfitLossReport";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Profit & Loss Summary Report',
  },
];

const Profit_Loss_Report = () => {
  return (
    <>
      <BreadcrumbComp title="Profit & Loss Summary Report" items={BCrumb} />
      <ProfitLossReport />
    </>
  );
};

export default Profit_Loss_Report;
