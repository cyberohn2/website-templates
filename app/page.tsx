import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/new-hero"
import Features from "@/components/features";
import MarqueeSection from "@/components/marquee-section";
import Categories from "@/components/categories";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Header />
      <div className="container mx-auto px-4 md:px-8">
        <Hero />
        <Features />
        <MarqueeSection />
        <About />
        <Categories />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
