
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "Complete web application development using the MERN stack. From frontend design to backend architecture, database design, and deployment.",
      features: [
        "React.js Frontend Development",
        "Node.js Backend Development",
        "MongoDB Database Design",
        "RESTful API Development",
        "Responsive Web Design",
        "User Authentication & Authorization",
      ],
      icon: "🌐",
    },
    {
      title: "Cyber Security Consulting",
      description: "Security assessment and consulting services to help protect your applications and systems from potential threats.",
      features: [
        "Security Code Review",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Network Security Analysis",
        "Security Best Practices",
        "Secure Development Guidance",
      ],
      icon: "🔒",
    },
    {
      title: "Python Development",
      description: "Custom Python applications and automation solutions for various business needs and personal projects.",
      features: [
        "Desktop Application Development",
        "Automation Scripts",
        "Data Processing Tools",
        "API Integration",
        "Database Management",
        "Custom Solutions",
      ],
      icon: "🐍",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I offer a range of development and consulting services to help bring your ideas to life 
            with a focus on security and modern best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
