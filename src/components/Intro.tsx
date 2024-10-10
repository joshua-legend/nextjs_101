import { animation } from "@/style/animation/animation";
import gsap from "gsap";
import { MotionPathPlugin, TextPlugin } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin, MotionPathPlugin);

const Intro = () => {
  const introText = useRef(null);
  const rocket = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      introText.current,
      { text: "" },
      { text: "Welcome To My Joshua_Study", duration: 2 }
    )
      .fromTo(rocket.current, animation.fadeIn.start, animation.fadeIn.end)
      .fromTo(
        rocket.current,
        {},
        {
          duration: 1,
          motionPath: {
            path: [
              { x: 10, y: 0 },
              { x: 0, y: 10 },
              { x: -10, y: 0 },
              { x: 0, y: -10 },
            ],
            curviness: 2,
            autoRotate: true,
          },
          ease: "power1.inOut",
        }
      )
      .fromTo(
        rocket.current,
        {},
        {
          duration: 1.5,
          x: "+=50",
          y: "-=50",
          opacity: 0,
          ease: "power1.in",
        }
      );
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span ref={introText}></span>
      <span
        ref={rocket}
        style={{
          display: "inline-block",
        }}
      >
        🚀
      </span>
    </div>
  );
};

export default Intro;
