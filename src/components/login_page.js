import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login_page.css";
import { useAuth } from "../utils/authContext";
import { setAdmin } from "./global.js";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  const auth = useAuth();
  const logOut = async () => {
    try {
      localStorage.removeItem("token");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };
  const changePassword = async () => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        message.error("User not authenticated.");
        return;
      }
      const headers = {
        Authorization: `${accessToken}`,
      };
      const pws = {
        currentPassword: password,
        newPassword: newPassword,
        reenterNewPassword: confirmPassword,
      };
      const response = await axios.post("/auth/changePassword", pws, {
        headers,
      });
      console.log(response.data);
      if (response.data.success) {
        message.success(response.data.message);
        logOut();
      } else {
        message.error(response.data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        email: email,
        password: password,
      };

      console.log(user);

      auth.setEmail(user.email);

      setAdmin(email);
      console.log("IN LOGIN.....");

      const response = await axios.post("/auth/login", user);
      console.log("RESPONSE");

      console.log(response);

      if (response.data.success) {
        message.success(response.data.message);

        // Check if password change is required
        const passwordChangeInterval = 90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds
        const lastPasswordChange = response.data.user.lastPasswordChange;

        if (lastPasswordChange < Date.now() - passwordChangeInterval) {
          // Redirect to change password page
          window.login_modal.showModal();
        } else {
          // Set authentication token and navigate to home
          localStorage.setItem("token", response.data.token);
          navigate("/home");
        }
      } else {
        console.log("IN LOGIN");

        message.error(response.data.error);
      }
    } catch (error) {
      message.error("No response from server");
    }
  };
  return (
    <div className="login-page dir=rtl">
      <div className="text-4xl font-bold">Hi!</div>

      <div className="text-4xl font">Welcome Back</div>
      <hr className="gap"></hr>
      <h4 className="text-4xl font-bold">Log In</h4>
      <hr className="gap"></hr>

      <div className="login-form">
        <input
          type="text"
          placeholder="Email"
          className="input input-primary input-bordered w-full "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-primary input-bordered w-full password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className={`password-toggle-button ${
              showPassword ? "visible" : ""
            }`}
            onClick={toggleShowPassword}
            data-testid="password-toggle-button"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        <button
          className="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>
      <div className=" divider-vertical">OR</div>

      {/* {getIcons()} */}

      <p className="signup-login-link">
        Don't have an account?{" "}
        <Link to={"/signup"}>
          <a href="/signup">Sign Up</a>
        </Link>
      </p>
      <dialog id="login_modal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg" style={{ "margin-bottom": "20px" }}>
            Change Password
          </h3>
          <input
            style={{ marginBottom: "10px" }}
            type="password"
            placeholder="Current Password"
            class="input input-primary input-bordered w-full password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            style={{ marginBottom: "10px" }}
            type="password"
            placeholder="New Password"
            class="input input-primary input-bordered w-full password-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Re-enter New Password"
            class="input input-primary input-bordered w-full password-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <div className="modal-action">
            <button className="btn" onClick={changePassword}>
              Change
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default LoginPage;
