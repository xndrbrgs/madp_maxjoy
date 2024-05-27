import React from "react";
import ImageParallax from "./ImageParallax";

function Parallax() {
  return (
    <section className="container-fluid relative mt-fxl">
      {/* Text Section  */}
      <div className="row">
        <div className="ml-[8.333%] col-8">
          <h3 className="h3 font-bold">
            The Museo de Arte de Ponce <br /> was founded in 1959 by <br />{" "}
            philanthropist and Puerto Rican <br /> industrialist{" "}
            <span className="italic">Luis A. Ferré</span>.
          </h3>
        </div>
      </div>
      <div className="row mt-md">
        <div className="col-5" />
        <div className="col-7">
          <h3 className="h3 uppercase">
            Inspired by his passion for the arts and <br /> the desire to enrich
            Puerto Rico's <br /> cultural landscape, Ferré sought to <br />{" "}
            create a world-class museum that <br /> would house European and
            Puerto <br /> Rican artworks.
          </h3>
        </div>
      </div>

      {/* Parallax Section */}
      <div className="relative">
        <ImageParallax />
      </div>
    </section>
  );
}

export default Parallax;
