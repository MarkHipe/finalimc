import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { AiFillCheckCircle } from "react-icons/ai";

const GetAQuote = () => {
  const top = useRef(null);
  const form = useRef();
  const [success, setsuccess] = useState(false);

  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [company, setcompany] = useState("");
  const [type, settype] = useState("");
  const [message, setmessage] = useState("");
  useEffect(() => {
    if (top && top.current) {
      const executeScroll = (top) =>
        top.current.scrollIntoView({ behavior: "smooth" });
      executeScroll(top);
      // useMountEffect(executeScroll); // Scroll on mount
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zzobcjs",
        "template_2knrk2d",
        form.current,
        "2ES5K8EJE6kR47XYQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          if (result.text === "OK") {
            setsuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    setname("");
    settype("");
    setcompany("");
    setnumber("");
    setmessage("");
  };

  return (
    <Con ref={top}>
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="half">
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                onChange={(event) => setname(event.target.value)}
                value={name}
              />
              <input
                name="user_company"
                type="text"
                placeholder="Company Name"
                onChange={(event) => setcompany(event.target.value)}
                value={company}
              />
            </div>
            <div className="half">
              <input
                name="user_number"
                type="text"
                placeholder="Phone"
                onChange={(event) => setnumber(event.target.value)}
                value={number}
              />
              <select
                name="user_type"
                id="type"
                onChange={(event) => settype(event.target.value)}
                value={type}
              >
                <option name="user_type" value="no chosen type">
                  Select Type of Vessel
                </option>

                <option value="Land Craft Tank(LCT)">
                  Land Craft Tank(LCT)
                </option>
                <option value="TUGBOAT">TUGBOAT</option>
                <option value="BARGE">BARGE</option>
                <option value="CARGOI SHIP, DEDGER AND BULK CARRIER">
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
              onChange={(event) => setmessage(event.target.value)}
              value={message}
            ></textarea>
            <input
              type="text"
              name="from_name"
              hidden={true}
              value="IMC Website"
            />
            <input type="text" name="to_name" hidden={true} value="IMC" />

            <input className="button" type="submit" value="SUBMIT NOW" />
            {success ? (
              <p>
                Message Sent Successfully{" "}
                <AiFillCheckCircle style={{ color: "#7bda00" }} />
              </p>
            ) : null}
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
      textarea,
      select {
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
      & .button {
        background-color: #c78b22;
        border-radius: 20px;
        color: #fff;
        padding: 13px;
        font-size: 10px;
        border: none;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          background-color: #915e08;
        }
      }
    }
    & p {
      font-size: 13px;
    }
  }
`;
export default GetAQuote;
