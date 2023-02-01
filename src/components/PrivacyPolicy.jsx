import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Privacypolicy = () => {
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
      <div className="wrap">
        <h3>Privacy Policy</h3>
        <p>
          This website is operated by INDUSTRY MOVERS CORP. (IMC) and whose
          registered address is 1423 The Mondrian Bldg., Pablo Ocampo Sr., Ext.
          San Antonio Village, Makati City. IMC committed to protecting and
          preserving the privacy of our visitors when visiting our site or
          communicating electronically with us. This policy sets out how we
          process any personal data we collect from you or that you provide to
          us through our website. We confirm that we will keep your information
          secure and that we will comply fully with all applicable Philippine
          laws and regulations. Please read the following carefully to
          understand what happens to personal data that you choose to provide to
          us, or that we collect from you when you visit this site. By visiting
          our website, you are accepting and consenting to the practices
          described in this policy.
        </p>
        <h3>Types of information we may collect from you</h3>
        <p>
          We may collect, store and use the following kinds of personal
          information about individuals who visit and use our website:
        </p>
        <ul>
          <li>
            Information you supply to us. You may supply us with information
            about you by filling in forms on our website. This includes
            information you provide when you submit a contact/enquiry form [list
            any other active forms on your website (ie. Request a Prospectus
            Form, Application Form, Report and Absence Form, etc.]. The
            information you give us may include your name, address, e-mail
            address and phone number, [list any other types of information you
            collect via other active forms on your website (ie. child’s name,
            child’s date of birth, etc.)].
          </li>
          <li>
            Information our website automatically collects about you. With
            regard to each of your visits to our website we may automatically
            collect information including the following:
          </li>
          <li>
            technical information, including a truncated and anonymized version
            of your Internet protocol (IP) address, browser type and version,
            operating system and platform;
          </li>
          <li>
            information about your visit, including what pages you visit, how
            long you are on the site, how you got to the site (including date
            and time); page response times, length of visit, what you click on,
            documents downloaded and download errors.
          </li>
        </ul>
        <h3>Cookies</h3>
        <p>
          Our website uses cookies to distinguish you from other users of our
          website. This helps us to provide you with a good experience when you
          browse our website and also allows us to improve our site.
        </p>
        <h3>How We May Use The Information We Collect</h3>
        <p>We use the information in the following ways:</p>
        <ul>
          <li>
            <span>
              {" "}
              Information you supply to us. We will use this information
            </span>{" "}
            to provide you with information and/or services that you request
            from us;
          </li>
          <li>
            <span>
              {" "}
              Information we automatically collect about you. We will use this
              information:
            </span>{" "}
            to administer our site including troubleshooting and statistical
            purposes;
          </li>
          <li>
            to improve our site to ensure that content is presented in the most
            effective manner for you and for your computer;
          </li>
          <li>
            security and debugging as part of our efforts to keep our site safe
            and secure.
          </li>
        </ul>
        <p>
          This information is collected anonymously and is not linked to
          information that identifies you as an individual.
        </p>
        <h3>Disclosure of your information</h3>
        <p>
          Any information you provide to us will either be emailed directly to
          us or may be stored on a secure server provided by our Information
          Technology Department. We do not rent, sell or share personal
          information about you with other people or non-affiliated companies.
          We will use all reasonable efforts to ensure that your personal data
          is not disclosed to regional/national institutions and authorities,
          unless required by law or other regulations.
        </p>
        <p>
          Unfortunately, the transmission of information via the internet is not
          completely secure. Although we will do our best to protect your
          personal data, we cannot guarantee the security of your data
          transmitted to our site; any transmission is at your own risk. Once we
          have received your information, we will use strict procedures and
          security features to try to prevent unauthorized access.
        </p>
        <h3>Third party links</h3>
        <p>
          Our site may, from time to time, contain links to and from the third
          party websites. If you follow a link to any of these websites, please
          note that these websites have their own privacy policies and that we
          do not accept any responsibility or liability for these policies.
          Please check these policies before you submit any personal data to
          these websites.
        </p>
        <h3>Your rights – access to your personal data</h3>
        <p>
          You have the right to ensure that your personal data is being
          processed lawfully. Your subject access right can be exercised in
          accordance with data protection laws and regulations. Any subject
          access request must be made in writing to
          legal@industrymoverscorp.com. We will provide your personal data to
          you within the statutory time frames. To enable us to trace any of
          your personal data that we may be holding, we may need to request
          further information from you.
        </p>
        <h3>Changes to our privacy policy</h3>
        <p>
          Any changes we may make to our privacy policy in the future will be
          posted on this page and, where appropriate, notified to you by e-mail.
          Please check back frequently to see any updates or changes to our
          privacy policy.
        </p>
        <h3>Contact</h3>
        <p>
          Questions, comments and requests regarding this privacy policy are
          welcomed and should be addressed to legal@industrymoverscorp.com.
        </p>
      </div>
    </Con>
  );
};
const Con = styled.div`
  & .wrap {
    width: 70%;
    margin: auto;
    padding: 3rem 0;
    & p {
      line-height: 24px;
    }
    & ul {
      /* list-style: none; */
      & li {
        margin: 10px;
        line-height: 24px;
        & span {
          font-weight: 600;
        }
      }
    }
  }
`;
export default Privacypolicy;
