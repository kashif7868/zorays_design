import SolarAgricultureOverview from "./components/SolarAgricultureOverview";
import SolarAgricultureVideo from "./components/SolarAgricultureVideo";
import SolarAgricultureArticles from "./components/SolarAgricultureArticles";

const SolarAgriculture = () => {
  return (
    <main className="solar-agriculture-page">
      <SolarAgricultureOverview />
      <SolarAgricultureVideo />
      <SolarAgricultureArticles />
    </main>
  );
};

export default SolarAgriculture;