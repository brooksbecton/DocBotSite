import React from "react";
import { Link } from "react-router";

export default () =>
  <div>
    <div className="jumbotron">
      <h1>Doc Bot Proverbs</h1>
      <h2>Today's Proverb</h2>
      <p>People who live in glass houses, sink ships.</p>

      <Link to={"proverbs/submit"}>
        <button className="btn btn-primary btn-lg" role="button">
          Submit a Proverb
        </button>
      </Link>
    </div>
  </div>;
