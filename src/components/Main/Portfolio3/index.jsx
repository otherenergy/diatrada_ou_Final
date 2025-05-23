/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import portfolios from "../../../data/main/portfolio3.json";

const Portfolio = () => {
  return (
    <section className="portfolio-simp-crus section-padding pb-0">
      <div className="container">
        <div className="row mb-100">
          <div className="col-lg-6">
            <div className="simple-head md-mb10">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">Portfolio</span>
              </h6>
              <h2 className="fz-40 fw-700">Case Studies</h2>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="text">
              <p>We are a multicultural team open to research and attentive to technological changes, to help you with your projects.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="work-crus">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                /* pagination={{
                clickable: false,
                }} */
                navigation={true}
                //modules={[Autoplay]}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                speed={1000}
                id="content-carousel-container-unq-3"
                className="swiper-container"
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  640: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 3
                  },
                }}
              >
                {
                  portfolios.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="item">
                        <div className="img">
                          <img src={slide.image} alt="" />
                        </div>
                        
                        <div className="cont">
                        <div className="info">
                            <div className="author">
                                <span>{ slide.author }</span>
                            </div>
                            <div className="date">
                                <span className="fw-800 gr-purple-red-text inline">{ slide.date }</span>
                            </div>
                        </div>
                        
                        <div className="info mt-20 text-center">
                          <h6 className="fw-600">
                            <Link href="/#">
                              <a className="fw-800 gr-purple-red-text inline">{ slide.title }</a>
                            </Link>
                          </h6>
                          <span className="tag"><a href="#0">{ slide.type }</a></span>
                        </div>
                      </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio