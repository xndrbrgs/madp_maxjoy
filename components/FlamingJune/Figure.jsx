import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

function Figure() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
    [
      "circle(0% at 45% 35%)",
      "circle(45.7% at 50% 50%)",
      "circle(20.8% at 45% 35%)",
      "circle(28.3% at 46% 41%)",
      "circle(20.0% at 19% 17%)",
      "circle(40.4% at 48% 58%)",
      "circle(78.1% at 48% 58%)",
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
      <div className="relative h-[800vh]">
        <div className="sticky top-[0] h-screen">
          <div className="flex">
            <div className="w-2/5 h-screen pl-xl relative">
              {/* Figure */}
              <div className="absolute top-[0] left-[0] h-screen flex flex-col justify-between">
                <motion.div
                  style={{ opacity: opacityTitle }}
                  className="pt-xl pl-xl h2"
                >
                  Central Figure
                </motion.div>
                <motion.div
                  style={{ opacity: opacityDescription }}
                  className="pb-fxl pl-xl pr-md base"
                >
                  The painting features a single female figure in a deep,
                  restful sleep. She is draped in a semi-transparent, bright
                  orange gown that clings to her form, highlighting her curves
                  and the natural lines of her body.
                </motion.div>
              </div>

              {/* Pose */}
              <div className="absolute top-[0] left-[0] h-screen flex flex-col justify-between">
                <motion.div
                  style={{ opacity: opacityTitle }}
                  className="pt-xl pl-xl h2"
                >
                  Pose
                </motion.div>
                <motion.div
                  style={{ opacity: opacityDescription }}
                  className="pb-fxl pl-xl pr-md base"
                >
                  The woman is curled up on a cushioned chair, with her head
                  resting on her right arm and her left arm resting across her
                  lap. Her legs are drawn up, with her left foot peeking out
                  from under her gown.
                </motion.div>
              </div>

              {/* Placement */}
              <div className="absolute top-[0] left-[0] h-screen flex flex-col justify-between">
                <motion.div
                  style={{ opacity: opacityTitle }}
                  className="pt-xl pl-xl h2"
                >
                  Placement
                </motion.div>
                <motion.div
                  style={{ opacity: opacityDescription }}
                  className="pb-fxl pl-xl pr-md base"
                >
                  The woman's curled, almost circular pose creates a dynamic yet
                  stable structure. Her body is angled diagonally across the
                  canvas, with her head resting on her right arm and her left
                  arm draped across her lap, leading the viewer's eye in a
                  gentle, sweeping motion from her head to her feet.
                </motion.div>
              </div>

              {/* Lights */}
              <div className="absolute top-[0] left-[0] h-screen flex flex-col justify-between">
                <motion.div
                  style={{ opacity: opacityTitle }}
                  className="pt-xl pl-xl h2"
                >
                  Lights
                </motion.div>
                <motion.div
                  style={{ opacity: opacityDescription }}
                  className="pb-fxl pl-xl pr-md base"
                >
                  The lighting in the painting appears to come from the upper
                  left, casting gentle shadows that accentuate the
                  three-dimensional form of the woman. The light highlights the
                  textures of the fabric and the softness of her skin.
                </motion.div>
              </div>

              {/* Shadows */}
              <div className="absolute top-[0] left-[0] h-screen flex flex-col justify-between">
                <motion.div
                  style={{ opacity: opacityTitle }}
                  className="pt-xl pl-xl h2"
                >
                  Shadows
                </motion.div>
                <motion.div
                  style={{ opacity: opacityDescription }}
                  className="pb-fxl pl-xl pr-md base"
                >
                  Subtle shadows under her body, along the curves of her dress,
                  and around her limbs add depth and realism, making her appear
                  more lifelike and giving the composition a sense of volume.
                </motion.div>
              </div>

              {/* Flaming June */}
              <div className="absolute top-[0] left-[0] h-screen flex flex-col justify-between">
                <motion.div
                  style={{ opacity: opacityTitle }}
                  className="pt-xl pl-xl h2"
                >
                  Flaming June
                </motion.div>
                <motion.div
                  style={{ opacity: opacityDescription }}
                  className="pb-fxl pl-xl pr-md base"
                >
                  The composition of "Flaming June" is a carefully crafted
                  balance of color, line, light, and shadow, all working
                  together to create a cohesive and visually arresting work. The
                  combination of the serene subject matter, the vibrant color
                  palette, and the harmonious arrangement of elements makes
                  "Flaming June" a masterpiece of compositional design.
                </motion.div>
              </div>
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

export default Figure;
