import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="container-fluid">
      {/* Title  */}
      <div className="row flex mt-md items-center justify-between">
        <div className="col-7">
          <h1 className="display">Museo de</h1>
        </div>
        <div className="col-5">
          <hr class="h-[1px] border-[0] w-full bg-black" />
        </div>
      </div>
      <div className="row flex mt-md items-center justify-between">
        <div className="col-2">
          <hr class="h-[1px] border-[0] w-full bg-black" />
        </div>
        <div className="col-10">
          <h1 className="display">
            Arte de <span className="text-red">Ponce</span>
          </h1>
        </div>
      </div>

      {/* 4 Cols */}
      <div className="row mt-xxxl base">
        <div className="col-3">
          <p>
            Established in 1965 <br /> by Luis A. Ferré
          </p>
        </div>
        <div className="col-3">
          <p>
            More than 4,500 <br /> paintings in 14 galleries
          </p>
        </div>
        <div className="col-3">
          <p>
            Designed by
            <br /> Edward Durell Stone
          </p>
        </div>
        <div className="col-3">
          <p>
            The finest art museum <br /> in Puerto Rico
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="row my-xl">
        <div className="col-12">
          <div className="relative w-full hero-height">
            <Image src={"/assets/images/7-ponce-art-museum.jpg"} fill style={{
                objectFit: 'cover'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
