import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeatureStrip from "../Components/FeatureStrip";
import HowItWorks from "../Components/HowItWorks";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureStrip />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;