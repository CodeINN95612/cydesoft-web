"use client";

import { motion } from "framer-motion";
import { ExternalLink, AtSign } from "lucide-react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const contactChannels = [
    {
      icon: <AtSign className="w-6 h-6" />,
      title: "Email",
      content: "contact@example.com",
      link: "mailto:contact@example.com",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Chat with us",
      link: "https://wa.me/yournumber",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      title: "Instagram",
      content: "@cidesoft",
      link: "https://instagram.com/cidesoft",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <FaPhoneAlt className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FaDiscord className="w-6 h-6" />,
      title: "Discord",
      content: "Join our community",
      link: "https://discord.gg/Cidesoft",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      content: "CideSoft",
      link: "https://github.com/cidesoft",
      color: "bg-gray-200 text-gray-900",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="relative pt-20 max-w-5xl mx-auto mb-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cs-primary font-medium bg-cs-primary/10 px-4 py-2 rounded-full inline-block mb-4"
        >
          Get in Touch
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-cs-primary mb-6">
          CONTACT
        </h2>
        <p className="text-lg text-cs-foreground/70 max-w-2xl mx-auto">
          {
            "Connect with us through any of these platforms. We're here to help!"
          }
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 p-4">
        {contactChannels.map((channel, index) => (
          <motion.a
            key={index}
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div
              className={`p-6 rounded-lg border border-cs-accent shadow-sm 
                             hover:shadow-md transition-shadow duration-300 
                             flex items-center space-x-4`}
            >
              <motion.div
                className={`${channel.color} p-3 rounded-full`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {channel.icon}
              </motion.div>
              <div className="flex-grow">
                <h3 className="text-xl text-cs-primary font-semibold mb-1 flex items-center gap-2">
                  {channel.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-cs-foreground">{channel.content}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        className="text-center text-cs-foreground-70 mt-12"
        variants={itemVariants}
      >
        • Available worldwide •
      </motion.p>
    </motion.section>
  );
};

export default ContactUs;
