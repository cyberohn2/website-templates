import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 md:px-8">
        <Hero />
        <Services />
        <About />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
