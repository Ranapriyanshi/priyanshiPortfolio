import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "../components/Navbar";
import ProjectList from '../components/projectList'
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";
import p1 from "../assets/p1.png";

const Design = () => {
  const slideRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
  });
  const ref = useRef(null);
  const view = useInView(ref);
  const controller = useAnimation();
  useEffect(() => {
    if (view) {
      controller.start("visible");
    }
  }, [view, controller]);

  const scrollTransforms = [
    useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "25%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "35%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "35%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "25%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
  ];

  const clientList = [
    { id: 2, img: w2 },
    { id: 1, img: w1 },
    { id: 6, img: w6 },
    { id: 3, img: w3 },
    { id: 5, img: w5 },
    { id: 4, img: w4 },
  ];

  const projects = [
    { id: 1, img: p1, x: 5 },
    { id: 2, img: p1, x: 25 },
    { id: 3, img: p1, x: 35 },
    { id: 4, img: p1, x: 50 },
    { id: 5, img: p1, x: 35 },
    { id: 6, img: p1, x: 20 },
    { id: 7, img: p1, x: 5 },
  ];
  return (
    <>
      <Navbar />
      <motion.div className="design-sec">
        <motion.p className="intro-line">WEBDESIGNER, FRONTEND AND BACKEND DEVELOPER</motion.p>
        <motion.h1 className="hero-txt">
          Sophisticated tech and tangible
          <br /> solutions for inventive projects.
        </motion.h1>
        <motion.button
          whileHover={{
            width: "270px",
            boxShadow:
              "0 32px 32px rgba(27, 27, 27, .1), 0 16px 16px rgba(27, 27, 27, .1), 0 8px 8px rgba(27, 27, 27, .1), 0 4px 4px rgba(27, 27, 27, .1), 0 2px 2px rgba(27, 27, 27, .1)",
          }}
          className="btn btn2"
        >
          Let&apos;s start a project together
        </motion.button>
        <div className="client-display">
          <div className="clients">
            {clientList.map((client) => (
              <img key={client.id} src={client.img} alt="client" />
            ))}
          </div>
          <div className="clients">
            {clientList.map((client) => (
              <img key={client.id} src={client.img} alt="client" />
            ))}
          </div>
        </div>
        <motion.div className="projects-sec">
          <motion.div className="projects" ref={slideRef} style={{ y: scroll }}>
            {projects.map((project, index) => (
              <motion.img
                key={project.id}
                src={project.img}
                alt="project"
                initial={{ y: project.x * 5 }}
                animate={{}}
                ref={slideRef}
                style={{ y: scrollTransforms[index] }}  
              />
            ))}
          </motion.div>
        </motion.div>
         <motion.div className="detail">
          <motion.h1
            initial={{ textDecoration: "none", textDecorationColor: "orange" }}
            animate={{
              textDecoration: view ? "line-through" : "none",
              textDecorationColor: "orange",
            }}
            transition={{ duration: 1 }}
            // ref={slideRef}
          >
            You need a website.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: view ? 1 : 0 }}
            transition={{ duration: 3 }}
            // ref={slideRef}
          >
            You need a high-performing website.
          </motion.h1>
          <motion.p>
            This word will make the difference between a simple visit on your
            website and a sale.
            <br />
            <br />
            Webesigner and Webflow expert, I help you solve your online
            visibility challenges and generate more sales by designing custom
            websites,
            <i>
              art direction dedicated to your brand and bespoke digital
              strategies.
            </i>
          </motion.p>
        </motion.div> 
      </motion.div>
      <ProjectList/>
    </>
  );
};

export default Design;
