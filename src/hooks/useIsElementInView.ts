import { useEffect, useState } from "react";

export function useIsElementInView(id: string) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMarker = document.getElementById(id);
      if (scrollMarker) {
        const viewHeight = window.innerHeight;
        const markerPosition = scrollMarker.offsetTop - viewHeight;
        if (window.scrollY > markerPosition) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return { isInView };
}
