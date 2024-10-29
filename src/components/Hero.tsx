import { motion } from "framer-motion";
import { Code, Cpu, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useEffect, useState } from "react";

export function Hero() {
  const { info } = useLanguage();
  const [hero, setHero] = useState(info.hero);

  useEffect(() => {
    setHero(info.hero);
  }, [info]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const features = [
    {
      icon: <Code className="w-6 h-6 text-cs-primary" />,
      title: hero.customDevelopment.title,
      description: hero.customDevelopment.description,
      bgColor: "bg-cs-primary/10",
    },
    {
      icon: <Globe className="w-6 h-6 text-cs-secondary" />,
      title: hero.cloudSolutions.title,
      description: hero.cloudSolutions.description,
      bgColor: "bg-cs-secondary/10",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cs-accent" />,
      title: hero.digitalTransformation.title,
      description: hero.digitalTransformation.description,
      bgColor: "bg-cs-accent/10",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-10 md:pt-16 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center py-2 px-4 bg-cs-primary-10 rounded-full mb-8 gap-2"
          >
            <Sparkles className="w-5 h-5 text-cs-primary" />
            <span className="text-cs-primary font-medium">{hero.badge}</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-cs-text mb-8 leading-tight"
          >
            {hero.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cs-primary to-cs-accent">
              {" "}
              {hero.digitalReality}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-cs-text-80 mb-12 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 bg-gradient-to-r from-cs-primary to-cs-accent text-white font-semibold rounded-lg"
            >
              {hero.getStarted}
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 bg-cs-secondary text-white font-semibold rounded-lg border border-cs-secondary-20 hover:bg-cs-secondary-90"
            >
              {hero.viewProjects}
            </motion.button>
          </motion.div>

          {/* Feature cards */}
          <motion.footer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 mt-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 bg-cs-primary-10 backdrop-blur-sm rounded-xl border border-cs-primary-10 shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                >
                  {feature.icon}
                </motion.div>
                <h1 className="text-lg font-semibold text-cs-text mb-2">
                  {feature.title}
                </h1>
                <p className="text-cs-text-70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}
