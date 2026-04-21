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
      <main className="container mx-auto">
        <Hero />
        <Brands />
        {/* <Explore /> */}
        {/* <Services /> */}
        {/* <Cta /> */}
        {/* <Feedback /> */}
        {/* <Blog /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
