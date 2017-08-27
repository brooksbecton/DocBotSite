import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getProverbById } from "./../../../actions/proverbs";

export class ProverbDetail extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.id });
  }

  componentDidMount() {
    this.props.getProverbById(this.state.id);
  }

  render() {
    return (
      <div>
        <div>
          <p>
            <Link to="/proverbs/">Proverbs</Link> | Details
          </p>
        </div>
        {this.props.proverb
          ? <div>
              <div className="card">
              <div className="card-block">
                  <h1 className="card-title">
                  {this.props.proverb.combinedProverb}
                </h1>
                  <ul className="list-group">
                  <li className="list-group-item">
                      <strong>Date:</strong>
                      {this.props.proverb.date}
                    </li>
                  <li className="list-group-item">
                      <strong>Proverb:</strong>
                      {this.props.proverb.proverb}
                    </li>
                  <li className="list-group-item">
                      <strong>Proverb:</strong>
                      {this.props.proverb.matchingProverb}
                    </li>
                  <li className="list-group-item">
                      <strong>Pivot:</strong>
                      {this.props.proverb.pivot}
                    </li>
                </ul>
                </div>
            </div>
            </div>
          : <p>Loading</p>}
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
