import { useScroll, useTransform, motion } from "framer-motion";
import { Container } from "postcss";
import React, { useRef } from "react";
import SVGPath from "./SVGPath";

function Growth() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const bgColor = useTransform(scrollYProgress, [0, 1], ["#FDF0D5", "#F2F2F2"]);

  return (
    <motion.section
      ref={container}
      style={{ backgroundColor: bgColor }}
      className="container-fluid"
    >
      {/* Title  */}
      <div className="row">
        <div className="col-12 text-center display">
          <h1>GROWTH AND</h1>
        </div>
        <div className="row">
          <div className="col-12 text-center display">
            <h1>RECOGNITION</h1>
          </div>
        </div>
      </div>

      {/* 2 Cols  */}
      <div className="row mt-xxl uppercase">
        <div className="col-5">
          <h3 className="h3">
            During the 1960s, the museum rapidly expanded its collection,
            acquiring significant works from European masters.
          </h3>
        </div>
        <div className="col-2" />
        <div className="col-5 text-end">
          <h3 className="h3">
            In 1962, the museum purchased
            <span className="italic">"Flaming June"</span> by Frederic Leighton,
            which would become one of its most iconic pieces.
          </h3>
        </div>
      </div>

      <SVGPath />
    </motion.section>
  );
}

export default Growth;
