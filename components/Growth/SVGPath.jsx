import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

function SVGPath() {
  const paths = useRef([]);
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((text, i) => {
        text.setAttribute("startOffset", -20 + i * 20 + e * 20 + "%");
      });
    });
  }, []);

  return (
    <div className="relative" ref={container}>
      <svg className="w-full" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className="text-[6px] font-switzer uppercase"
          style={{ fill: "red" }}
        >
          {[...Array(6)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => (paths.current[i] = ref)}
                startOffset={i * 60 + "%"}
                href="#curve"
              >
                FLAMING JUNE
              </textPath>
            );
          })}
        </text>
      </svg>
      <div className="absolute top-[50%] left-[50%] text-center text-translate mt-xxxl">
        <h1 className="h1 text-red">
          FLAMING
          <br />
          JUNE
        </h1>
      </div>
    </div>
  );
}

export default SVGPath;
