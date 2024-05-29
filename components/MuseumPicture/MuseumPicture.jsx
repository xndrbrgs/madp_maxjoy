import { useScroll, useTransform, motion, stagger } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function MuseumPicture() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "0.7 end"],
  });
  const progress = scrollYProgress;
  useEffect(() => {
    progress.on("change", (e) => console.log(e));
  }, []);

  const paragraph =
    "MUSEO DE ARTE DE PONCE HAS GAINED GLOBAL RECOGNITION FOR ITS OUTSTANDING COLLECTION AND INNOVATIVE PROGRAMS. IT CONTINUES TO HOST PROMINENT INTERNATIONAL EXHIBITIONS AND IS A KEY PLAYER IN THE GLOBAL ART COMMUNITY.";

  const words = paragraph.split(" ");

  return (
    <section ref={container} className="relative h-[600vh] w-full">
      <div className="sticky top-[0]">
        <div className="relative w-full h-[200vh]">
          <Image
            src={"/assets/images/museo_outside.png"}
            fill
            alt="Museum Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute top-[0] left-[0]">
          <div className="sticky top-[0] h-screen flex justify-center items-center">
            <div className="container-fluid">
              <div className="row flex justify-around">
                <div className="col-8">
                  <div
                    aria-hidden
                    id="target"
                    className="h3 uppercase text-center flex flex-wrap justify-center items-center"
                  >
                    {words.map((word, i) => {
                      const start = i / words.length;
                      const end = start + 1 / words.length;
                      return (
                        <Word progress={progress} range={[start, end]} key={i}>
                          {word}
                        </Word>
                      );
                    })}
                  </div>
                  <span className="sr-only">
                    MUSEO DE ARTE DE PONCE HAS GAINED GLOBAL RECOGNITION FOR ITS
                    OUTSTANDING COLLECTION AND INNOVATIVE PROGRAMS. It continues
                    to host prominent international exhibitions and is a key
                    player in the global art community.
                  </span>
                </div>
              </div>
              <div className="row flex justify-between base mt-xxxl">
                <div className="col-2">
                  <p>MUSEO DE ARTE DE PONCE</p>
                </div>
                <div className="col-2 text-end">
                  <p>PONCE, PUERTO RICO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="pr-[8px]">
      {children}
    </motion.span>
  );
};
