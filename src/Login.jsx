import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("lakshman@gmail.com");

  const [password, setPassword] = useState("Lakshman@1997");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId: email,
        password,
      },{
        withCredentials : true
      });
      console.log(res)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="card bg-base-100 w-96 shadow-md ">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <label>
              <div className="label">
                <span>Email Id</span>
              </div>
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label>
              <div className="label">
                <span>Password</span>
              </div>
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="card-actions flex justify-center py-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
