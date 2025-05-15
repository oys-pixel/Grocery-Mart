import React, { useState } from "react";
import "./login.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

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
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot Password?</a>
              <button>Login</button>
              <p>
                Not a Member?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              {/* You can add signup fields here */}
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
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

export default AuthForm;
