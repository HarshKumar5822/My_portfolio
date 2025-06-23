import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <img 
              src="/lovable-uploads/d42bfd05-3fe0-45e6-87d0-2fcb62bc8e3e.png" 
              alt="Harsh Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hello, I'm <span className="text-blue-400">Harsh Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          Cyber Security Student & MERN Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          3rd Year Student specializing in Cyber Security with a passion for Full Stack Web Development. 
          Building secure, scalable applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3"
          >
            <a href="#projects">View My Work</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/HarshKumar5822"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-kumar-936b47293"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:harshkragrawal2006@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:9279912147"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Phone size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
