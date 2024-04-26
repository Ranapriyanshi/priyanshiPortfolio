import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";

const Design = () => {
  const clientList = [
    { id: 1, img: w1 },
    { id: 2, img: w2 },
    { id: 3, img: w3 },
    { id: 4, img: w4 },
    { id: 5, img: w5 },
    { id: 6, img: w6 },
  ];
  return (
    <>
      <Navbar />
      <motion.div className="design-sec">
        <motion.p>WEBDESIGNER, FRONTEND AND BACKEND DEVELOPER</motion.p>
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
        <motion.div className="client-display">
          <motion.div
            className="clients"
            // initial={{ x: "100%" }}
            // animate={{ x: "-100%" }}
            // transition={{
            //   duration: 10,
            //   repeat: Infinity,
            //   type: "tween",
            //   // repeatType: "loop",
            // }}
          >
            {clientList.map((client) => (
              <motion.img key={client.id} src={client.img} alt="client" />
            ))}
          </motion.div>
          <motion.div
            className="clients1"
            // initial={{ x: "200%" }}
            // animate={{ x: "-200%" }}
            // transition={{
            //   duration: 10,
            //   repeat: Infinity,
            //   // repeatType: "loop",
            //   delay: 3,
            // }}
          >
            {clientList.map((client) => (
              <motion.img key={client.id} src={client.img} alt="client" />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Design;
