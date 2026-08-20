import SolarFinancingOverview from "./components/SolarFinancingOverview";
import SolarFinancingForm from "./components/SolarFinancingForm";
import SolarFinancingDetails from "./components/SolarFinancingDetails";

const SolarFinancing = () => {
  return (
    <main className="solar-financing-page">
      <SolarFinancingOverview />
      <SolarFinancingForm />
      <SolarFinancingDetails />
    </main>
  );
};

export default SolarFinancing;