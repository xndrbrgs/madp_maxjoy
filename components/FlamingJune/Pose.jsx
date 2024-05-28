import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

function Pose() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [
      "circle(20.8% at 45% 35%)",
      "circle(20.8% at 45% 35%)",
      "circle(0% at 45% 35%)",
    ]
  );
  const opacityTitle = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  const opacityDescription = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.9, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <section ref={container} className="bg-gray">
      <div className="relative h-[300vh]">
        <div className="sticky top-[0] h-screen">
          <div className="flex">
            <div className="w-2/5 h-screen pl-xl flex flex-col justify-between">
              <motion.div
                style={{ opacity: opacityTitle }}
                className="pt-xl h2"
              >
                Pose
              </motion.div>
              <motion.div
                style={{ opacity: opacityDescription }}
                className="pb-fxl pr-md base"
              >
                The woman is curled up on a cushioned chair, with her head
                resting on her right arm and her left arm resting across her
                lap. Her legs are drawn up, with her left foot peeking out from
                under her gown.
              </motion.div>
            </div>
            <motion.div
              className="relative w-3/5 h-screen"
              style={{ clipPath: scale }}
              transition={{ ease: "easeInOut" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={"/assets/images/FlamingJune.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pose;
