import SmartUploadPanel from "src/components/dashboards/dashboard1/SmartUploadPanel";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import { Toaster } from "react-hot-toast";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Smart Upload Panel',
  },
];

const Smart_Upload_Panel = () => {
  return (
    <>
      <BreadcrumbComp title="Smart Upload Panel" items={BCrumb} />
      <SmartUploadPanel />
      
      {/* ✅ Toaster added here */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
};

export default Smart_Upload_Panel;
