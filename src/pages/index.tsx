import Header from '../components/ui/Header';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Benefits from '../components/sections/Benefits';
import Roadmap from '../components/sections/Roadmap';
import Subscription from '../components/sections/Subscription';
import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Roadmap />
      <Subscription />
      <Footer />
    </div>
  );
}