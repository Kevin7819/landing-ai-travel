import Header from '../components/ui/Header';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Benefits from '../components/sections/Benefits';
import Roadmap from '../components/Roadmap';
import Technology from '../components/Technology';
import Subscription from '../components/Subscription';
import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Roadmap />
      <Technology />
      <Subscription />
      <Footer />
    </div>
  );
}