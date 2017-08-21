import React, { PropTypes } from "react";
import { Field, reduxForm } from "redux-form";
import Label from "./../Label";

let ProverbForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="proverbText">Proverb</Label>
        <Field name="proverbText" component="input" type="text" />
        <button className="btn" type="submit">
          Submit
        </button>
      </div>{" "}
    </form>
  );
};

ProverbForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

ProverbForm = reduxForm({
  // a unique name for the form
  form: "proverb"
})(ProverbForm);

export default ProverbForm;
