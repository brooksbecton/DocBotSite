import React from "react";
import HeroImage from "./../components/HeroImage/";

const About = () =>
  <div>
    <h1>About</h1>

    <HeroImage
      src="http://lorempixel.com/1000/300/people"
      alt="Doc, an older man, at the bar"
    />
    <h2>The Doc Bot</h2>
    <p>
      The bot that the site is built around tries to build proverbs by joining
      sentences on conjuctions. In the future, the bot will use natural language
      tools to join sentences on different types of words, such as verbs or
      nouns.{" "}
    </p>

    <p>
      Code fot the bot can be found in it's{" "}
      <a href="https://github.com/brooksbecton/DocTwitterBot">Github Repo</a>
    </p>
  </div>;

export default About;
