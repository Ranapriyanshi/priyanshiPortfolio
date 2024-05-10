import { motion } from "framer-motion";
import p1 from "../assets/p1.png";
import arrow from "../assets/arrow.png";
// import Carousel from "react-elastic-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

const ProjectList = () => {
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursorRef.current.style.left = e.pageX - 35 + "px";
      cursorRef.current.style.top = e.pageY - 1980 + "px";
    });
  });

  const handleProjectEnter = () => {
    setIsProjectHovered(true);
  };

  const handleProjectLeave = () => {
    setIsProjectHovered(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    { id: "1", img: p1 },
    { id: "2", img: p1 },
    { id: "3", img: p1 },
    { id: "3", img: p1 },
    { id: "3", img: p1 },
    { id: "3", img: p1 },
    { id: "3", img: p1 },
  ];

  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 3 },
  // ];

  return (
    <motion.section className="project-display">
      <motion.div className="project-display-head">
        <motion.h1>Latest Projects</motion.h1>
        <motion.div>
          <motion.div className="button-div">
            <motion.img src={arrow} style={{ rotate: "180deg" }} />
          </motion.div>
          <motion.div className="button-div">
            <motion.img src={arrow} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={cursorRef}
        className={`${isProjectHovered ? "cursor" : "notCursor"}`}
      >
        <motion.img src={arrow} alt="photo" className="photo" />
      </motion.div>
      <Slider {...settings}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project"
            onMouseEnter={handleProjectEnter}
            onMouseLeave={handleProjectLeave}
          >
            <motion.img
              src={project.img}
              className="project-img"
              style={{ height: "300px" }}
              whileHover={{
                filter: "grayscale(0)",
              }}
              alt="project"
            />
          </motion.div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default ProjectList;
