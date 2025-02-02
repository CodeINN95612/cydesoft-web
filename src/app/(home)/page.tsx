import { Clients } from "./clients";
import ContactUs from "./contact-us";
import { FixedSideBar } from "./fixed-side-bar";
import { Hero } from "./hero";
import { ScrollingTextSection } from "./scrolling-text-section";
import { Services } from "./services";
import { ShowFixedButtons } from "./show-fixed-buttons";

export default function Home() {
  return (
    <>
      <FixedSideBar />
      <Hero />
      <ScrollingTextSection />
      <ShowFixedButtons />
      <Services />
      <Clients />
      <ContactUs />
    </>
  );
}
