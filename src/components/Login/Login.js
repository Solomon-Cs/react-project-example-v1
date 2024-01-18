import React from "react";
import "./Login.css";
import profile from "../Image/profile.jpg";
import email from "../Image/email.jpg";
import password from "../Image/password.jpg";
import { Button, Input } from "reactstrap";

function Login() {
  return (
    <>
      <div className="main1">
        <div className="sub">
          <div>
            <div className="images_container">
              <img src={profile} alt="profile" className="profile" />
            </div>
            <div>
              <h1>Login page</h1>
                <Input type="text" placeholder="User Name " className="name" />
                <Input
                  type="password"
                  placeholder="Password "
                  className="password1"
                />
              <div>
                <Button color="primary"> Register</Button>
              </div>
              <div>
                <p>
                  <a href="#">Forgot Password</a> or <a href="#">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
