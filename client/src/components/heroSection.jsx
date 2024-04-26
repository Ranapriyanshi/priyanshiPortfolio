import { motion } from "framer-motion";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import { useEffect, useRef, useState } from "react";
import photo from "../assets/photo.png";
import arrow from "../assets/arrow.png";
const HeroSection = () => {
  const [isTrialHovered, setIsTrialHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursorRef.current.style.left = e.pageX - 35 + "px";
      cursorRef.current.style.top = e.pageY - 35 + "px";
    });
  })

  const handleTrialHover = () => {
    setIsTrialHovered(true);
    setIsTitleHovered(true);
  };

  const handleTrialLeave = () => {
    setIsTrialHovered(false);
    setIsTitleHovered(false);
  };
  const handleTitleHover = () => {
    setIsTitleHovered(true);
  };

  const handleTitleLeave = () => {
    setIsTitleHovered(false);
  };

  return (
    <motion.div className="hero-sec">
      <motion.div className="photo-div">
        <motion.img src={photo} alt="photo" className="photo" drag />
      </motion.div>
      <motion.p className="intro">
        👋, my name is Priyanshi and I am a tech-enthusiast
      </motion.p>
      <motion.div
        className={`text-sec ${isTrialHovered ? "opacity-reduced" : ""}`}
        onMouseEnter={handleTitleHover}
        onMouseLeave={handleTitleLeave}
      >
        <motion.div ref={cursorRef} className={`${isTitleHovered ? "cursor" : "notCursor"}`} >
          <motion.img src={arrow} alt="photo" className="photo" />
        </motion.div>
        <motion.p className="designer">Webdesigner</motion.p>
        <motion.p className="designer1">Webdesigner</motion.p>
        <motion.p className="designer2">Webdesigner</motion.p>
      </motion.div>
      <motion.div
        className="text-sec"
        id="trial"
        onMouseEnter={handleTrialHover}
        onMouseLeave={handleTrialLeave}
      >
        <motion.p className="developer">& Webdeveloper</motion.p>
        <motion.p className="developer1">& Webdeveloper</motion.p>
        <motion.p className="developer2">& Webdeveloper</motion.p>
      </motion.div>
      <motion.div className="details intro">
        <motion.p>based in Punjab, India</motion.p>
        <motion.div>
          <motion.img src={w1} alt="w1" className="apps" />
          <motion.img src={w2} alt="w2" className="apps" />
          <motion.img src={w3} alt="w3" className="apps" />
        </motion.div>
      </motion.div>
      <motion.div className="contact-button">
        <motion.button
          whileHover={{
            width: "210px",
            boxShadow:
              "0 32px 32px rgba(27, 27, 27, .1), 0 16px 16px rgba(27, 27, 27, .1), 0 8px 8px rgba(27, 27, 27, .1), 0 4px 4px rgba(27, 27, 27, .1), 0 2px 2px rgba(27, 27, 27, .1)",
          }}
          className="btn"
        >
          You need a Designer
        </motion.button>
        <motion.button
          whileHover={{
            width: "250px",
            boxShadow:
              "0 32px 32px rgba(27, 27, 27, .1), 0 16px 16px rgba(27, 27, 27, .1), 0 8px 8px rgba(27, 27, 27, .1), 0 4px 4px rgba(27, 27, 27, .1), 0 2px 2px rgba(27, 27, 27, .1)",
          }}
          className="btn btn2"
        >
          You need a Web Developer
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
