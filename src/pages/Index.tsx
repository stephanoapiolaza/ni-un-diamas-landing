import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CauseSection from "@/components/CauseSection";
import ActionSection from "@/components/ActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="home">
        <HeroBanner />
        <CauseSection />
        <ActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
