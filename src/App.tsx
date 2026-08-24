import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/Home';
import PlanetaryConsciousness from '@/pages/PlanetaryConsciousness';
import SymbioticDesign from '@/pages/SymbioticDesign';
import EquitableEarthenomics from '@/pages/EquitableEarthenomics';
import Founder from '@/pages/Founder';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#04140e] flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planetary-consciousness" element={<PlanetaryConsciousness />} />
            <Route path="/symbiotic-design" element={<SymbioticDesign />} />
            <Route path="/equitable-earthenomics" element={<EquitableEarthenomics />} />
            <Route path="/founder" element={<Founder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
