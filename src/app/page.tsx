import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ResourcesSection from '@/components/sections/resources-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
