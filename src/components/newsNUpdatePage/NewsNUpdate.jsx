import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Hero2 from "../../assets/hero-section/17 edited.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { news } from "./news";
import { useEffect } from "react";
import { useRef } from "react";

const NewsNUpdate = () => {
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
      <div className="wrap">
        <img src={Hero2} alt="" />
        <div className="overlay"></div>
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <BsArrowRight className="icon" />
          <Link className="link" to="/news">
            News and Update
          </Link>
        </div>
        <h1>News and Update</h1>
      </div>
      <div className="wrapper">
        {news.map((newsItem, i) => {
          return (
            <div className="card">
              <img
                src={newsItem.img}
                alt={newsItem.title}
              />
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
          );
        })}
      </div>
    </Con>
  );
};

const Con = styled.div`
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
    padding: 3rem 0;

    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width:1200px){
      width: 60%;
    }
    & .card {
      position: relative;
      border: 1px solid #eee;
      width: 90%;
      margin: 10px;
      & img {
        height: 250px;
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
        padding: 1rem;
        & h6 {
          color: #5e5e5e;
          font-weight: 600;
        }
        & h2 {
          font-weight: 400;
        }
        & p {
          color: #5e5e5e;
          font-size: 14px;
          line-height: 25px;
          height: 80px;
          white-space: wrap;
          overflow: hidden;
          text-overflow: "...";
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
`;

export default NewsNUpdate;
