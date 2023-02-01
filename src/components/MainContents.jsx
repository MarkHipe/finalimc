import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import PMI from "../assets/PMI.png";
import MBI from "../assets/MBI.jpg";
import Obanana from "../assets/obanana.png";
import CSC from "../assets/CSC.png";
import MAC from "../assets/MAC.png";
import { CiLocationOn, CiMail } from "react-icons/ci";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
//import { ScrollSmoother } from "gsap/all";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";
import cargo from "../assets/cargo.png";
import Hero1 from "..//assets/hero-section/IMC16 EDIT 1.jpg";
import Hero2 from "..//assets/hero-section/17 edited.jpg";
import { useNavigate } from "react-router-dom";
import Thumbnail from "../assets/IMC164.jpg";
import { news } from "./newsNUpdatePage/news";
import { useEffect } from "react";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);


const testimonials = [
  {
    label: "Valued Customer",
    body: " I was skeptical at first because they are relatively new to the field, but I am happy that I did not let my skeptism get in the way of engaging with a very competent organization!",
  },
  {
    label: "Client",
    body: "I like how they live up to the high standards of the maritime industry, and at the same time, never lose sight of their individuality and goals. I think they're grounded, goal oriented, and fast-paced.",
  },
  {
    label: "Partners",
    body: "Very responsive and accomodating to the needs of their clients. They go above and beyond what is needed and ensure that every client receives top-notch service and safety",
  },
  {
    label: "Partners",
    body: "This company is a dark horse that continuously brings innovation to the market and challenges old and new players alike. Truly a gem.",
  },
  {
    label: "Partners",
    body: "When it comes to this kind of industry, many companies offer you promises. but this company helps you make things happen.",
  },
];
//gsap.registerPlugin( ScrollSmoother);
const MainContents = ({ actives }) => {
  const [active, setactive] = useState(0);
  const swiperRef = useRef();
  const [videoPop, setvideoPop] = useState("");
  const navigate = useNavigate();
  const [playVid, setplayVid] = useState(false);
  const top = useRef(null);
  useEffect(() => {
    if (top && top.current) {
      const executeScroll = (top) =>
        top.current.scrollIntoView({ behavior: "smooth" });
      executeScroll(top);
      // useMountEffect(executeScroll); // Scroll on mount
    }
  }, []);
  return (
    <Con id="smooth-wrapper" ref={top}>
      <div className="iso">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg"
          alt=""
        />
        <div className="details">
          <h6>CERTIFIED COMPANY</h6>
          <h6>ISO 9001-2015</h6>
        </div>
      </div>
      <div className="backgroundImg">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          style={{ height: "auto", width: "auto" }}
          className="swiper"
          autoplay
        >
          <SwiperSlide className="perSlide" key="">
            <img
              className="img"
              style={{
                height: "auto",
                width: "100%",
                position: "relative",
                zIndex: 5,
              }}
              src={Hero1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="perSlide" key="">
            <img
              className="img"
              style={{
                height: "auto",
                width: "100%",
                position: "relative",
                zIndex: 5,
              }}
              src={Hero2}
              alt=""
            />
            <div className="details1">
              <h1>
                We Help Make Your <br /> Vision Tangible{" "}
              </h1>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="perSlide" key="">
            <img
              className="img"
              style={{
                height: "auto",
                width: "100%",
                position: "relative",
                zIndex: 5,
              }}
              src="https://www.ge.com/news/sites/default/files/Reports/2022-08/serenadeoftheseas_alaska_0.jpg"
              alt=""
            />
          </SwiperSlide> */}
        </Swiper>
      </div>

      <div className="Info">
        <div className="left">
          <div className="wrap">
            <h1>WHAT WE ARE AIMING TO DO FOR YOU</h1>

            <h4>
              Industry Movers Corp. (IMC) came to existence with the aim of
              reaping the possibilities of advancing ocean shipping as an
              industry{" "}
            </h4>
            <p>
              With an initial fleet of 45 vessels, IMC is determined to provide
              fast deliveries without delay and other premium services with
              efficiency, accountability and reliability. Furthermore, the
              company plans to acquire more vessels to improve currently
              provided services and to answer the call for increasing demand in
              the market
            </p>
          </div>
        </div>
        <div className="right">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            style={{ height: "350px", width: "325px" }}
            className="swiper"
          >
            <SwiperSlide className="perSlide">
              <div className="card">
                <div className="header">CORE VALUES</div>
                <div className="details">
                  <p>
                    <span>1</span>Safety
                  </p>

                  <p>
                    <span>2</span>High Level of Accountability
                  </p>

                  <p>
                    <span>3</span>Innovative Solutions
                  </p>

                  <p>
                    <span>4</span>Passion
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="perSlide">
              <div className="card">
                <div className="header">OUR MISSION</div>
                <div className="details">
                  <p>
                    We are a maritime and logitics company that promotes premium
                    services to our valued customer and deals fairlywith our
                    stakeholders in order to build a relationship that is
                    mutually beneficial
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="perSlide">
              <div className="card">
                <div className="header">OUR VISSION</div>
                <div className="details">
                  <p>
                    To be the worldwide leading maritime and logistics company,
                    setting a premium standard; sustainable, innovative, and
                    industrial shipping solutions
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="OurServices">
        <div className="wrap">
          {" "}
          <div className="card">
            {" "}
            <div className="header">
              <h1>OUR SERVICES</h1>
            </div>
            <div className="details">
              <br />
              <p>
                We are offering a sea shipment services across the country with
                most efficient and economical cost.
              </p>
              <h5
                className="btn"
                onClick={() => {
                  navigate("services");
                }}
              >
                OUR SERVICES <BsArrowRight />
              </h5>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              <img src={cargo} />
              <span>01</span>
            </div>
            <div className="details">
              <h4>Loose cargo</h4>

              <p>A loose cargo load, also known as an LCL,...</p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              <img src={cargo} />
              <span>02</span>
            </div>
            <div className="details">
              <h4>Rolling Cargo</h4>

              <p>IMC moves vehicles or trucksFrom the part of the origin...</p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              <img src={cargo} />
              <span>03</span>
            </div>
            <div className="details">
              <h4>Dredging Works</h4>

              <p>
                Dredging generates sufficient room to build significant bridges,
                dykes, and...
              </p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              <img src={cargo} />
              <span>04</span>
            </div>
            <div className="details">
              <h4>Crane Barge- pile driving Works</h4>

              <p>When a weight is put above a pile, it releases...</p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              <img src={cargo} />
              <span>05</span>
            </div>
            <div className="details">
              <h4>Delivery of Aggregates in Bulks</h4>

              <p>Any construction, be a tiny structure, a road, or...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="OurPorts">
        {videoPop ? (
          <div className="video">
            <IoMdClose
              className="icons"
              onClick={() => {
                setvideoPop(false);
              }}
            />
            <VideoPlayer vid={videoPop} />
          </div>
        ) : null}
        <div className="wrap">
          <h1>OUR PORTS</h1>
          <div className="cardWrap">
            {" "}
            <div className="card">
              <img src={Hero1} alt="" />
              <div className="details">
                <h1>HOMEPORTS</h1>
                <p>
                  NCR-Manila| REGION IV-A Batangas| REGION VII - Cebu | REGION
                  VIII - Tacloban \ REGION XII - Gen San | REGION XIII - Surigao
                </p>
                <button
                  onClick={() => {
                    setvideoPop(
                      "https://res.cloudinary.com/ddk57ienn/video/upload/v1675234219/vessels/video/Homeports_rknuuu.mp4"
                    );
                  }}
                >
                  PLAY VIDEO
                </button>
              </div>
            </div>
            <div className="card">
              <img src={Hero2} alt="" />
              <div className="details">
                <h1>SHIPYARDS</h1>
                <p>
                  KEPPEL SHIPYARDS| SEAFRONT SHIPYARD - BATAAN| GENSAN SHIPYARD
                  | MBI SHIPYARD
                </p>
                <button
                  onClick={() => {
                    setvideoPop(
                      "https://res.cloudinary.com/ddk57ienn/video/upload/v1675234317/vessels/video/Shipyard_uwhrkc.mp4"
                    );
                  }}
                >
                  PLAY VIDEO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FindYourCareer">
        <div className="wrap">
          <div className="left">
            {/* <video src=""></video> */}
            {playVid === false ? (
              <div className="thumbNail">
                <img src={Thumbnail} alt="" />
                <button
                  onClick={() => {
                    setplayVid(true);
                  }}
                >
                  <FaRegPlayCircle className="icon" />
                  PLAY VIDEO
                </button>
              </div>
            ) : (
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/k-frYn_SYFc?&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
          </div>
          <div className="right">
            <div className="details">
              <div className="header">
                <h1>FIND YOUR CAREER AT INDUSTRY MOVERS CORP(IMC)</h1>
              </div>
              <p>
                Logistics has always been an important factor in any industry
                that needs transportation of products. it is the movement of
                tangible goods such as materials supplies, equipment and other
                consumables.
              </p>
              <div className="list">
                <span>
                  <h1>MARINE SUPERINTENDENT</h1>{" "}
                  <p>Assemblers and fabricators put together pieces...</p>
                </span>
                <span>
                  <h1>DEPUTY TECHNICAL MANAGERT</h1>{" "}
                  <p>
                    Quality control inspectors examine materials and products...
                  </p>
                </span>

                <h6
                  onClick={() => {
                    navigate("/careers");
                  }}
                >
                  SEE ALL POSITIONS
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="LogisticBanner">
        <div className="wrap">
          <h1>Logistics for the Real World</h1>
          <p>
            We are an integrated maritime company composed of agile and
            experienced maritome engineers skilled in various scopes of
            industrial work, assured plant availability, and operational
            security
          </p>
          <button
            onClick={() => {
              navigate("/team");
            }}
          >
            MEET OUR TEAM <BsArrowRight className="icon" />
          </button>
        </div>
      </div>
      <div className="NewsUpdate">
        <div className="wrap">
          <div className="header">
            <h1>NEWS & UPDATE</h1>
          </div>
          <div className="blogWrap">
            <div className="nav">
              {" "}
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <TfiArrowLeft className="icon" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <TfiArrowRight className="icon" />
              </button>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              // pagination={{ clickable: true }}
              className="swiper"
              //  centeredSlides={true}
              breakpoints={{
                1: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {news.map((newsItem, i) => {
                return (
                  <SwiperSlide
                    className="perSlide"
                    style={{ width: "100%" }}
                    key=""
                  >
                    <div className="card">
                      <img src={newsItem.img} alt={newsItem.title} />
                      <div className="date">
                        <span>08</span>
                        <span>FEB</span>
                      </div>
                      <div className="label">
                        <h6>By {newsItem.author}</h6>
                        <h2>{newsItem.title}</h2>
                        <p>{newsItem.body}</p>
                        <a href={newsItem.link}>
                          Read More <BsArrowRight className="icon" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="Testimonials">
        <div className="wrap">
          <div className="header">
            <h1>TESTIMONIALS</h1>
          </div>

          <div className="swiperCon">
            <div className="">
              {" "}
              <img src={cargo} className="left" alt="" />
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="swiper"
              //  centeredSlides={true}
              breakpoints={{
                1: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                //1200: { slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {testimonials.map((test, i) => {
                return (
                  <SwiperSlide
                    className="perSlide"
                    style={{ width: "100%" }}
                    key=""
                  >
                    <div className="card">
                      <div className="label">
                        <p>{test.body}</p>
                        <h5>{test.label},</h5>
                        <div className="iconCon">
                          <FaStar className="star" />
                          <FaStar className="star" />
                          <FaStar className="star" />
                          <FaStar className="star" />
                          <FaStar className="star" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="">
              <img src={cargo} className="right" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="CompanyPartners">
        <div className="wrap">
          <h1>We work with our partners to provide project perfection</h1>
          <div className="companies">
            <div className="img">
              <img src={MAC} alt="" />
            </div>
            <div className="img">
              <img src={CSC} alt="" />
            </div>
            <div className="img">
              <img src={PMI} alt="" />
            </div>
            <div className="img">
              <img src={Obanana} alt="" />
            </div>
            <div className="img">
              <img src={MBI} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  color: #070707;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & .iso {
    height: 30px;
    display: flex;
    margin-left: 3rem;
    padding-bottom: 10px;
    & img {
      width: 50px;
    }
    & .icon {
      margin-right: 1rem;
    }
    & h6 {
      margin: 0;
      margin-left: 1rem;
      color: #6b6b6b;
    }
  }
  & .video {
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0505053b;
    padding: 3rem 0;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    & .icons {
      position: relative;
      top: -200px;
      left: 620px;
      font-size: 2.9rem;
      cursor: pointer;
      color: #c78b22 !important;
      /* background-color: #ffff; */
      @media (max-width: 768px) {
        top: -30px;
        left: 40vw;
      }
      &:hover {
        -webkit-animation: rotate-90-cw 0.4s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          infinite both;
      }
      @-webkit-keyframes rotate-90-cw {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }
      }
      @keyframes rotate-90-cw {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }
      }
    }
  }
  & .backgroundImg {
    /* box-shadow: inset 0px 0px 100px 75px rgba(0, 0, 0, 0.65); */
    background-color: #1a1446;
    & img {
      // position: absolute;
      width: 100vw;
      max-width: 2400px;
      height: 700px !important;
      //  top: 0;
      object-fit: cover;
      position: absolute;
      z-index: 10;
    }
    & .details1 {
      position: absolute;
      z-index: 90;
      top: 2rem;
      width: 100%;
      text-align: right;
      right: 10%;
      font-size: 2rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      color: #fff;
      @media (max-width: 768px) {
        font-size: 1.5rem;
        /* text-align:center; */
        right: 2%;
      }
    }
    & .swiper {
      height: 700px;
      position: relative;
      z-index: 10;
      & .perSlide {
        z-index: 10;
      }
      & .swiper-button-prev:after,
      .swiper-button-next:after {
        color: #ffffff;
        font-size: 20px;
        background-color: #25252511;
        padding: 1rem;
      }
    }
    & .swiper-pagination-bullet {
      background-color: #c78b22;
      height: 10px;
      width: 10px;
      animation: width-shrink 0.3s ease-in-out both;

      &.swiper-pagination-bullet-active {
        width: 25px;
        border-radius: 25px;
        animation: width-expand 0.3s ease-in-out both;
      }
    }

    @keyframes width-expand {
      0% {
        -webkit-width: 10px;
        width: 10px;
      }
      50% {
        -webkit-width: 20px;
        width: 20px;
      }
      100% {
        -webkit-width: 25px;
        width: 25px;
      }
    }
    @keyframes width-shrink {
      0% {
        -webkit-width: 25px;
        width: 25px;
      }
      50% {
        -webkit-width: 20px;
        width: 20px;
      }
      100% {
        -webkit-width: 10px;
        width: 10px;
      }
    }
  }
  & .Info {
    display: flex;
    flex-wrap: wrap;
    // height: 400px;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    width: 60%;
    margin: auto;
    @media (max-width: 1680px) {
      width: 80%;
    }
    & .left {
      max-width: 600px;
      /* margin: 2rem; */

      & .wrap {
        padding: 1rem;
        max-width: 600px;
        // margin-left: auto;
        // margin-right: 3rem;
        & h1 {
          font-size: 1.3rem;
        }
        & h4 {
          font-size: 1.1rem;
          line-height: 25px;
        }
        & p {
          font-size: 15px;
          line-height: 25px;
          font-weight: 600;
          color: #5e5e5e;
        }
      }
    }
    & .right {
      width: 250px;
      & .swiper {
        display: flex;
        justify-content: center;
        align-items: center;
        & .swiper-pagination {
          display: flex;
          margin-left: 2rem;
          margin-bottom: 4.5rem;
        }
        & .swiper-pagination-bullet {
          background-color: #c78b22;
          height: 10px;
          width: 10px;
          animation: width-shrink 0.3s ease-in-out both;

          &.swiper-pagination-bullet-active {
            width: 25px;
            border-radius: 25px;
            animation: width-expand 0.3s ease-in-out both;
          }
        }

        @keyframes width-expand {
          0% {
            -webkit-width: 10px;
            width: 10px;
          }
          50% {
            -webkit-width: 20px;
            width: 20px;
          }
          100% {
            -webkit-width: 25px;
            width: 25px;
          }
        }
        @keyframes width-shrink {
          0% {
            -webkit-width: 25px;
            width: 25px;
          }
          50% {
            -webkit-width: 20px;
            width: 20px;
          }
          100% {
            -webkit-width: 10px;
            width: 10px;
          }
        }
      }
      & .card {
        width: 250px;
        box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
        margin: auto;
        height: 280px;
        margin-top: 1rem;
        padding: 0 1.2rem;
        & .header {
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #eee;
        }
        & .details {
          padding-top: 1rem;
          & p {
            color: #5e5e5e;
            margin-bottom: -10px;
            /* text-transform: uppercase; */
            font-size: 13px;
            line-height: 23px;

            & span {
              color: #c78b22;
              font-weight: 600;
              font-size: 1rem;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  & .OurServices {
    background-color: #1a1446;
    //height: 600px;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    & .wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 920px;
      & .card {
        // background-color: #eee;
        height: 170px;
        width: 270px;
        border: 1px solid #9999992f;

        padding: 0 1rem;
        & .header {
          height: 50px;
          display: flex;
          // justify-content: center;
          align-items: center;
          // border-bottom: 1px solid #eee;
          color: #eeee;
          /* font-size: 0.8rem; */

          & h1 {
            font-size: 1rem;
          }
          & img {
            height: 50px;
          }
          & span {
            position: relative;
            right: -150px;
            font-size: 1.4rem;
            color: #eeeeee52;
          }
        }
        & .details {
          //  padding-top: 1rem;
          & .btn {
            font-size: 0.7rem !important;
            color: #fff !important;
            cursor: pointer;
          }
          & h4 {
            font-size: 0.9rem;
            color: #d1d1d1;
          }
          & p {
            color: #8b91a7;
            font-size: 13px;
            margin-bottom: -10px;
          }
        }
      }
    }
  }
  & .OurPorts {
    padding: 3rem 0;
    & .wrap {
      width: 70%;
      margin: auto;
      display: flex;
      flex-direction: column;
      @media (max-width: 1293px) {
        width: 80%;
      }
      @media (max-width: 828px) {
        width: 95%;
      }
      h1 {
        font-size: 1.5rem;
        margin-left: 2rem;
      }
      & .cardWrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        & .card {
          width: 300px;
          height: 400px;
          box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
          margin: 1rem;
          @media (max-width: 992px) {
            width: 280px;
          }
          & img {
            width: 100%;
            height: 200px;
          }
          & .details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & h1 {
              font-size: 14px;
              margin-left: 0;
            }
            & p {
              text-align: center;
              font-size: 13px;
              width: 90%;
              color: #5e5e5e;
              margin-bottom: 0.5rem;
              margin: 1rem 0;
              line-height: 20px;
              height: 70px;
            }
            & button {
              border: none;
              font-size: 12px;
              color: #333;
              padding: 10px 20px;
              margin-bottom: 1rem;
              cursor: pointer;
              &:hover {
                background-color: #c78b22;
                color: #ffff;
              }
            }
          }
        }
      }
    }
  }
  & .FindYourCareer {
    padding: 3rem 0;
    & .wrap {
      width: 80%;
      margin: auto;
      display: flex;
      padding: 1rem 0;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      & .left {
        width: 500px;
        & video,
        img {
          width: 500px;
        }
        & button {
          position: relative;
          top: -3.3rem;
          left: 385px;
          border: none;
          background-color: #c78a22c0;
          color: #fff;
          padding: 0.5rem;
          font-size: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          & .icon {
            font-size: 2rem;
            margin-right: 10px;
          }
          &:hover .icon {
            transform: scale(0.7);
            animation: transform 1s;
          }
        }
      }
      & .right {
        width: 500px;
        & .details {
          margin: 1rem;
          margin-left: 2rem;
          & .header {
            margin-bottom: 1rem;
            & h1 {
              font-size: 1.5rem;
            }
          }
          & p {
            color: #5e5e5e;
            line-height: 25px;
          }
          & .list {
            margin-left: 2rem;
            & span {
              & h1 {
                font-size: 1rem;
              }
            }
            & h6 {
              font-size: 0.8rem;
              cursor: pointer;
              &:hover {
                color: #c78a22;
              }
            }
          }
        }
      }
    }
  }
  & .LogisticBanner {
    background-color: #1a1446;
    //height: 600px;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    & .wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 60%;

      & h1 {
        color: #e6e6e6;
        font-size: 1.5rem;
      }
      & p {
        color: #acacac;
        font-size: 1rem;
        line-height: 30px;
        text-align: center;
      }
      & button {
        border: none;
        background-color: #c78b22;
        padding: 13px 20px;
        border-radius: 20px;
        font-size: 13px;
        color: #ffffff;
        margin-top: 1rem;
        display: flex;
        cursor: pointer;
        & .icon {
          font-size: 1rem;
          margin: auto 10px;
        }
      }
    }
  }
  & .NewsUpdate {
    padding: 3rem 0;
    & .wrap {
      display: flex;
      flex-direction: column;
      width: 60%;
      margin: auto;
      & .header {
        & h1 {
          font-size: 1.5rem;
        }
      }
      & .blogWrap {
        padding-top: 1rem;
        & .nav {
          display: flex;
          justify-content: flex-end;
          margin: 1rem;
          & button {
            border-radius: 100%;
            height: 35px;
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border: 1px solid #ccc;
            margin: 0 6px;
            cursor: pointer;
          }
        }
        & .swiper {
          & .perSlide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & .card {
            border: 1px solid #eee;
            width: 300px;
            & img {
              height: 200px;
              width: 100%;
              //object-fit: cover;
            }
            & .date {
              position: absolute;
              top: 1rem;
              background-color: #ffffff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 50px;
              width: 50px;
              border-radius: 5px;
              margin-left: 1rem;
              & span {
                font-size: 0.8rem;
                font-weight: 600;
                margin-bottom: 3px;
              }
            }
            & .label {
              padding: 1rem;
              & h6 {
                color: #5e5e5e;
                font-weight: 600;
              }
              & h2 {
                font-weight: 400;
                font-size: 1rem;
              }
              & p {
                color: #5e5e5e;
                font-size: 14px;
                line-height: 25px;
                white-space: wrap;
                overflow: hidden;
                text-overflow: "...";
                height: 100px;
              }
              & a {
                display: flex;
                margin-top: 0;
                text-decoration: none;
                color: #1a1446;
                & .icon {
                  margin-left: 0.5rem;
                }
              }
            }
          }
        }
      }
    }
  }
  & .Testimonials {
    padding: 3rem 0;
    background-color: #f1f1f1;
    & img {
      height: 50px;
      background-color: #fff;
      padding: 10px;
      border-radius: 100%;
      position: absolute;
      margin: 0 1rem;
      margin-top: 7rem;
      &.left {
        left: 15vw;
        @media (max-width: 1292px) {
          left: 10vw;
        }
        @media (max-width: 992px) {
          left: 0;
        }
      }
      &.right {
        right: 15vw;
        @media (max-width: 1292px) {
          right: 10vw;
        }
        @media (max-width: 992px) {
          right: 0;
        }
      }
    }
    & .wrap {
      width: 70%;
      margin: auto;
      & .header {
        & h1 {
          text-align: center;
          font-size: 1.5rem;
        }
      }

      & .swiperCon {
        margin-top: 2rem;
        display: flex;
        & .circle {
          height: 70px !important;
          width: 70px !important;
          margin: auto 1rem;
          background-color: #fff;
          border-radius: 100%;
        }
        & .swiper {
          width: 80%;
          height: 300px;
          & .swiper-pagination-bullet {
            background-color: #c78b22;
            height: 10px;
            width: 10px;
            animation: width-shrink 0.3s ease-in-out both;
            position: relative;

            &.swiper-pagination-bullet-active {
              width: 25px;
              border-radius: 25px;
              animation: width-expand 0.3s ease-in-out both;
            }
          }

          @keyframes width-expand {
            0% {
              -webkit-width: 10px;
              width: 10px;
            }
            50% {
              -webkit-width: 20px;
              width: 20px;
            }
            100% {
              -webkit-width: 25px;
              width: 25px;
            }
          }
          @keyframes width-shrink {
            0% {
              -webkit-width: 25px;
              width: 25px;
            }
            50% {
              -webkit-width: 20px;
              width: 20px;
            }
            100% {
              -webkit-width: 10px;
              width: 10px;
            }
          }
          & .perSlide {
            display: flex;
            justify-content: center;
            align-items: center;
            & .card {
              background-color: #fff;
              padding: 1rem;
              width: 300px;
              & p {
                font-size: 13px;
                color: #8b91a7;
              }
              & h5 {
                font-size: 13px;
              }
              & .iconCon {
                color: #b3b3b3;
                margin-top: -1rem;
                font-size: 13px;

                & .star {
                  color: #cfb53b;
                }
              }
            }
          }
        }
      }
    }
  }
  & .CompanyPartners {
    padding: 3rem 0;
    & .wrap {
      width: 70%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & h1 {
        font-size: 1.5rem;
      }
      & .companies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        & .img {
          height: 70px;
          width: 170px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem;
          border: 1px solid #dfdfdf;
          & img {
            height: 70px;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export default MainContents;
