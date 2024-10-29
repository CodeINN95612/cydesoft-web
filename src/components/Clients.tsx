import { motion } from "framer-motion";
export function Clients() {
  const clients = [
    { name: "TechCorp", logo: "/clients/CocaCola.png" },
    { name: "InnoSystems", logo: "/clients/CocaCola.png" },
    { name: "Global Solutions", logo: "/clients/CocaCola.png" },
    { name: "Future Industries", logo: "/clients/CocaCola.png" },
    { name: "Smart Services", logo: "/clients/CocaCola.png" },
    { name: "Peak Performance", logo: "/clients/CocaCola.png" },
  ];

  // Duplicate the clients array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative pt-1 max-w-5xl mx-auto overflow-hidden">
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
          Trusting
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-cs-primary mb-6">
          CLIENTS
        </h2>
      </motion.div>
      <motion.div
        animate={{
          x: ["10%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
        className="flex gap-8"
      >
        {duplicatedClients.map((client, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="flex flex-col items-center">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-colors duration-300"
              />
              <p className="text-cs-secondary-50 font-medium text-center">
                {client.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="hidden md:block pointer-events-none absolute left-0 top-0 w-[40%] h-full bg-gradient-to-r from-cs-background to-transparent" />
      <div className="hidden md:block pointer-events-none absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-cs-background to-transparent" />
    </section>
  );

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Trusted Clients
      </h2>

      <div className="relative">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-8"
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="w-48 p-6 bg-white rounded-lg">
                <div className="flex flex-col items-center">
                  <motion.img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-20 w-auto object-contain mb-4"
                    initial={{ filter: "grayscale(100%)" }}
                    whileHover={{
                      filter: "grayscale(0%)",
                      transition: { duration: 0.3 },
                    }}
                  />
                  <p className="text-gray-600 font-medium text-center">
                    {client.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
