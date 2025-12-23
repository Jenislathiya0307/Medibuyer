import PackOptimisationPanel from 'src/components/dashboards/dashboard1/PackOptimisationPanel';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Pack Optimisation Panel',
  },
];

const Pack_Optimisation_Panel = () => {
  return (
    <>
      <BreadcrumbComp title="Pack Optimisation Panel" items={BCrumb} />
      <PackOptimisationPanel />
    </>
  );
};

export default Pack_Optimisation_Panel;
