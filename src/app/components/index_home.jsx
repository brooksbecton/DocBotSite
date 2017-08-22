import React from "react";
import { Link } from "react-router";

export default () =>
  <div>
    <div className="jumbotron">
      <h1>Doc Bot Proverbs</h1>
      <section>
        <h2>Today's Proverb</h2>
        <p>People who live in glass houses, sink ships. </p>
      </section>

      <Link to={"proverbs/submit"}>
        <button className="btn btn-primary btn-lg" role="button">
          Submit a Proverb
        </button>
      </Link>
    </div>

    <div className="row">
      <section className="col-md-4">
        <h3>About</h3>
        <p>
          Doc is a bot that generates mismatced proverbs. He is based off of the
          'Doc' character from the movie, 'Boondock Saints.'
        </p>
      </section>
      <section className="col-md-4">
        <h3>Proverbs Library</h3>
        <p>
          Proverbs are made by picking and choosing proverbs from a repository.
          The list of proverbs is still very small. Please help contribute to
          the repository of proverbs by{" "}
          <Link to="/proverbs/submit">submitting proverbs</Link>
        </p>
      </section>
      <section className="col-md-4">
        <h3>Twiter Feed</h3>
        <div>Twitter here</div>
      </section>
    </div>
  </div>;
