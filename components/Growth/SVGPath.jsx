import { useRef } from "react";

function SVGPath() {
  const paths = useRef([]);
  return (
    <div>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px] font-switzer uppercase" style={{ fill: "red" }}>
          <textPath startOffset={"50%"} href="#curve">FLAMING JUNE</textPath>
        </text>
      </svg>
    </div>
  );
}

export default SVGPath;
