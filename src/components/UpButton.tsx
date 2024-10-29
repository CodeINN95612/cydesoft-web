import { ArrowUp } from "lucide-react";

export function UpButton() {
  return (
    <button
      className="bg-cs-secondary-90 text-cs-text p-4 rounded-full hover:bg-cs-accent hover:text-cs-background transition-colors duration-250"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="m-auto" />
    </button>
  );
}
