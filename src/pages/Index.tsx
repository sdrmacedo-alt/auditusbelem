import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CareStructure from '@/components/CareStructure';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <CareStructure />
      <Brands />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
