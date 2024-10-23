import { FixedBar } from "./FixedBar";
import { Hero } from "./Hero";
import { ScrollingTextSection } from "./ScrollingTextSection";
import { Services } from "./Services";
import { ShowFixedButtons } from "./ShowFixedButtons";

export function Main() {
  return (
    <>
      <FixedBar />
      <Hero />
      <ScrollingTextSection />
      <ShowFixedButtons />
      <Services />
    </>
  );
}
