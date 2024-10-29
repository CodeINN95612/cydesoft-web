import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

export function ScrollingTextSection() {
  const { info } = useLanguage();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [1000, -5000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-4000, 1000]);

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="relative w-full overflow-hidden">
          <motion.div
            style={{ x: x1 }}
            className="text-[80px] md:text-[140px] font-bold whitespace-nowrap mb-8"
          >
            <span className="text-cs-primary">
              {info.scrollingText.makeYourIdeas.toUpperCase()}
            </span>
            <span className="text-cs-secondary mx-8">✦</span>
            <span className="text-cs-primary">
              {info.scrollingText.makeYourIdeas.toUpperCase()}
            </span>
            <span className="text-cs-secondary mx-8">✦</span>
            <span className="text-cs-primary">
              {info.scrollingText.makeYourIdeas.toUpperCase()}
            </span>
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="text-[80px] md:text-[140px] font-bold whitespace-nowrap"
          >
            <span className="text-cs-accent">
              {info.scrollingText.lookLikeThis.toUpperCase()}
            </span>
            <span className="text-cs-secondary mx-8">✦</span>
            <span className="text-cs-accent">
              {info.scrollingText.lookLikeThis.toUpperCase()}
            </span>
            <span className="text-cs-secondary mx-8">✦</span>
            <span className="text-cs-accent">
              {info.scrollingText.lookLikeThis.toUpperCase()}
            </span>
          </motion.div>

          <div className="hidden md:block pointer-events-none absolute left-0 top-0 w-[33%] h-full bg-gradient-to-r from-cs-background to-transparent" />
          <div className="hidden md:block pointer-events-none absolute right-0 top-0 w-[33%] h-full bg-gradient-to-l from-cs-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
