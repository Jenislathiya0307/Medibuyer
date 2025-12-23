import AvailabilityTrackerPanel from 'src/components/dashboards/dashboard1/AvailabilityTrackerPanel';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Availability Tracker Panel',
  },
];

const Availability_Tracker_Panel = () => {
  return (
    <>
      <BreadcrumbComp title="Availability Tracker Panel" items={BCrumb} />
      <AvailabilityTrackerPanel />
    </>
  );
};

export default Availability_Tracker_Panel;
