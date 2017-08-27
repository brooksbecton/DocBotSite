import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { fetchUser, logoutUser } from "./../../actions/firebase_actions";

const Nav = styled.nav`margin-bottom: 20px;`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.navButton;

    this.props.fetchUser();
    this.logOut = this.logOut.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    this.navButton = document.getElementById("mobileNavButton");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentUser !== null) {
      this.props.fetchUser();
    }
  }

  closeNav(isLinkClick) {
    if (window.innerWidth < 992) {
      this.navButton.click();
    }
  }

  logOut() {
    this.props.logoutUser().then(data => {
      // reload props from reducer
      this.props.fetchUser();
    });
  }

  renderUserMenu(currentUser) {
    // if current user exists and user id exists than make user navigation
    if (currentUser) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {currentUser.email}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item">
              <Link
                onClick={() => this.closeNav()}
                to="/logout"
                onClick={this.logOut}
              >
                Logout
              </Link>
            </li>
            <li className="dropdown-item">
              <Link onClick={() => this.closeNav()} to="/profile">
                Profile
              </Link>
            </li>
          </div>
        </div>
      );
    }
    return [
      <li className="nav-item" key={1}>
        <Link onClick={() => this.closeNav()} className="nav-link" to="/login">
          Login
        </Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link
          onClick={() => this.closeNav()}
          className="nav-link"
          to="/register"
        >
          Register
        </Link>
      </li>
    ];
  }

  render() {
    return (
      <Nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          id="mobileNavButton"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="navbar-brand">
          Doc Bot
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link onClick={() => this.closeNav()} className="nav-link" to="/">
                {" "}Home
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link
                onClick={() => this.closeNav()}
                className="nav-link"
                to="/about"
              >
                {" "}About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => this.closeNav()}
                className="nav-link"
                to="/proverbs/"
              >
                Proverbs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => this.closeNav()}
                className="nav-link"
                to="/proverbs/submit/"
              >
                {" "}Submit
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            {this.renderUserMenu(this.props.currentUser)}
          </ul>
        </div>
      </Nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, logoutUser }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
