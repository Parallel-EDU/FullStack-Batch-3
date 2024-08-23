import logo from "./logo.svg";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  EffectCube,
  FreeMode,
  Grid,
  EffectCoverflow,
  EffectCards,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import { useRef } from "react";

function App() {
  const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.width= `${progress * 500}px`;
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <main className="px-[80px] max-sm:px-[20px] py-[300px]">
        <h1 className="text-[108px] max-sm:text-[52px] leading-[120%]">
          Swiperjs
        </h1>
      </main>
      <section className="h-[100vh] flex items-center">
        <Swiper
          navigation={true}
          freeMode={true}
          // direction="vertical"
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          mousewheel={true}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          // grabCursor={true}
          modules={[Navigation, Pagination, FreeMode, Mousewheel, Autoplay]}
          // loop={true}
          slidesPerView={1}
          // centeredSlides={true}
          spaceBetween={30}
          className="h-[550px]"
          breakpoints={{
            400: {
              slidesPerView: 1.3,
            },
            600: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 2.3,
            },
            1000: {
              slidesPerView: 3.3,
            },
            1300: {
              slidesPerView: 4.3,
            },
          }}
        >
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 6
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 7
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[32px] w-[300px] h-[500px] border-[1px] border-black rounded-[13px]">
              Slide 8
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <div className="bg-black h-[10px]" ref={progressCircle}>
            </div>
          </div>
        </Swiper>
      </section>
      {/* <section className="w-[400px] py-[121px] ml-[38%]">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          loop={true}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </section> */}
      {/* <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      {/* <section className="py-[50px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[300px] w-[300px] border-[1px] border-black">
              <h1 className="text-center mt-[50px]">Heading</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </section> */}
      {/* <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default App;
