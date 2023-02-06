import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Hero2 from "../assets/hero-section/17 edited.jpg";
import { useRef } from "react";
import { useEffect } from "react";

const services = [
  {
    label: "DELIVERY OF AGGREGATES IN BULK",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231849/services/AGGREGATES_1_kytwio.png",
    details:
      "Any construction, be it a tiny structure, a road, or even a skyscraper, needs to use a lot of high-quality raw materials. When it comes to the building industry, the value of a solid foundation cannot be overstated. We also cater the delivery of aggregates in bulk. ",
  },
  {
    label: "ROLLING CARGO",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231950/services/ROLLING_CARGO_2_o6mwtw.png",
    details:
      "IMC moves vehicles or trucks. From the port of origin to the port of destination, we handle the loading, transportation, and discharge of your trucks, vehicles, or three wheelers.",
  },
  {
    label: "PRE-STRESS CONCRETE PILES/ PRE-CAST CARGO",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231946/services/CONCRETE_PILES_niin1j.png",
    details:
      "We ship pre-stress concrete piles / pre-cast cargo from the port of origin to the port of destination",
  },
  {
    label: "DREDGER VESSEL - DREDGING WORKS",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231942/services/DREDGER_VESSEL_OR_DREDGING_WORKS_qezocc.jpg",
    details:
      "Dredging generates sufficient room to build significant bridges, dykes, and dams and eliminates silt, intoxicants, and pollutants from the bottom of the water. It also removes deposits that have percolated underwater to clear the water pathway for ships to pass.",
  },
  {
    label: "CRANE BARGE - PILE DRIVING WORKS",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231958/services/PILES_3_apem0v.png",
    details:
      "When a weight is put above a pile, it releases, slides down vertically, and strikes the pile, forcing it into the ground. This is how traditional pile driving machines operate. Using hydraulics, steam, or diesel power, the weight is lifted mechanically. The weight is released after it has reached its heaviest point.",
  },
  {
    label: "LOOSE CARGO",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231948/services/LOOSE_CARGO1_k06lbe.png",
    details:
      "A loose cargo load, also known as an LCL, is a load that is not palletized. This term refers to shipments that do not need to be palletized and/or cannot be containerized due to their dimensions. Loose cargo is sometimes used to describe goods that have not yet been palletized",
  },
  {
    label: "TOWING",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231944/services/TOWING4_ok89ea.jpg",
    details:
      "a commercial vessel performing, or preparing to perform, the act of pulling, pushing, or hauling alongside, or any combination of pulling.",
  },
  {
    label: "TUG-ASSIST",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231946/services/TUG_ASSIST_4_frthz0.jpg",
    details:
      "Mega-ships require a specific kind of boat called a tug to dock in a port. Tug boats can be used to supply the vessel with necessities like water, air, and other things in addition to their primary function of dragging the vessel towards the harbor. Numerous tugs push and/or pull in order to hold, move slowly, and/or position the floating object when assisting a vessel.",
  },
  {
    label: "DELIVERY OF GENERAL CARGO NATIONWIDE",
    img: "https://res.cloudinary.com/ddk57ienn/image/upload/v1675231944/services/GENERAL_CARGO_2_pkkvn2.jpg",
    details:
      "General cargo, as used in logistics, refers to items that can be shipped separately and intact. These units are typically referred to as groupage freight if they are gathered from various shippers and assembled into larger units.",
  },
];

const ServicesSingle = () => {
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
        <div className="detail">
          <h6>CERTIFIED COMPANY</h6>
          <h6>ISO 9001-2015</h6>
        </div>
      </div>
      <div className="wraps">
        <img src={Hero2} alt="" />
        <div className="overlay"></div>
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <BsArrowRight className="icon" />
          <Link className="link" to="/services">
            Our Services
          </Link>
        </div>
        <h1>Our Services</h1>
      </div>
      <div className="wrapper">
        <div className="wrap">
          {services.map((serve, i) => {
            return (
              <div className="cardWrap">
                <div className="card">
                  {serve.img ? <img src={serve.img} alt={serve.label} /> : null}
                  <div className="details">
                    <h1>{serve.label}</h1>
                    <p>{serve.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
      color: #6b6b6b !important;
    }
  }
  & .wraps {
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

    & h1 {
      text-align: center;
      font-size: 1.5rem;
    }
    & .wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      /* align-items: center; */

      & .cardWrap {
        display: flex;
        justify-content: center;
        /* align-items: center; */
        /* width: 100%; */
        flex-wrap: wrap;
        & .card {
          width: 550px;
          box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.1);
          margin: 1rem;
          padding: 1rem;
          @media (max-width: 768px) {
            width: 80vw;
          }
          & img {
            width: 100%;
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
              text-align: left;
              font-size: 13px;
              width: 90%;
              color: #5e5e5e;
              margin-bottom: 0.5rem;
              line-height: 24px;
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
`;
export default ServicesSingle;
