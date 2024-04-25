import {motion} from "framer-motion";
import Navbar from "../components/Navbar";

const Design = () => {
  return (
    <>
      <Navbar />
      <motion.div className="design-sec">
        <motion.p>
            WEBDESIGNER, FRONTEND AND BACKEND DEVELOPER
        </motion.p>
        <motion.h1>
        Strategic solutions and cutting-edge<span></span> applications for innovative tech projects
        </motion.h1>

      </motion.div>
    </>
  );
};

export default Design;
