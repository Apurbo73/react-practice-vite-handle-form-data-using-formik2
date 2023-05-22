import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const SignUp = () => {
  //   const [name, setname] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pass: ""
    },
    validationSchema: yup.object({
      name: yup.string().min(3, "Name Must have Three Characters").required(),
      email: yup.string().email().required(),
      pass: yup.string().min(6, "Name Must have Six Characters").required()
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    }
  });
  //   console.log(first);
  // handle Change:
  //   const handleChange = e => {
  //     const name = e.target.name;
  //     if (name === "name") {
  //       setname(e.target.value);
  //     }
  //     if (name === "email") {
  //       setEmail(e.target.value);
  //     }
  //     if (name === "pass") {
  //       setPass(e.target.value);
  //     }
  //   };
  // handle Submit:
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const user = {
  //       name,
  //       email,
  //       pass
  //     };
  //     console.log(user);
  //   };
  return (
    <div>
      <h2 className="text-center mb-4 mt-5">Sign Up Here</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column container w-25">
          <input
            className="mb-2"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name &&
            <span>
              {formik.errors.name}
              <br />
            </span>}
          <input
            className="mb-2"
            type="email"
            name="email"
            value={formik.values.email}
            placeholder="Enter your email"
            onChange={formik.handleChange}
          />
          {formik.errors.email &&
            <span>
              {formik.errors.email}
            </span>}
          <input
            className="mb-2"
            type="password"
            name="pass"
            value={formik.values.pass}
            placeholder="Enter your password"
            onChange={formik.handleChange}
          />
          {formik.errors.pass &&
            <span>
              {formik.errors.pass}
            </span>}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
