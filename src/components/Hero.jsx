import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 760);
  const navigate = useNavigate(); // initialize navigate

  const handleBuyClick = () => {
    navigate("/iphones"); // Redirect to /iphones
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 760);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Continuous sparkle effect
  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 }); // Infinite repeat for the sparkle animation

    // iPhone 15 title entrance
    timeline.to("#title", {
      opacity: 1,
      duration: 1.7, // Adjusted to be faster
      delay: 1.5,
    });

    // Buy button appearance
    gsap.to("#buy-btn", {
      opacity: 1,
      translateY: 0,
      duration: 1.7, // Adjusted to be faster
      delay: 1.5,
    });

    // Continuous sparkle effect without a ball animation
    gsap.to("#sparkle", {
      opacity: 1,
      duration: 5, // Duration for the sparkle effect
      ease: "power1.inOut",
      repeat: -1, // Make it infinite
      yoyo: true, // Optional for the back-and-forth effect
    });
  }, []);

  return (
    <section className="min-h-screen py-10 w-full bg-black relative">
      <div className="h-full flex flex-col items-center justify-center">
        <p id="title" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="w-2/3 md:w-10/12 relative">
          <video
            autoPlay
            muted
            playsInline="true"
            className="pointer-events-none"
            key={isLargeScreen}
          >
            <source
              src={isLargeScreen ? heroVideo : smallHeroVideo}
              type="video/mp4"
            />
          </video>

          {/* Sparkle effect */}
          <div
            id="sparkle"
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-transparent opacity-0" // Change this to your desired sparkle effect
          />
        </div>

        <div
          id="buy-btn"
          className="flex flex-col items-center justify-center gap-1 opacity-0 translate-y-20"
        >
          <button onClick={handleBuyClick} className="btn">
            Buy
          </button>

          <p className="md:text-lg font-semibold">
            From $999 or $41.62/mo. for 24 mo.<sup>1</sup>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
