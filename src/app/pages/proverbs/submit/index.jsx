import React, { Component } from "react";

import ProverbForm from "./../../../components/ProverbForm/";

export default class SubmitProverb extends React.Component {
  constructor() {
    super();
    this.submitProverb = this.submitProverb.bind(this);
  }

  submitProverb() {
    console.log("Submit Proverb");
  }

  render() {
    return (
      <div>
        {" "}<h1>Submit a Proverb</h1>
        <ProverbForm handeSubmit={() => this.submitProverb} />
      </div>
    );
  }
}
