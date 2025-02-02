import { FixedSideBar } from "./fixed-side-bar";
import { Hero } from "./hero";
import { ScrollingTextSection } from "./scrolling-text-section";

export default function Home() {
  return (
    <>
      <FixedSideBar />
      <Hero />
      <ScrollingTextSection />
    </>
  );
}
