import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const GetAQuote = () => {
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
    <Con  ref={top}>
      <div className="wrap">
        <div className="heading">
          {" "}
          <h1>GET A QUOTE</h1>
          <h6>
            Get a free quote for your industrial or engineering business
            solutions, We are here 24/7
          </h6>
        </div>
        <div className="formCon">
          <form action="">
            <div className="half">
              <input name="name" type="text" placeholder="Name" />
              <input name="email" type="email" placeholder="Company Name" />
            </div>
            <div className="half">
              <input name="phone" type="text" placeholder="Phone" />
              <select name="cars" id="cars">
              <option value="volvo">Select Type of Vessel</option>

                <option value="volvo">Land Craft Tank(LCT)</option>
                <option value="saab">TUGBOAT</option>
                <option value="mercedes">BARGE</option>
                <option value="audi">
                  CARGOI SHIP, DEDGER AND BULK CARRIER
                </option>
              </select>
            </div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
            ></textarea>
            <button>SEND NOW</button>
          </form>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  & .wrap {
    width: 440px;
    margin: auto;
  }
  & .formCon {
    padding: 1rem;
    margin: auto;
    & form {
      & input,
      textarea, select {
        border: none;
        background-color: #ebebeb;
        padding: 10px;
        margin: 10px;
        &:focus {
          border: none;
          outline: none;
        }
      }
      & textarea {
        width: 90%;
      }
      & .half {
        display: flex;
        width: 100%;
      }
      & button {
        background-color: #c78b22;
        border-radius: 20px;
        color: #fff;
        padding: 13px;
        font-size: 10px;
        border: none;
        margin-left: 10px;
      }
    }
  }
`;
export default GetAQuote;
