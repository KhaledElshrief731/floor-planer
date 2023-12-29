import React, { useState } from "react";
import axios from "axios";
import joi from "joi";
import { useNavigate } from "react-router-dom";
import stsyels from "./login.module.css";
import { Link } from "react-router-dom";

export default function Login({ saveUSerData }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/");
  };
  let goToRegister = () => {
    navigate("/register");
  };

  let submitFormData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let validationResponse = validateFormData();
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
      setLoading(false);
    } else {
      let { data } = await axios.post(
        "https://movies-api.routemisr.com/signin",
        user
      );
      console.log(data);

      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        goToHome();
        saveUSerData();
        setLoading(false);
      } else {
        setErrorMsg(data.message);
        setLoading(false);
      }
    }
  };
  let validateFormData = () => {
    const schema = joi.object({
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
  let getInputValue = (e) => {
    let myUser = { ...user }; //1  deep copy
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  return (
    <div className="   d-flex justify-content-center  align-items-center">
      <div
        className={`w-100 row  g-3 align-items-center py-5 px-2  my-4 ${stsyels.info}`}
      >
        <div className=" col-md-6 ">
          <h1>Welcome Ai-Architect</h1>
          <p className=" text-muted py-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit
          </p>
          <div className="  text-center">
            <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1703109277/qq2rauho2rngbr3mw0e9.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6   ">
          <h4 className=" text-muted  text-center ">Login Form</h4>
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
                don't have an account ? <Link to='/register' onClick={goToRegister}>Sign Up</Link>
              </div>
              <button className="btn btn-info  float-end">
                {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
