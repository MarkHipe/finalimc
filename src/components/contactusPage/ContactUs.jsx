import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FiPhoneCall, FiClock, FiMail } from "react-icons/fi";
import IMC from "../../assets/IMC.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillFileText } from "react-icons/ai";
import Hero2 from "../../assets/hero-section/17 edited.jpg";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
// import env from "react-dotenv";
const ContactUs = () => {
  const form = useRef();
  const top = useRef(null);
  const [success, setsuccess] = useState(false);

  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [company, setcompany] = useState("");
  const [email, setemail] = useState("");
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
        "template_q9hx72j",
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
    setemail("");
    setcompany("");
    setnumber("");
    setmessage("");
  };
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
          <Link className="link" to="/contactus">
            Contact Us
          </Link>
        </div>
        <h1>Contact Us</h1>
      </div>
      <div className="wrapper">
        <div className="header">
          <h1>QUICK CONTACT</h1>
          <h5>
            Do you have questions? Speak with a professional, knowledgeable
            dispatch representative about your requirements and to arrange your
            delivery.
          </h5>
        </div>
        <div className="contactWrap">
          <div className="info">
            <div className="wraps">
              <span>
                <FiPhoneCall className="icon" />
                <div className="details">
                  <h4>Call Us:</h4>
                  <h6>+63 (02) 7003-5009</h6>
                </div>
              </span>
              <span>
                <FiMail className="icon" />
                <div className="details">
                  <h4>Mail Us:</h4>
                  <h6>commercial@industrymoverscorp.com</h6>
                </div>
              </span>
              <span>
                <FiClock className="icon" />
                <div className="details">
                  <h4>Office Hrs:</h4>
                  <h6>Monday - Friday 7:00 AM - 5:30 PM</h6>
                </div>
              </span>
            </div>
            <div className="img">
              <img src={IMC} alt="" />
            </div>
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
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setemail(event.target.value)}
                  value={email}
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
                <input
                  name="user_company"
                  type="text"
                  placeholder="Company"
                  onChange={(event) => setcompany(event.target.value)}
                  value={company}
                />
              </div>
              <input
                type="text"
                name="from_name"
                hidden={true}
                value="IMC Website"
              />
              <input type="text" name="to_name" hidden={true} value="IMC" />

              <textarea
                name="message"
                id=""
                cols="30"
                rows="6"
                placeholder="Message"
                onChange={(event) => setmessage(event.target.value)}
                value={message}
              ></textarea>

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
        <iframe
          style={{ width: "100%", height: "300px" }}
          class="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61785.01760195091!2d120.94545583125!3d14.566930599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9845f69b05f%3A0x6ddfb27268e26969!2sPMI%20Tower!5e0!3m2!1sen!2sph!4v1675243688246!5m2!1sen!2sph"
        ></iframe>
      </div>
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
    max-width: 780px;
    margin: auto;
    & .header {
      display: flex;
      flex-wrap: wrap;
      & h1 {
        font-size: 1.3rem;
        white-space: nowrap;
        margin: 1rem;
      }
      & h5 {
        font-size: 13px;
        color: #6b6b6b;
        margin: 1rem;
        font-weight: 100;
      }
    }
    & .contactWrap {
      display: flex;
      /* height: 300px; */
      border: 1px solid #eee;
      flex-wrap: wrap;
      padding: 1rem;
      & .info {
        width: 270px;
        border: 1px solid #e5e5e5;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        & .wraps {
          padding: 1rem;
          background-color: #ebebeb;
          & span {
            /* padding: 0 1rem; */
            display: flex;
            border-bottom: 1px solid #d3d3d3;
            align-items: center;
            height: 50px;
            text-align: left;
            & .icon {
              font-size: 1rem;
              color: #c78b22;
              width: 30px;
              // margin-right: 1rem;
            }
            & .details {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              margin-left: 0.5rem;
              & h4 {
                margin: 0;
                font-size: 13px;
                white-space: nowrap;
                font-weight: 100;
              }
              & h6 {
                margin: 0;
                color: #6b6b6b;
                white-space: nowrap;
                font-weight: 100;
              }
            }
          }
        }
        & .img {
          width: 100%;
          background-color: #fff;
          & img {
            height: 90px;
          }
        }
      }
      & .formCon {
        padding: 1rem;
        margin: auto;
        & form {
          & input,
          textarea {
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
          }
          & .button {
            background-color: #c78b22;
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
          & p {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
export default ContactUs;
