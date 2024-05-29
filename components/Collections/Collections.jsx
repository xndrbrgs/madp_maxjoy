import Button from "../Button/Button";
import Carousel from "./Carousel";

function Collections() {
  return (
    <section className="bg-black text-gray w-full container-fluid">
      <div className="pt-xl">
        <hr />
        <div className="row mt-md">
          <div className="col-5 flex gap-x-[8px]">
            <div className="bg-red w-[20px] h-[20px] rounded-full animate-pulse" />
            <p className="base">COLLECTIONS</p>
          </div>
          <div className="col-7 h3 flex flex-col gap-y-md">
            <h4>
              The Museo de Arte de Ponce stands as a testament to the vision of
              its founder, <span className="italic">Luis A. Ferré</span>, and
              the enduring importance of art in society.
            </h4>
            <h4>
              The museum is dedicated to enriching the cultural landscape of
              Puerto Rico through exhibitions, educational programs, and
              community engagement, making it a vital hub for art lovers and
              scholars alike.
            </h4>
            <div className="pt-xxxl w-[20rem]">
              <Button href={"https://museoarteponce.org/arte/actuales-2/"}>
                EXPLORE THE COLLECTIONS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-xxxl">
        <div className="row">
          <div className="col-3">
            <p className="base">
              Showcasing the most important collection of <br />
              European art in Latin America
            </p>
          </div>
        </div>
      </div>

      <div className="row pt-md">
        <div className="col-12">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Collections;
