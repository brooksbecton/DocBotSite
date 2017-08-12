import React, { Component } from "react";
import PropTypes from "prop-types";

class ProverbsList extends Component {
  render() {
    return (
      <div>
        <h1>Proverbs List</h1>
        <ul>
          <li>Anger and prepare for the worst.</li>
          <ul>
            <li>
              <strong>Date</strong>: 08/17/2017
            </li>
            <li>
              <strong>Proverb</strong>: "Hope for the best and prepare for the
              worst."
            </li>
            <li>
              <strong>Pivot</strong>: and
            </li>
            <li>
              <strong>Matching Proverb</strong>: Anger and hate hinder good
              counsel.
            </li>
          </ul>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
          <li>Blahblah blah blah blah blah</li>
        </ul>
      </div>
    );
  }
}

ProverbsList.propTypes = {};

export default ProverbsList;
