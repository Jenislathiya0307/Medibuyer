import BulkOrderingPanel from 'src/components/dashboards/dashboard1/BulkOrderingPanel';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Bulk Ordering Panel',
  },
];

const Bulk_Ordering_Panel = () => {
  return (
    <>
      <BreadcrumbComp title="Bulk Ordering Panel" items={BCrumb} />
      <BulkOrderingPanel />
    </>
  );
};

export default Bulk_Ordering_Panel;
