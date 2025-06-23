
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 80 },
    { name: "Java", level: 60 },
    { name: "MySQL", level: 70 },
  ];

  const cyberSecuritySkills = [
    { name: "Network Security", level: 75 },
    { name: "OS Security", level: 70 },
    { name: "Penetration Testing", level: 65 },
    { name: "DBMS", level: 75 },
  ];

  const softSkills = [
    "Time Management",
    "Leadership",
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Critical Thinking",
  ];

  const tools = [
    "Git",
    "Microsoft Office Suite",
    "Wordpad",
    "VS Code",
    "Postman",
    "MongoDB Compass",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-blue-400">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-blue-400">Cyber Security Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cyberSecuritySkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-blue-400">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-blue-500/10 rounded-lg p-3 text-center border border-blue-500/20"
                    >
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-blue-400">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, index) => (
                    <div
                      key={tool}
                      className="bg-purple-500/10 rounded-lg p-3 text-center border border-purple-500/20"
                    >
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
