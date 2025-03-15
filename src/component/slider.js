import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const RevolutionSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div style={{ position: 'relative', height: '100vh', backgroundColor: '#2d3032' }}>
          <img
            src="./img/slider/slide155.jpg"
            alt="Slide 1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', width: '90%', maxWidth: '1200px' }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 110px)', lineHeight: 'clamp(50px, 9vw, 100px)', fontWeight: 400, marginBottom: '20px' }}>
              Invest with
              <br />
              Trust
            </h1>
            <p style={{ fontSize: 'clamp(18px, 4vw, 40px)', lineHeight: 'clamp(24px, 5vw, 50px)', fontWeight: 300, marginBottom: '40px' }}>
              We pioneered cryptocurrency protocols and companies funds, while also offering robust investments in stocks and stock trading to ensure a well-rounded approach to modern investing.
            </p>
            <a
              href="login.html"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#fff',
                color: '#000',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: 500,
                borderRadius: '5px',
              }}
            >
              INVEST NOW
            </a>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div style={{ position: 'relative', height: '100vh', backgroundColor: '#2d3032' }}>
          <img
            src="./img/slider/slide166.jpg"
            alt="Slide 2"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', width: '90%', maxWidth: '1200px' }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 110px)', lineHeight: 'clamp(50px, 9vw, 100px)', fontWeight: 400, marginBottom: '20px' }}>
              Diversify your
              <br />
              Assets
            </h1>
            <p style={{ fontSize: 'clamp(18px, 4vw, 40px)', lineHeight: 'clamp(24px, 5vw, 50px)', fontWeight: 300, marginBottom: '40px' }}>
              Access multiple assets from a single investment.
            </p>
            <a
              href="https://dashboard.hillmixholdings.com/"
              target="_blank"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#fff',
                color: '#000',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: 500,
                borderRadius: '5px',
              }}
            >
              INVEST NOW
            </a>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div style={{ position: 'relative', height: '100vh', backgroundColor: '#2d3032' }}>
          <img
            src="./img/slider/slide177.jpg"
            alt="Slide 3"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', width: '90%', maxWidth: '1200px' }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 110px)', lineHeight: 'clamp(50px, 9vw, 100px)', fontWeight: 400, marginBottom: '20px' }}>
              Secure
              <br />
              the Future
            </h1>
            <p style={{ fontSize: 'clamp(18px, 4vw, 40px)', lineHeight: 'clamp(24px, 5vw, 50px)', fontWeight: 300, marginBottom: '40px' }}>
              Crypto protocols and stock trading represent the future of investing, paving the way for innovative financial solutions and new opportunities in both the digital and traditional markets.
            </p>
            <a
              href="https://dashboard.hillmixholdings.com/"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#fff',
                color: '#000',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: 500,
                borderRadius: '5px',
              }}
            >
              INVEST NOW
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default RevolutionSlider;