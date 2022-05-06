import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(10, "Name is too long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(10, "Name is too long")
    .required("Required"),
  userName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("No password provided."),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const validate = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log("Sign up", values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={() => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="Binod" type="text" />

            <ErrorMessage
              name="firstName"
              component="div"
              className="field-error"
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Sharma" type="text" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="field-error"
            />
            <br />
            <br />

            <label htmlFor="userName">User Name</label>
            <Field name="userName" placeholder="binod0233" type="text" />
            <ErrorMessage
              name="userName"
              component="div"
              className="field-error"
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="binod@gmail.com" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="field-error"
            />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <Field name="password" placeholder="password" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="field-error"
            />
            <br />
            <br />

            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <Field
              name="passwordConfirmation"
              placeholder="password"
              type="password"
            />
            <ErrorMessage
              name="passwordConfirmation"
              component="div"
              className="field-error"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
export default validate;
