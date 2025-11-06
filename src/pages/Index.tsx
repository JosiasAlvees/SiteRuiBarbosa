import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import EstruturaSection from "@/components/EstruturaSection";
import CursosSection from "@/components/CursosSection";
import VidaEscolarSection from "@/components/VidaEscolarSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DiferenciaisSection />
      <EstruturaSection />
      <CursosSection />
      <VidaEscolarSection />
      <ContatoSection />
      <Footer />
    </div>
  );
};

export default Index;
