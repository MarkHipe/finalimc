import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import IMC from "../assets/IMC.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Con>
      <div className="wrap">
        <div className="wrapper">
          <img src={IMC} alt="" />
          <p>
            Industry Movers corp.(IMC) came to existence with the aim of reaping
            the possibilities of advancing ocean shipping as an industry.
          </p>
          <div className="contacts">
            <span>
              <GoLocation className="icon" />
              Main Office:
              <br />
              1423 The Mondrian Bldg., P. Ocampo Sr. Makati City, Philippines
            </span>
            <span>
              Main Office:
              <br />
              <FiPhoneCall className="icon" />
              +63(02) 7003-5009
            </span>
          </div>
        </div>
        <div className="wrapper">
          <h1>Our Categories</h1>
          <span className="line"></span>
          <div className="list">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>
            <p
              onClick={() => {
                navigate("/about");
              }}
            >
              About Us
            </p>
            <p
              onClick={() => {
                navigate("/news");
              }}
            >
              News & Update
            </p>
            <p
              onClick={() => {
                navigate("/ourfleet");
              }}
            >
              Our Fleet
            </p>
            <p
              onClick={() => {
                navigate("/carees");
              }}
            >
              Careers
            </p>
            <p
              onClick={() => {
                navigate("/contactus");
              }}
            >
              Contact Us
            </p>
          </div>
        </div>
        <div className="wrapper">
          <h1>Information</h1>
          <span className="line"></span>
          <div className="list">
            <p>Testimonials</p>
            <p
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              Privacy Policy
            </p>
            <p
              onClick={() => {
                navigate("/terms&conditions");
              }}
            >
              Terms and Conditions
            </p>
          </div>
        </div>
        <div className="wrapper">
          <h1>Our Services</h1>
          <span className="line"></span>
          <div className="list">
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Loose cargo
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Rolling Cargo
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Dredging Works
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Crane Barge - Pile Driving Works
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Delivery of Aggregates in Bulk
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Pre - Stress concrete Files/Pre - Cast cargo
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Towing
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Tug Assists
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Delivery of General Cargo Nationwide
            </p>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  background-color: #1a1446;
  padding: 3rem 0;
  & .wrap {
    display: flex;
    /* justify-content: space-around; */
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* align-items: center; */
    color: #88b4c9;

    & .wrapper {
      display: flex;
      flex-direction: column;
      padding: 10px;
      width: 250px;
      margin: 0 auto;
      & .contacts {
        display: flex;
        flex-direction: column;
        & span {
          font-size: 13px;
          line-height: 20px;
          & .icon {
            color: #c58803;
            margin-right: 10px;
          }
          margin: 10px 0;
        }
      }
      img {
        width: 150px;
        margin-bottom: 1rem;
        background-color: #fff;
        padding: 10px;
      }
      & h1 {
        font-size: 1rem;
      }
      & span {
      }
      & p {
        font-size: 14px;
        color: #c6dae4;
        margin-top: -3px;
        cursor: pointer;
        &:hover {
          color: #c58803;
        }
      }
    }
  }
`;
export default Footer;
