import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Cta from "@/components/Cta";
import Explore from "@/components/Explore";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <div className="container mx-auto px-4">
          <Hero />
          <Brands />
        </div>
        <Explore />
        <div className="container mx-auto px-4">
          <Services />
        </div>
        <Cta />
        <div className="container mx-auto px-4">
          <Feedback />
          <Blog />
        </div>
      </main>
      <Footer />
    </div>
  );
}
