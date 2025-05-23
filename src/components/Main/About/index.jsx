/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from 'next/link';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const About = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="intro-two-img full-width md-mb50">
              <div className="img1">
                <img src="img/about/th2.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="img/about/th3.jpg" alt="" />
                <div className="play-button">
                  <a href="#" className="btn vid" onClick={openVideo}>
                    <svg width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <circle className="circle" cx="50" cy="50" r="48" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>

              <div className="award-icon">
                <div className="star mb-20">
                  <div className="img">
                    <img src="img/waves/star.png" alt="" />
                    <span className="icon pe-7s-medal"></span>
                  </div>
                </div>
                <h6>100%</h6>
                <p>verified</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pl-50">
              <div className="sub-head radius fz-12 ls2 text-u mb-10">
                <span>Highly expertise</span>
              </div>
              <h2 className="mb-20 fw-800">where we specialize in your projects,<span className="gr-purple-red-text">When you need a structure</span></h2>
              <p>legal support, technical advising, or marketing. Our team is here to develop the best solutions tailored to your needs.</p>

              <ul className="check-list rest mt-20">
                <li className="mb-10"><span className="icon bg-gray mr-20"><i className="fas fa-check"></i></span>we provide end-to-end solutions aligned with your vision</li>
                <li className="mb-10"><span className="icon bg-gray mr-20"><i className="fas fa-check"></i></span>From specific issues to large-scale project</li>
                <li><span className="icon bg-gray mr-20"><i className="fas fa-check"></i></span>Our seasoned specialists offer top-notch professional advice</li>
              </ul>

              <Link href="/diatrada-about">
                <a className="butn butn-md gr-purple-red-bg text-light radius-30 mt-30">
                  <span className="text slide-up">About Us</span>
                  <span className="text slide-down">About Us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId=""
              onClose={() => setOpen(false)}
            />
          )
      }
    </section>
  )
}

export default About