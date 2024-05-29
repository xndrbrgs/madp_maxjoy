import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
  {
    image: "/assets/images/Garden.jpg",
    name: "The Garden Court",
    artist: "by Edward Burne-Jones",
  },
  {
    image: "/assets/images/Conception.jpg",
    name: "The Immaculate Conception",
    artist: "by Antonio de Pereda",
  },
  {
    image: "/assets/images/Egypt.jpg",
    name: "The Flight into Egypt",
    artist: "by Matías de Arteaga y Alfaro",
  },
  {
    image:
      "/assets/images/Francisco_Camilo_-_The_Infant_Jesus_as_Victor_over_Sin_and_Death_-_c._1640-60.jpg",
    name: "Jesus as Victor over Sin and Death by Francisco Camilo",
    artist: "by Francisco Camilo",
  },
];

function Carousel() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {images.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="flex flex-col">
              <div className="relative w-full h-[40vh]">
                <Image fill src={img.image} style={{ objectFit: "cover" }} />
              </div>
              <div className="base pt-sm">
                <p>{img.name}</p>
                <p className="italic">{img.artist}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;
