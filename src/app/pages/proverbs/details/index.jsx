import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { bindActionCreators } from "redux";
import { getProverbById } from "./../../../actions/proverbs";

export class ProverbDetail extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ id: this.props.params.id });
  }

  componentDidMount() {
    this.props.getProverbById(this.state.id);
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/proverbs">Proverbs</Link>
        </div>
        {this.props.proverb &&
          <div>
            <h1>
              {this.props.proverb.combinedProverb}
            </h1>
            <h3> Details</h3>
            <ul>
              <li>
                <strong>Date:</strong>
                {this.props.proverb.date}
              </li>
              <li>
                <strong>Proverb 1:</strong>
                {this.props.proverb.proverb}
              </li>
              <li>
                <strong>Proverb 2 :</strong>
                {this.props.proverb.matchingProverb}
              </li>
              <li>
                <strong>Pivot:</strong>
                {this.props.proverb.pivot}
              </li>
            </ul>
          </div>}
      </div>
    );
  }
}

function mapStateToProps({ proverbs }) {
  return { proverb: proverbs.proverb };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProverbById }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProverbDetail);
