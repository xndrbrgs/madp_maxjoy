import Image from "next/image";
import React from "react";

function ImageParallax() {
  return (
    <div className="mt-xxxl relative w-full" id="parallax-container">
      <div className="absolute top-[0] left-[0] row">
        <div className="ml-[8.33%] col-7">
          <div className="relative w-full h-[600px]">
            <Image
              src={"/assets/images/History1.jpg"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[0] left-[0] row mt-[520px]">
        <div className="col-5" />
        <div className="col-7">
          <div className="relative w-full h-[327px]">
            <Image
              src={"/assets/images/960x0.webp"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[0] left-[0] row mt-[908px] base">
        <div className="col-2">Luis A. Ferré</div>
        <div className="col-8">
          <div className="relative w-full h-[578px]">
            <Image
              src={"/assets/images/Ferre.png"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-2 text-end">January 3, 1959</div>
      </div>
    </div>
  );
}

export default ImageParallax;
