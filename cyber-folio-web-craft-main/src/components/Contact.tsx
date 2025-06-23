
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "harshkragrawal2006@gmail.com",
      href: "mailto:harshkragrawal2006@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9279912147",
      href: "tel:9279912147",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "HarshKumar5822",
      href: "https://github.com/HarshKumar5822",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "harsh-kumar-936b47293",
      href: "https://www.linkedin.com/in/harsh-kumar-936b47293",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat 
            about technology and cybersecurity. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-white text-xl mb-4">Contact Information</CardTitle>
                <p className="text-gray-300">
                  Based in Hyderabad, India, I'm available for freelance projects, 
                  internships, and full-time opportunities.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white group-hover:text-blue-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
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
                <CardTitle className="text-white text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700/50 border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-blue-500/20"
        >
          <p className="text-gray-400">
            © 2024 Harsh Kumar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
