import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "./../Routes";

const MainContainer = styled.div`min-height: 100vh;`;

class App extends Component {
  componentDidUpdate() {
    // Scrolling to top when their is a change
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />

        <MainContainer className="container">
          <Routes />
        </MainContainer>

        <Footer />
      </div>
    );
  }
}

export default App;
