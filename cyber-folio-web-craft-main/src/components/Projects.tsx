
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "FinGenius",
      description: "A comprehensive financial tracking application that helps users manage their budget using the 50/30/20 rule (50% for needs, 30% for wants, 20% for savings). Features goal setting, expense tracking, and financial insights.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "MERN Stack",
      highlights: ["Budget Management", "Goal Setting", "Financial Analytics", "50/30/20 Rule Implementation"],
    },
    {
      title: "EduMatch",
      description: "A smart college recommendation system that helps students find the best colleges based on their EAMCET rank. Provides detailed college information, cut-off trends, and admission guidance.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "MERN Stack",
      highlights: ["College Recommendation", "Rank Analysis", "Cut-off Predictions", "Admission Guidance"],
    },
    {
      title: "HostelMate",
      description: "A hostel finding platform that allows students to search for hostels based on location, budget, room type, and facilities. Features detailed hostel profiles and booking management.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "MERN Stack",
      highlights: ["Location-based Search", "Budget Filtering", "Facility Comparison", "Booking System"],
    },
    {
      title: "Zosh Food",
      description: "A complete online food delivery application with integrated payment gateway. Features restaurant management, order tracking, and secure payment processing.",
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
      category: "Full Stack Java",
      highlights: ["Payment Gateway", "Order Management", "Restaurant Portal", "Real-time Tracking"],
    },
    {
      title: "MediReminder",
      description: "A medicine reminder application that helps users manage their medication schedule. Features customizable reminders, dosage tracking, and notification systems.",
      technologies: ["Python", "Backend Development"],
      category: "Python Application",
      highlights: ["Medication Scheduling", "Custom Reminders", "Dosage Tracking", "Notification System"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills in full-stack development, 
            cybersecurity, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className="border-purple-500 text-purple-400 whitespace-nowrap"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                    >
                      <a 
                        href="https://github.com/HarshKumar5822" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
