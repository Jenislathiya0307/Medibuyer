import ClientReviews from 'src/components/front-pages/homepage/ClientReviews';
import FeatureTabs from 'src/components/front-pages/homepage/FeatureTabs';
import { Highlights } from 'src/components/front-pages/homepage/Highlights';
import MainBanner from 'src/components/front-pages/homepage/MainBanner';
import OurClients from 'src/components/front-pages/homepage/OurClients';
import { Packages } from 'src/components/front-pages/homepage/Packages';
import { PaymentOptions } from 'src/components/front-pages/homepage/Payments';
import PurchaseTemp from 'src/components/front-pages/homepage/PurchaseTemp';
import FeatureOverview from 'src/components/front-pages/homepage/FeatureOverview';
import AboutUs from 'src/components/front-pages/homepage/AboutUs';

const Homepage = () => {
  return (
    <>
      <MainBanner />
      <AboutUs />
      <OurClients />
      <FeatureTabs />
      {/* <OurTeam /> */}
      {/* <ContactBar /> */}
      <FeatureOverview />
      <ClientReviews />
      {/* <Companies /> */}
      <Highlights />
      <Packages />
      <PaymentOptions />
      {/* <FAQ /> */}
      <PurchaseTemp />
    </>
  );
};

export default Homepage;
