import Particles from "react-tsparticles";

export default function Particle_background() {
  const particlesInit = (main) => {
    
  };

  const particlesLoaded = (container) => {
    
  };
  return (
    <div>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 0.2,
              opacity: 1,
              size: 40,
            },
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#faed27",
          },
          links: {
            color: "#39FF14",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 5,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: false,
      }}
    /></div>
  )
}
