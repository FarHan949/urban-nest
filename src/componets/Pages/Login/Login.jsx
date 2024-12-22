import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  

  return (
    <div className="md:mx-40 mx-4 flex flex-col md:flex-row justify-between gap-5 md:gap-20 m-auto pt-5">
      <div className="card bg-base-100 w-full max-w-sm mt-5 shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-LiverChestnut text-white">Login</button>
          </div>
          <p className="text-center">
            Do not a have account ?{" "}
            <Link
              to="/register"
              className="text-JackoBean underline cursor-pointer"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="border-2 border-slate-950">
        <h1>google</h1>
        <div>
          <p> Debitis amet, iusto voluptatem eligendi inventore, odit animi eum quisquam magni odio dolorum similique iure ipsum dolore fugit. Accusamus molestiae quia sequi voluptas culpa dolorem facere fugiat temporibus placeat omnis. Soluta eum ipsum illum distinctio excepturi sequi blanditiis nihil ipsam quos tenetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
