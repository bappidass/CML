
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import ImpactStats from '@/components/ImpactStats';
import OurWorkSection from '@/components/OurWorkSection';
import StoriesSection from '@/components/StoriesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ImpactStats />
      <OurWorkSection />
      <StoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
