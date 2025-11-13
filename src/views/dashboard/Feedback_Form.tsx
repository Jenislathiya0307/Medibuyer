import FeedbackForm from 'src/components/dashboards/dashboard1/FeedbackForm';
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'FeedbackForm',
  },
];

const Feedback_Form = () => {
  return (
    <>
      <BreadcrumbComp title="Feedback Form" items={BCrumb} />
      <FeedbackForm />
    </>
  );
};

export default Feedback_Form;
