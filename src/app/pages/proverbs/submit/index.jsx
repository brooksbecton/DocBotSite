import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, logoutUser } from "../../../actions/firebase_actions";

import { saveProverb } from "./../../../actions/proverbs";
import ProverbForm from "./../../../components/ProverbForm/";

export class SubmitProverb extends React.Component {
  constructor() {
    super();

    this.state = { proverbSubmitted: false };

    this.submitProverb = this.submitProverb.bind(this);
  }

  submitProverb({ proverbText }) {
    this.props.saveProverb(proverbText, this.props.currentUser.uid);
    this.setState({ proverbSubmitted: true });
  }

  render() {
    return (
      <div>
        <p>
          <Link to="/proverbs/">Proverbs</Link> | Submit
        </p>
        <main>
          <h1>Submit a Proverb</h1>
          <p>Add to the repository of proverbs that Doc pulls from.</p>
          {this.state.proverbSubmitted
            ? <p>
                <em>Proverb Submitted!</em>
              </p>
            : <div>
                {" "}<ProverbForm onSubmit={this.submitProverb} />
              </div>}
        </main>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveProverb }, dispatch);
}
function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitProverb);
