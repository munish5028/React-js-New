import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "All fields are required",
        timer: 1500,
      });
    } else {
      axios
        .post("http://192.168.15.24:4000/login", {
          email,
          password,
        })
        .then((response) => {
          if (response.data && response.data.token) {
            // Assuming the backend API returns a token when login is successful
            Swal.fire({
              position: "top-end",
              toast: true,
              icon: "success",
              showConfirmButton: false,
              title: "Login successful!",
              timer: 1500,
            });
            console.log("Login successful!");
            navigate("/Loginuser");
          } else {
            Swal.fire({
              position: "top-end",
              toast: true,
              icon: "error",
              showConfirmButton: false,
              title: "Invalid email or password",
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            position: "top-end",
            toast: true,
            icon: "error",
            showConfirmButton: false,
            title: "Error logging in",
            timer: 1500,
          });
        });
    }
  };

  return (
    <div>
      <Sidebar />
      <form onSubmit={submitHandler}>
        <h2 className="mrg-2">Login Form</h2>
        <input
          className="mrg-1"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="passcode-11"
          type="password"
          name="password"
          placeholder="Enter your passcode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="btn-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;