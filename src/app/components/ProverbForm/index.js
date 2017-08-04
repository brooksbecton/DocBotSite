import React from "react";
import { Field, reduxForm } from "redux-form";

let ProverbForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="proverbText">Proverb</label>
        <Field name="proverbText" component="input" type="text" />
      </div>{" "}
      <button type="submit">Submit</button>
    </form>
  );
};

ProverbForm = reduxForm({
  // a unique name for the form
  form: "proverb"
})(ProverbForm);

export default ProverbForm;
