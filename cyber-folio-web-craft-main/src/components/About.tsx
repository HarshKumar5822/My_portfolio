
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 mb-4">
                  I'm a passionate 3rd-year Cyber Security student at Malla Reddy University, 
                  Hyderabad, with a current CGPA of 8.0. Originally from Jharkhand, I've embraced 
                  the tech culture of Hyderabad while pursuing my dreams in cybersecurity and web development.
                </p>
                <p className="text-gray-300 mb-4">
                  My expertise lies in the MERN stack, where I combine my knowledge of security 
                  principles with modern web development practices to build robust, secure applications. 
                  I'm particularly interested in creating solutions that not only function well but 
                  also maintain the highest security standards.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, I'm exploring new technologies, learning about penetration 
                  testing, or working on projects that solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Current Status</h4>
                <p className="text-gray-300">3rd Year Cyber Security Student</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Location</h4>
                <p className="text-gray-300">Hyderabad, India (Originally from Jharkhand)</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Specialization</h4>
                <p className="text-gray-300">Cyber Security & MERN Stack Development</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">CGPA</h4>
                <p className="text-gray-300">8.0 / 10.0</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
