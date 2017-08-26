import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;
const Footer = () =>
  <FooterStyle>
    <div>
      <h5>Pages</h5>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/proverbs/">Proverbs</Link>
        </li>
        <li>
          <Link to="/proverbs/submit">Submit</Link>
        </li>
      </ul>
    </div>
    <div>
      <h5>Social</h5>
      <ul>
        <li>
          <a href="//twitter.com/docdailyproverb">Twitter</a>
        </li>
        <li>
          <a href="//github.com/brooksbecton/DocTwitterBot">Github</a>
        </li>
      </ul>
    </div>

    <div>
      <h5>Contact</h5>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:doctwitterbot@gmail.com">doctwitterbot@gmail.com</a>
        </li>
      </ul>
    </div>
  </FooterStyle>;

export default Footer;
