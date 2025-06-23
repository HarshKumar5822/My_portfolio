
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
