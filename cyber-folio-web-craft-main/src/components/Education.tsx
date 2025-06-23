
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Cyber Security",
      institution: "Malla Reddy University",
      location: "Hyderabad, India",
      duration: "2021 - 2025",
      grade: "CGPA: 8.0/10.0",
      status: "Current",
      description: "Specializing in Cyber Security with focus on network security, penetration testing, and secure application development.",
    },
    {
      degree: "Intermediate (XII)",
      institution: "S.S+2 High School",
      location: "Jharkhand, India",
      duration: "2021 - 2023",
      grade: "79%",
      board: "Jharkhand Academic Council (JAC)",
      description: "Completed higher secondary education with strong performance in science subjects.",
    },
    {
      degree: "Secondary School Certificate (X)",
      institution: "Kisan High School",
      location: "Jharkhand, India",
      duration: "2021",
      grade: "74%",
      board: "Jharkhand Academic Council (JAC)",
      description: "Completed secondary education with focus on mathematics and science.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-blue-400 font-semibold">{edu.institution}</p>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-blue-500 text-blue-400 mb-2">
                        {edu.duration}
                      </Badge>
                      <p className="text-green-400 font-semibold">{edu.grade}</p>
                      {edu.status && (
                        <Badge className="bg-green-500/20 text-green-400 mt-1">
                          {edu.status}
                        </Badge>
                      )}
                      {edu.board && (
                        <p className="text-gray-400 text-sm mt-1">{edu.board}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
