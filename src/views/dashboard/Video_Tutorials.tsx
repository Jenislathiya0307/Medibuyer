import VideoTutorials from "src/components/dashboards/dashboard1/VideoTutorials";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'VideoTutorials',
  },
];

const Video_Tutorials = () => {
  return (
    <>
      <BreadcrumbComp title="Video Tutorials" items={BCrumb} />
      <VideoTutorials />
    </>
  );
};

export default Video_Tutorials;
