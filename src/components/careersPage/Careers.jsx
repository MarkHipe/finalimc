import React from "react";
import { AiFillFileText } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VideoPlayer from "../VideoPlayer";
import Hero2 from "../../assets/hero-section/17 edited.jpg";
import { useRef } from "react";
import { useEffect } from "react";

const career = [
  {
    title: "Company Fleet Safety Officer",
    pos: "Full Time",
    loc: "Makati City",
  },
  {
    title: "Fleet Management Associate",
    pos: "Full Time",
    loc: "Makati City",
  },
  {
    title: "Employee Relations & Training and Development Specialist",
    pos: "Full Time",
    loc: "Makati City",
  },
];

const Careers = () => {
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
    <Con ref={top}>
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
      <div
        className="wrap"
        style={{
          background: `url(${Hero2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={Hero2} alt="" />
        <div className="overlay"></div>
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <BsArrowRight className="icon" />
          <Link className="link" to="/careers">
            Careers
          </Link>
        </div>
        <h1>Careers</h1>
      </div>
      <div className="wrapper">
        <h1>Join us in our growing Team!</h1>

        <div className="cardWrapper">
          {career.map((car, i) => {
          return(
            <div className="card">
            <div className="label">
              <h6>{car.title}</h6>
              <h2>{car.pos}</h2>
              <h2>{car.loc}</h2>
              <h5>
                More Details <BsArrowRight className="icon" />
              </h5>
            </div>
          </div>
          )
          })}
        </div>
      </div>
      {/* <VideoPlayer/> */}
    </Con>
  );
};
const Con = styled.div`
  padding: 3rem 0;
  padding-top: 0;
  & .iso {
    height: 30px;
    display: flex;
    margin-left: 3rem;
    padding-bottom: 10px;
    & .icon {
      margin-right: 1rem;
    }
    & h6 {
      margin: 0;
      margin-left: 1rem;
      color: #6b6b6b;
    }
  }
  & .wrap {
    /* background-color: #1A1446 ; */
    height: 200px;
    width: 100vw;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .overlay {
      position: absolute;
      height: 200px;
      width: 100vw;
      background-color: #1a1446c8;
    }
    & img {
      width: 100vw;
      object-fit: cover;
      position: absolute;
    }
    & h1 {
      color: #fff;
      text-align: center;
      text-transform: capitalize;
      font-size: 25px;
      padding-bottom: 3rem;
      position: relative;
    }
    & .nav {
      display: flex;
      width: 80%;
      margin: auto;
      padding: 1rem;
      position: relative;

      & .link {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
      }
      & .icon {
        color: #fff;
        margin: 0 10px;
      }
    }
  }
  & .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h1 {
      font-size: 1.2rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    & .cardWrapper {
      margin-top: 3rem;
      max-width: 620px;
      margin: auto 0;
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      flex-wrap: wrap;
      & .card {
        position: relative;
        border: 1px solid #eee;
        width: 300px;
        margin: 1rem auto;
        & img {
          height: 100px;
          width: 100%;
          object-fit: cover;
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
          padding: 0 1rem;
          & h6 {
            color: #000000;
            font-weight: 600;
            font-size: 16px;
            margin: 10px auto;
          }
          & h2 {
            font-weight: 400;
            font-size: 13px;
            color: #5e5e5e;
          }
          & p {
            color: #5e5e5e;
            font-size: 14px;
            line-height: 25px;
          }
          & h5 {
            display: flex;
            margin-top: 0;
            font-size: 12px;
            color: #c78b22;

            & .icon {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
`;

export default Careers;
