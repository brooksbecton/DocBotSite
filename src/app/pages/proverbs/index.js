import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getProverbs } from "./../../actions/proverbs";

class ProverbsList extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log(this.props.currentProverbs);
    this.props.getProverbs(10);
  }

  render() {
    return (
      <div>
        <h1>Proverbs List</h1>
        <ul>
          {this.props.currentProverbs &&
            Object.keys(this.props.currentProverbs).map(key => {
              const proverb = this.props.currentProverbs[key];
              return (
                <li key={key}>
                  {proverb.combinedProverb}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

ProverbsList.propTypes = {};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProverbs }, dispatch);
}

function mapStateToProps({ proverbs }) {
  console.log(proverbs);
  return { currentProverbs: proverbs.currentProverbs };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProverbsList);
