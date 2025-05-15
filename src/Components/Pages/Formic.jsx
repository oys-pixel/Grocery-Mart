import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import GettingValues from "./OtherForm";
import Creatable from "../Slecte2";
import { useNavigate } from "react-router-dom";
import { decryptData, encryptData } from "../Encryption";

function Formic() {
  const [formData, setFormData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Only digits allowed")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    Password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
        "Password must be at least 8 characters, include letters, numbers, and at least one special character"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .required("Required"),
    skills: Yup.array()
      .min(1, "Please select at least one skill")
      .required("Required"),
    gender: Yup.string().required("Please Enter your Gender").min(1),
    terms: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
    skill: Yup.array()
      .of(Yup.string())
      .min(1, "Select at least one category")
      .required("Category is required"),
    // skill: Yup.string().required("Category is required"),
  });
  const checkingEmail = (email) => {
    return formData.some(
      (item, abc) => item.email === email && abc !== editIndex
    );
  };
  const navigate = useNavigate();
  const onSubmit = (values, actions) => {
    const emailExists = checkingEmail(values.email);
    if (emailExists) {
      myForm.setFieldError("email", "Email already exists");
      toast.error("This email already exists!");
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
      return;
    }
    if (editIndex !== null) {
      const updated = [...formData];
      updated[editIndex] = values;
      setFormData(updated);
      encryptData("formData", updated);
      setEditIndex(null);
      toast.success("Form updated!");
    } else {
      const dataTaken = [...formData, values];
      setFormData(dataTaken);
      encryptData("formDat", dataTaken);
      toast.success("Form Submitted!");
      // navigate("/home", { replace: true });
    }
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 2000);
    myForm.resetForm();
  };
  const skillOptions = ["HTML", "PHP", "CSS", "JavaScript", "React", "Node.js"];
  const handleEdit = (index) => {
    const item = formData[index];
    myForm.setValues(item);
    setEditIndex(index);
  };
  const handleDelete = (abc) => {
    const updated = formData.filter((_, i) => i !== abc);
    setFormData(updated);
    encryptData("formData", updated);
    toast.info("Item deleted successfully");
  };
  const myForm = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      Password: "",
      confirmPassword: "",
      skill: [],
      skills: [],
      gender: "",
      terms: false,
    },
    validationSchema,
    onSubmit,
  });
  useEffect(() => {
    const data = decryptData("formData");
    if (data) setFormData(data);
  }, []);

  useEffect(() => {
    setSelected(() =>
      myForm.values.skill
        ? //   { value: myForm.values.skill, label: myForm.values.skill }
          // : null
          myForm.values.skill.map((item) => ({
            value: item,
            label: item,
          }))
        : []
    );
  }, [myForm.values.skill]);
  return (
    <>
      <form onSubmit={myForm.handleSubmit} className="col-md-6 mx-auto py-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={myForm.values.name}
            onBlur={myForm.handleBlur}
            onChange={myForm.handleChange}
          />
          {myForm.touched.name && myForm.errors.name && (
            <div className="text-danger">{myForm.errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="text"
            className="form-control"
            name="number"
            value={myForm.values.number}
            onBlur={myForm.handleBlur}
            onChange={myForm.handleChange}
          />
          {myForm.touched.number && myForm.errors.number && (
            <div className="text-danger">{myForm.errors.number}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={myForm.values.email}
            onBlur={myForm.handleBlur}
            onChange={myForm.handleChange}
          />
          {myForm.touched.email && myForm.errors.email && (
            <div className="text-danger">{myForm.errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="Password"
            value={myForm.values.Password}
            onBlur={myForm.handleBlur}
            onChange={myForm.handleChange}
          />
          {myForm.touched.Password && myForm.errors.Password && (
            <div className="text-danger">{myForm.errors.Password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={myForm.values.confirmPassword}
            onBlur={myForm.handleBlur}
            onChange={myForm.handleChange}
          />
          {myForm.touched.confirmPassword && myForm.errors.confirmPassword && (
            <div className="text-danger">{myForm.errors.confirmPassword}</div>
          )}
        </div>
        <div className="mb-3 mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="html"
              name="skills"
              onChange={myForm.handleChange}
              checked={myForm.values.skills.includes("html")}
            />
            <label className="form-check-label" htmlFor="html">
              HTML
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="js"
              name="skills"
              onChange={myForm.handleChange}
              checked={myForm.values.skills.includes("js")}
            />
            <label className="form-check-label" htmlFor="js">
              JavaScript
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="css"
              name="skills"
              onChange={myForm.handleChange}
              checked={myForm.values.skills.includes("css")}
            />
            <label className="form-check-label" htmlFor="css">
              CSS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="skills"
              onChange={(e) => {
                const checked = e.target.checked;
                const mySkills = ["html", "css", "js"];
                myForm.setFieldValue("skills", checked ? mySkills : []);
              }}
              checked={["html", "css", "js"].every((skill) =>
                myForm.values.skills.includes(skill)
              )}
            />
            <label className="form-check-label" htmlFor="html">
              All
            </label>
          </div>
          {myForm.errors.skills && myForm.touched.skills && (
            <div className="text-danger">{myForm.errors.skills}</div>
          )}
        </div>
        <Creatable
          name="skill"
          onBlur={myForm.setFieldTouched}
          onChange={myForm.setFieldValue}
          value={selected}
          options={skillOptions.map((s) => ({ value: s, label: s }))}
          isMulti={true}
          isClearable={false}
          // isLoading={false}
        />
        {myForm.touched.skill && myForm.errors.skill && (
          <div className="text-danger">{myForm.errors.skill}</div>
        )}
        <div className="mt-3 d-flex justify-content-around">
          <label className="form-check-label" htmlFor="gender">
            Please select your Gender
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              checked={myForm.values.gender === "Male"}
              onChange={myForm.handleChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={myForm.values.gender === "Female"}
              onChange={myForm.handleChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        {myForm.errors.gender && myForm.touched.gender && (
          <div className="text-danger">{myForm.errors.gender}</div>
        )}
        <div className=" mt-4 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="terms"
            onChange={myForm.handleChange}
            checked={myForm.values.terms}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the Terms and Conditions
          </label>
          {myForm.errors.terms && myForm.touched.terms && (
            <div className="text-danger">{myForm.errors.terms}</div>
          )}
        </div>
        <div className="col-md-12 d-flex ">
          <button
            type="submit"
            className="btn btn-primary d-flex justify-content-evenly align-items-center"
            disabled={myForm.isSubmitting}
            onClick={myForm.handleSubmit}
          >
            {myForm.isSubmitting === true ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-warning d-flex align-items-center mx-2"
            onClick={() => {
              myForm.handleReset();
            }}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-light d-flex align-items-center mx-2"
            onClick={() =>
              myForm.setValues({
                name: "John Doe",
                number: "12",
                email: "johndoe@example.com",
                Password: "qwerty2#",
                confirmPassword: "qwerty2#",
                skill: ["html"],
                skills: ["html", "js"],
                gender: "Male",
                terms: true,
              })
            }
          >
            My Values
          </button>
        </div>
        {myForm.isValidating === true && <p>Validating...</p>}
      </form>
      {/* <button
        className="btn btn-dark mx-5"
        onClick={() => localStorage.removeItem("formData")}
      >
        Clear Localstorage
      </button> */}
      <GettingValues
        data={formData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default Formic;
