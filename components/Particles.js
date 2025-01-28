import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const Particle = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of particles
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Mark particles as initialized
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Log container when particles are loaded
  };

  return (
    <>
      {/* Render Particles only when 'init' is true */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0a0a68", // Background color for the particles
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push", // Add particles on click
                },
                onHover: {
                  enable: true,
                  mode: "repulse", // Repulse particles on hover
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4, // Number of particles to add on click
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff", // Particle color
              },
              links: {
                color: "#ffffff", // Link color between particles
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce", // Bounce out of screen bounds
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800, // Density of particles
                },
                value: 80, // Number of particles
              },
              opacity: {
                value: 0.5, // Opacity of particles
              },
              shape: {
                type: "circle", // Shape of particles
              },
              size: {
                value: { min: 1, max: 5 }, // Size range of particles
              },
            },
            detectRetina: true, // Enable retina display support
          }}
          style={{
            position: "absolute", // Position it absolutely
            top: 0,
            left: 0,
            width: "100%", // Full width
            height: "100vh", // Full viewport height
            zIndex: -1, // Make sure particles are behind the content
          }}
        />
      )}
    </>
  );
};

export default Particle;
