import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 760);
  const navigate = useNavigate(); // initialize navigate

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 760);
    };
    window.addEventListener("resize", handleResize);

    // GSAP animation for infinite sparkle effect and iPhone title
    const timeline = gsap.timeline({ repeat: -1 }); // Infinite loop
    timeline.to("#title", {
      opacity: 1,
      duration: 3, // Adjust duration here
      delay: 1.5,
    });

    // Buy button animation
    gsap.to("#buy-btn", {
      opacity: 1,
      translateY: 0,
      duration: 3,
      delay: 1.5,
    });

    // Sparkle effect with infinite animation
    gsap.to("#sparkle", {
      x: 100,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up resize listener
      timeline.kill(); // Clean up GSAP timeline on unmount
    };
  }, []);

  // Function for buy button redirect
  const handleBuyClick = () => {
    navigate("/iphones"); // Navigate to the new iPhones page
  };

  return (
    <section className="min-h-screen py-10 w-full bg-black relative">
      <div className="h-full flex flex-col items-center justify-center">
        {/* iPhone 15 title */}
        <p id="title" className="hero-title">
          iPhone 15 Pro
        </p>

        {/* Video showing iPhone 15 */}
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
            className="absolute top-0 left-0 w-10 h-10 bg-white rounded-full"
          />
        </div>

        {/* Buy button */}
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
