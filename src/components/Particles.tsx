import { ThemeContext } from "@/contexts/ThemeContext";
import { useCallback, useContext, useEffect, useState } from "react";
import ParticlesComponent from "react-particles";
import { loadFull } from "tsparticles";

export const Particles = () => {
  const { theme } = useContext(ThemeContext);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    if (!domLoaded) setDomLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {domLoaded && (
        <ParticlesComponent
          id="tsparticles"
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: theme === "dark" ? "#ffffff" : "#83060e",
              },
              shape: {
                type: ["circle"],
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "",
                  width: 300,
                  height: 300,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: theme === "dark" ? "#ffffff" : "#83060e",
                opacity: 0.35,
                width: 0.4,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: ["bubble"],
                },
                onclick: {
                  enable: true,
                  mode: ["push"],
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 130,
                  size: 5,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect: false,
          }}
          init={particlesInit}
        />
      )}
    </>
  );
};
