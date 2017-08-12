import React from "react";
import { Field, reduxForm } from "redux-form";
import Label from "./../Label";
let ProverbForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="proverbText">Proverb</Label>
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
