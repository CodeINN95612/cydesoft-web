import { PropsWithChildren } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UpButton } from "../components/UpButton";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-cs-background text-cs-text over">
      <UpButton />
      <Header />
      <main className="pt-10">{children}</main>
      <Footer />
    </div>
  );
}
