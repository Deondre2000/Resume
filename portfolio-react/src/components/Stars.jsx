import { useEffect, useRef } from "react";
import "../blocks/background.css";

const Stars = () => {
  const starsLayerRef = useRef(null);

  useEffect(() => {
    if (!starsLayerRef.current) {
      return;
    }

    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const numberOfStars = isSmallScreen ? 140 : 260;
    const starsCreated = [];

    const handleVisibilityChange = () => {
      if (!starsLayerRef.current) {
        return;
      }
      starsLayerRef.current.classList.toggle(
        "background_stars_layer_paused",
        document.hidden,
      );
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("background_star");

      const size = Math.random() * 3 + 1;
      const twinkleDuration = Math.random() * 3 + 2;
      const driftDuration = Math.random() * 22 + 24;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.setProperty("--twinkle-duration", `${twinkleDuration}s`);
      star.style.setProperty("--drift-duration", `${driftDuration}s`);

      starsLayerRef.current.appendChild(star);
      starsCreated.push(star);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      starsCreated.forEach((star) => star.remove());
    };
  }, []);

  return (
    <div
      ref={starsLayerRef}
      className="background_stars_layer"
      aria-hidden="true"
    />
  );
};

export default Stars;
