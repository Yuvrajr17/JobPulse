import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeatureStrip from "../Components/FeatureStrip";
import HowItWorks from "../Components/HowItWorks";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

function Dashboard() {
  return (
    <div className="w-full max-w-full min-w-0 overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-full min-w-0 overflow-x-hidden">
        <Hero />
        <FeatureStrip />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;