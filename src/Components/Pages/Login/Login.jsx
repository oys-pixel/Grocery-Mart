import { useState } from "react";
import "./login.css";
import Formic from "../Contact/Formic";
import MyLogin from "../Contact/MyLogin";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  // throw new Error("Test error");
  return (
    <div className="myContainer  ">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>

        {isLogin ? (
          <MyLogin AonClick={() => setIsLogin(false)} />
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <Formic />
              <p>
                Already a Member?{" "}
                <a href="#" onClick={() => setIsLogin(true)}>
                  Login here
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
