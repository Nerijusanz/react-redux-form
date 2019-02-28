import React from "react";
import { PropTypes } from "prop-types";
import { reduxForm, Field } from "redux-form";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { userLocationRequest } from "../../redux/sagas/userLocationSaga";

const submit = (values, dispatch) => {

    dispatch(userLocationRequest(values));

};

const renderInput = ({ input, label, meta, custom }) => {
  const error = meta.touched && meta.error;

  const inputValid = (
    <Input name={input.name} placeholder={input.name} {...input} {...custom} />
  );
  const inputInvalid = (
    <Input
      invalid
      name={input.name}
      placeholder={input.name}
      {...input}
      {...custom}
    />
  );
  const errorMessage = (
    <Alert color="danger">
      {input.name} {meta.error}
    </Alert>
  );

  return (
    <div>
      <FormGroup>
        <Label for={input.name}>{input.name}</Label>
        {error && errorMessage}

        {error ? inputInvalid : inputValid}
      </FormGroup>
    </div>
  );
};

const renderSelect = ({ input, label, meta, children, custom }) => {
  const error = meta.touched && meta.error;

  const inputValid = (
    <Input
      type="select"
      name={input.name}
      placeholder={input.name}
      {...input}
      {...custom}
    >
      {children}
    </Input>
  );
  const inputInvalid = (
    <Input
      type="select"
      invalid
      name={input.name}
      placeholder={input.name}
      {...input}
      {...custom}
    >
      {children}
    </Input>
  );
  const errorMessage = (
    <Alert color="danger">
      {input.name} {meta.error}
    </Alert>
  );

  return (
    <div>
      <FormGroup>
        <Label for={input.name}>{input.name}</Label>
        {error && errorMessage}

        {error ? inputInvalid : inputValid}
      </FormGroup>
    </div>
  );
};

const validate = values => {
  const { location, username, country } = values;

  const errors = {};

  if (!username || username.trim() === "") errors.username = ` required`;
  if (!location || location.trim() === "") errors.location = ` required`;
  if (!country || country === "choose country") errors.country = `required`;

  return errors;
};

const LocationForm = ({ handleSubmit, submitting }) => {
  const countries = ["Lithuania", "Poland", "Latvia", "Estonia", "Russia"];

  const selectOptionsList = countries.map((country, index) => (
    <option key={index} value={country}>
      {country}
    </option>
  ));
  return (
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <Field name="username" component={renderInput} />
        <Field name="location" component={renderInput} />
        <Field name="country" component={renderSelect}>
          <option>choose country</option>
          {selectOptionsList}
        </Field>
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

LocationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: "locationForm",
  destroyOnUnmount: false, // for wizzard form, dont eraze data
  validate
})(LocationForm);
