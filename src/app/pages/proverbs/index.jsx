import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getProverbs } from "./../../actions/proverbs";

class ProverbsList extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getProverbs(100);
  }

  render() {
    return (
      <div>
        <p>Proverbs</p>
        <main>
          <h1>Proverbs List</h1>
          <ul className="list-group">
            {this.props.currentProverbs
              ? Object.keys(this.props.currentProverbs).map(key => {
                  const proverb = this.props.currentProverbs[key];
                  return (
                    <li className="list-group-item" key={key}>
                      <Link to={`/proverbs/details/${key}`}>
                        {proverb.combinedProverb}
                      </Link>
                    </li>
                  );
                })
              : <h2>Loading</h2>}
          </ul>
        </main>
      </div>
    );
  }
}

ProverbsList.propTypes = {
  currentProverbs: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProverbs }, dispatch);
}

function mapStateToProps({ proverbs }) {
  return { currentProverbs: proverbs.currentProverbs };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProverbsList);
