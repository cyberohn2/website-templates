import Contact from "@/components/contact";
import Feature from "@/components/Feature";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Services />
      <Feature />
      <Numbers /> 
      <Team />
      <Feedbacks />
      <Contact />
    </div>
  );
}