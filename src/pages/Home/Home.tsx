import HeroSection from "./HeroSection";
import ServicesOverview from "./Servicesoverview";
import ClientTestimonials from "./ClientTestimonials";
import BlogSection from "./BlogSection";
import MultiStepForm from "./MultiStepForm";
import ShopSection from "./ShopSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <ShopSection />
      <MultiStepForm />
      <ClientTestimonials />
      <BlogSection />
    </main>
  );
};

export default Home;