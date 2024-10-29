import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

type ServiceCardProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  delay: number;
  className?: string;
};

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="relative h-full group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cs-primary to-cs-secondary rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative p-8 bg-cs-background rounded-lg border border-cs-text-50 h-full flex flex-col">
        <div className="w-14 h-14 bg-cs-primary-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cs-primary-20 transition-colors">
          <Icon className="w-7 h-7 text-cs-accent" />
        </div>

        <h2 className="text-2xl font-bold text-cs-primary mb-4">{title}</h2>
        <p className="text-cs-text leading-relaxed flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export function Services() {
  const { info } = useLanguage();

  return (
    <section className="pb-20 px-6">
      <div className="max-w-5xl mx-auto">
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
            className="text-cs-primary font-medium bg-cs-primary-10 px-4 py-2 rounded-full inline-block mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-cs-primary mb-6">
            WHAT WE DO BEST
          </h2>
          <p className="text-lg text-cs-text-70 max-w-2xl mx-auto">
            We deliver comprehensive software solutions tailored to your
            business needs, helping you stay ahead in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-dense">
          {info.services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
