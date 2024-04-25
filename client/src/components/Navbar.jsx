import logo from "../assets/logo.png";
import { LayoutGroup, motion } from "framer-motion";
import "../App.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [selLang, setSelLang] = useState("EN");
  const navigate = useNavigate();

  const navLinks = [
    { title: "Design", path: "/design" },
    { title: "Photos", path: "/photos" },
    { title: "Project", path: "/project" },
  ];

  const langs = ["EN", "FR"];

  function handleLangSwitch(lan) {
    setSelLang(lan);
  }

  return (
    <motion.div className="nav">
      <motion.img
        whileHover={{ cursor: "pointer" }}
        onClick={navigate("/")}
        src={logo}
        alt="logo"
        className="logo"
      />
      <motion.div className="nav-links">
        {/* <motion.ul className="link-list"> */}
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ marginBottom: "8px", cursor: "pointer" }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate(link.path)}
            >
              {link.title}
            </motion.li>
          ))}
        {/* </motion.ul> */}
        <LayoutGroup id="underline">
          <motion.div className="lanSwitch">
            {langs.map((lang) => (
              <motion.div
                className={selLang == lang ? "lan active" : "lan"}
                key={lang}
                onClick={() => handleLangSwitch(lang)}
              >
                {lang}
                {selLang == lang && (
                  <motion.div
                    className="underline"
                    layoutId="underline"
                    style={{ backgroundColor: "black" }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>
        <motion.button
          whileHover={{
            width: "210px",
            boxShadow:
              "0 32px 32px rgba(27, 27, 27, .1), 0 16px 16px rgba(27, 27, 27, .1), 0 8px 8px rgba(27, 27, 27, .1), 0 4px 4px rgba(27, 27, 27, .1), 0 2px 2px rgba(27, 27, 27, .1)",
          }}
          className="btn"
        >
          hello@priyanshi.in
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
