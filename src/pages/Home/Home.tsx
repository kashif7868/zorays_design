import HeroSection from "./HeroSection";
import ServicesOverview from "./Servicesoverview";
import ZoraysTrustPromise from "./ZoraysTrustPromise";
import ClientTestimonials from "./ClientTestimonials";
import BlogSection from "./BlogSection";
import MultiStepForm from "./MultiStepForm";
import ShopSection from "./ShopSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <ZoraysTrustPromise />
      <ShopSection />
      <MultiStepForm />
      <BlogSection />
      <ClientTestimonials />
    </main>
  );
};

export default Home;