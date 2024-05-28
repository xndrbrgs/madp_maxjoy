import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

function ImgScale() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const bgColor = useTransform(scrollYProgress, [0, 1], ["#FDF0D5", "#F2F2F2"]);

  const [scaleComplete, setScaleComplete] = useState(false);

  return (
    <motion.div
      ref={container}
      className="relative h-[200vh]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="sticky top-[0] h-[100vh] overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          {scaleComplete && (
            <div className="z-40 display">Animation Complete!</div>
          )}
          <motion.div
            className="relative w-[50vw] h-[50vh]"
            style={{ scale, opacity }}
            onAnimationComplete={() => setScaleComplete(true)}
          >
            <Image
              src={"/assets/images/FlamingJune.jpg"}
              fill
              alt="Flaming June Picture"
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ImgScale;
