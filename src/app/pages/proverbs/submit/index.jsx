import React, { Component } from "react";

import ProverbForm from "./../../../components/ProverbForm/";

export default class SubmitProverb extends React.Component {
  constructor() {
    super();
    this.submitProverb = this.submitProverb.bind(this);
  }

  submitProverb(values) {
    console.log("Submit Proverb");
    console.log(values);
  }

  render() {
    return (
      <div>
        {" "}<h1>Submit a Proverb</h1>
        <ProverbForm onSubmit={this.submitProverb} />
      </div>
    );
  }
}
