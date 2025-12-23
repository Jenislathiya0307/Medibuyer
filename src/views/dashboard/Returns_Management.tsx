import ReturnsManagement from 'src/components/dashboards/dashboard1/ReturnsManagement';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Returns Management',
  },
];

const Returns_Management = () => {
  return (
    <>
      <BreadcrumbComp title="Returns Management" items={BCrumb} />
      <ReturnsManagement />
    </>
  );
};

export default Returns_Management;
