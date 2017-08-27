import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;

const FooterLi = styled.li`list-style-type: none;`;

const Footer = () =>
  <FooterStyle>
    <div>
      <h5>Pages</h5>
      <ul>
        <FooterLi>
          <Link to="/">Home</Link>
        </FooterLi>
        <FooterLi>
          <Link to="/proverbs/">Proverbs</Link>
        </FooterLi>
        <FooterLi>
          <Link to="/proverbs/submit">Submit</Link>
        </FooterLi>
      </ul>
    </div>
    <div>
      <h5>Social</h5>
      <ul>
        <FooterLi>
          <a href="//twitter.com/docdailyproverb">Twitter</a>
        </FooterLi>
        <FooterLi>
          <a href="//github.com/brooksbecton/DocTwitterBot">Github</a>
        </FooterLi>
      </ul>
    </div>

    <div>
      <h5>Contact</h5>
      <ul>
        <FooterLi>
          Email:{" "}
          <a href="mailto:doctwitterbot@gmail.com">doctwitterbot@gmail.com</a>
        </FooterLi>
      </ul>
    </div>
  </FooterStyle>;

export default Footer;
