import React, { useState } from "react";
import axios from "axios";
import joi from "joi";
import { useNavigate } from "react-router-dom";
import  "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "abdo",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  let submitFormData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let validationResponse = validateFormData();
    console.log(validationResponse);
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
      setLoading(false);
    } else {
      let { data } = await axios.post(
        "https://movies-api.routemisr.com/signup",
        user
      );
      console.log(data);
      if (data.message === "success") {
        goToLogin();
        setLoading(false);
      } else {
        setErrorMsg(data.message);
        setLoading(false);
      }
    }
  };

  let validateFormData = () => {
    const schema = joi.object({
      first_name: joi.string().alphanum().required().min(3).max(15),
      last_name: joi.string().alphanum().required().min(2).max(10),
      email: joi
        .string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: joi
        .string()
        .required()
        .pattern(new RegExp(/^[a-z 0-9]{6,15}$/)),
    });
    return schema.validate(user, { abortEarly: false });
  };

  let goToLogin = () => {
    navigate("/login");
  };

  let getInputValue = (e) => {
    let myUser = { ...user }; //1  deep copy
    myUser[e.target.name] = e.target.value; //nadia
    setUser(myUser);
    // console.log(myUser);
  };

  return (
    <div className=" w-100 d-flex justify-content-center align-items-center">
      <div
        className={` w-100 row g-3  align-items-center py-5 px-2  my-4 info`}
      >
        <div className=" col-md-6    ">
          <h1>Welcome Ai-Architect</h1>
          <p className=" text-muted py-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit
          </p>
          <div className="  text-center">
            <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1703109277/qq2rauho2rngbr3mw0e9.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6   ">
          <h4 className=" text-muted text-center ">Registeration Form</h4>
          {errorsList.map((error, index) => (
            <div
              key={index}
              className="alert alert-danger w-100  m-auto text-center p-2 my-2"
            >
              {error.message}
            </div>
          ))}

          {errorMsg ? (
            <div className="alert alert-danger m-auto  text-center p-2">
              {errorMsg}
            </div>
          ) : (
            ""
          )}
          <form className=" " onSubmit={submitFormData}>
            <div className="input-data my-2">
              <label htmlFor="first_name">Name</label>
              <input
                onChange={getInputValue}
                type="text"
                className="form-control my-2"
                name="first_name"
              />
            </div>

            <div className="input-data my-2">
              <label htmlFor="email">Email</label>
              <input
                onChange={getInputValue}
                type="email"
                className="form-control my-2"
                name="email"
              />
            </div>
            <div className="input-data my-2">
              <label htmlFor="password">Password</label>
              <input
                onChange={getInputValue}
                type="password"
                className="form-control my-2"
                name="password"
              />
            </div>
            <div className=" d-flex justify-content-between py-4 ">
              <div>
                You have an account? <Link to="/Login" onClick={goToLogin}>Sign in</Link>
              </div>
              <button className="btn btn-info  float-end">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
