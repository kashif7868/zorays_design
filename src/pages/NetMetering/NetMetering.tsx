import NetMeteringHero from "./components/NetMeteringHero";
import NetMeteringIntro from "./components/NetMeteringIntro";
import NetMeteringSystems from "./components/NetMeteringSystems";
import NetMeteringBenefits from "./components/NetMeteringBenefits";
import NetMeteringEconomics from "./components/NetMeteringEconomics";
import NetMeteringProcess from "./components/NetMeteringProcess";
import NetMeteringDocuments from "./components/NetMeteringDocuments";
import NetMeteringDiscos from "./components/NetMeteringDiscos";
import NetMeteringIssues from "./components/NetMeteringIssues";
import NetMeteringTechnical from "./components/NetMeteringTechnical";
import NetMeteringFaq from "./components/NetMeteringFaq";
import NetMeteringCta from "./components/NetMeteringCta";

const NetMetering = () => {
  return (
    <main className="net-metering-page">
      <NetMeteringHero />
      <NetMeteringIntro />
      <NetMeteringSystems />
      <NetMeteringBenefits />
      <NetMeteringEconomics />
      <NetMeteringProcess />
      <NetMeteringDocuments />
      <NetMeteringDiscos />
      <NetMeteringIssues />
      <NetMeteringTechnical />
      <NetMeteringFaq />
      <NetMeteringCta />
    </main>
  );
};

export default NetMetering;