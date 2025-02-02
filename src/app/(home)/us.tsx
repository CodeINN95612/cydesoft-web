"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "Alice", image: "/person.jpg" },
  { name: "Bob", image: "/person.jpg" },
  { name: "Charlie", image: "/person.jpg" },
];

export function Us() {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cs-primary font-medium bg-cs-primary/10 px-4 py-2 rounded-full inline-block mb-4"
          >
            Meet Our Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-cs-primary mb-6">
            THIS IS US
          </h2>
          <p className="text-lg text-cs-foreground/70 max-w-2xl mx-auto">
            Our team is dedicated to creating innovative and efficient software
            solutions that drive success and growth for your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative size-[250px] bg-black rounded-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full"
                    fill
                  />
                </div>
                <h3 className="text-xl font-semibold text-cs-secondary">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
