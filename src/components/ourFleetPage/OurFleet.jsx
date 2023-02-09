import React, { useEffect, useRef, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero2 from "../../assets/hero-section/17 edited.jpg";
import { vessels } from "./vessel.js";

const OurFleet = () => {
  const [tabActive, settabActive] = useState("view");
  const [show, setshow] = useState(vessels);
  const [selected, setselected] = useState();
  // console.log([vessels.filter((o) => o.type === "BARGE")]);
  const top = useRef(null);
  const top1 = useRef(null);
  useEffect(() => {
    if (top1 && top1.current) {
      const executeScroll = (top) =>
        top1.current.scrollIntoView({ behavior: "smooth" });
      executeScroll(top1);
      // useMountEffect(executeScroll); // Scroll on mount
    }
  }, []);
  useEffect(() => {
    if (selected) {
      if (top && top.current) {
        const executeScroll = (top) =>
          top.current.scrollIntoView({ behavior: "smooth" });
        executeScroll(top);
        // useMountEffect(executeScroll); // Scroll on mount
      }
    }
  }, [selected]);

  return (
    <Con ref={top1}>
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
          <Link className="link" to="/ourfleet">
            Our Fleet
          </Link>
        </div>
        <h1>Our Fleet</h1>
      </div>
      <div className="wrapper">
        <div className="details">
          <div className="left">
            <h1>OUR VESSELS</h1>

            <h6>Philippines a Premier source of seafares</h6>
            <p>
              Each year, thw Philippines produces effective maritime
              professionals and has been consistently referred to as a premier
              source of seafarers. A rise in the number of local mariners
              coupled with the growing need for global transport services and
              more improved local logistics has resulted to Filipino seafarers
              being more proficient in this specific line of work compared to
              their foreign counterparts.
            </p>
            <button>CONTACT US</button>
          </div>
          <div className="right">
            <img src={Hero2} alt="" />
          </div>
        </div>
        <h1 ref={top}>OUR FLEET</h1>
        {!selected ? (
          <div className="tabCon">
            <span
              className={tabActive === "view" ? "active" : ""}
              onClick={() => {
                settabActive("view");
                setshow(vessels);
              }}
            >
              View All
            </span>
            <span
              className={tabActive === "barge" ? "active" : ""}
              onClick={() => {
                settabActive("barge");
                setshow(vessels.filter((o) => o.type === "BARGE"));
              }}
            >
              Barge
            </span>
            <span
              className={tabActive === "landing" ? "active" : ""}
              onClick={() => {
                settabActive("landing");
                setshow(vessels.filter((o) => o.type === "Landing Craft Tank"));
              }}
            >
              Landing Craft Tank
            </span>
            <span
              className={tabActive === "tug" ? "active" : ""}
              onClick={() => {
                settabActive("tug");
                setshow(vessels.filter((o) => o.type === "MTUG/TUGBOAT"));
              }}
            >
              Tug Boats
            </span>
            <span
              className={tabActive === "dredger" ? "active" : ""}
              onClick={() => {
                settabActive("dredger");
                setshow(vessels.filter((o) => o.type === "DREDGER"));
              }}
            >
              Dredger
            </span>
            <span
              className={tabActive === "bulk" ? "active" : ""}
              onClick={() => {
                settabActive("bulk");
                setshow(vessels.filter((o) => o.type === "BULK CARRIER"));
              }}
            >
              Bulk Carriers
            </span>
          </div>
        ) : null}
        {selected ? (
          <span
            className="backBtn"
            onClick={() => {
              setselected("");
            }}
          >
            <BsArrowLeft className="icon" /> Back to List
          </span>
        ) : null}
        {selected ? (
          <div className="wrapDetails" id="wrapDetails">
            <div className="left">
              <img src={selected?.img} alt="" />
            </div>
            <div className="right">
              <div className="header">
                <h1>{selected?.name}</h1>
              </div>
              <h4>{selected?.type}</h4>
              <h6>details</h6>
              <div className="list">
                <ul>
                  <li>
                    <span>Length:</span>
                    <p>{selected?.length}</p>
                  </li>
                  <li>
                    <span>Breadth:</span>
                    <p>{selected?.breadth}</p>
                  </li>
                  <li>
                    <span>Depth:</span>
                    <p>{selected?.depth}</p>
                  </li>
                  {selected?.capacity ? (
                    <li>
                      <span>Capacity:</span>
                      <p>{selected?.capacity}</p>
                    </li>
                  ) : null}

                  {selected?.dwt ? (
                    <li>
                      <span>DWT/MT:</span> <p>{selected?.dwt}</p>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="cardWrapper">
            {show?.map((vess, i) => {
              return (
                <div className="card">
                  <img src={vess.img} alt="" />

                  <div className="label">
                    <h6>{vess.name}</h6>
                    <h2>{vess.type}</h2>

                    <h5
                      onClick={() => {
                        setselected(vess);
                      }}
                    >
                      GO THROUGH <BsArrowRight className="icon" />
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Con>
  );
};
const Con = styled.div`
  padding: 3rem 0;
  padding-top: 0;
  & .backBtn {
    cursor: pointer;
    color: #c78b22;
    font-size: 12px;
    margin-top: 2rem;
    display: flex;
    align-self: flex-start;
    margin-left: 3rem;
    & .icon {
      animation: side-slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
        both;
      @keyframes side-slide {
        0% {
          transform: translate(0px);
        }
        50% {
          transform: translateX(-10px);
        }
        100% {
          transform: translate(0px);
        }
      }
    }
  }
  & .wrapDetails {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem 0;

    & .left {
      /* width: 50%; */
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 200px;
        min-width: 250px;
        object-fit: cover;
      }
    }
    & .right {
      margin-top: 2rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      width: 200px;
      /* height: 200px; */
      /* margin: auto; */
      margin-left: 2rem;
      padding: 10px 15px;
      border: 1px solid #eee;

      & .header {
        border-bottom: 1px solid #ccc;
        & h1 {
          font-size: 1.2rem;
          margin: 5px 0;
        }
      }
      & h4 {
        font-size: 0.9rem;
        margin: 5px 0;
        color: #242424;
      }
      & h6 {
        text-transform: uppercase;
        font-weight: 600;
        margin: 5px 0;
        font-size: 0.9rem;
        color: #383838;
      }
      & .list {
        display: flex;
        & ul {
          text-decoration: none;
          list-style: none;
          li {
            text-decoration: none;
            white-space: nowrap;
            font-size: 0.9rem;
            display: flex;
            justify-content: space;
            align-items: center;
            height: 23px;
            & span {
              font-size: 0.8rem;
              margin-right: 10px;
              font-weight: 600;
              width: 60px;
              color: #5e5e5e;
            }
          }
        }
      }
    }
  }
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    width: 80%;
    margin: auto;
    & .details {
      background-color: #eee;
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
      & .left {
        width: 400px;
        padding: 1rem;
        & h1 {
          font-size: 1rem;
          text-align: left;
          margin-top: 2rem;
        }
        & h6 {
        }
        & p {
          font-size: 13px;
          line-height: 18px;
          color: #838383;
        }
        & button {
          background-color: #c78b22;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 12px;
        }
      }
      & .right {
        width: 400px;
        padding: 1rem;
        & img {
          width: 100%;
        }
      }
    }
    & h1 {
      font-size: 1.5rem;
      text-align: center;
    }
    & .tabCon {
      margin: auto;
      margin-top: 2.5rem;
      & span {
        padding: 10px;
        border-top: 3px solid #eee;
        font-size: 13px;
        cursor: pointer;
        white-space: nowrap;
        &.active {
          border-top: 3px solid #c78b22;
          color: #c78b22;
        }
        &:hover {
          border-top: 3px solid #838383;
          color: #838383;
        }
      }
    }
    & .cardWrapper {
      margin: auto;
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      /* width: 80%; */

      & .card {
        position: relative;
        border: 1px solid #eee;
        width: 200px;
        margin: 10px 5px;
        &:hover {
          & h5 .icon {
            animation: side-slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              infinite both;
            @keyframes side-slide {
              0% {
                transform: translate(0px);
              }
              50% {
                transform: translate(10px);
              }
              100% {
                transform: translate(0px);
              }
            }
          }
        }
        & img {
          height: 130px;
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
            color: #5e5e5e;
            font-weight: 600;
            font-size: 13px;
            margin: 10px auto;
          }
          & h2 {
            font-weight: 400;
            font-size: 13px;
            color: #c78b22;
          }
          & p {
            color: #5e5e5e;
            font-size: 14px;
            line-height: 25px;
          }
          & h5 {
            display: flex;
            margin-top: 0;
            font-size: 11px;
            cursor: pointer;
            & .icon {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
export default OurFleet;
