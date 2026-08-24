import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Pillars from '@/components/sections/Pillars';
import FounderSection from '@/components/sections/FounderSection';
import EmissionsExplorer from '@/components/sections/EmissionsExplorer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <FounderSection />
      <EmissionsExplorer />
    </>
  );
}
