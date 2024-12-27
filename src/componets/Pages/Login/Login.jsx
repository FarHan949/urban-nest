import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Login = () => {

  const {user,login} = useContext(AuthContext)
  
  const handleLogin = (e) => {
   e.preventDefault()
   const form = new FormData(e.currentTarget)
   const email = form.get('email')
   const password = form.get('password')
   console.log(email, password)
  }

  return (
    <div className="max-w-5xl m-auto  flex flex-col md:flex-row justify-between gap-5 md:gap-20 m-auto pt-5">
      <div className="card bg-base-100 w-full max-w-sm mt-5 shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleLogin}>
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
      <div className="m-auto md:mt-28 mt-5 ">
        <button className="flex justify-center items-center gap-2 bg-gray-300 mx-5 px-16 py-3 rounded-xl">
          <FaGoogle/>
          <p className="text-lg">Sign in with Google</p>
        </button>
        <p className="text-center text-xl py-2">Or</p>
        <button className="flex justify-center items-center gap-3 bg-gray-300 mx-5 px-16 py-3 rounded-xl">
          <FaGithub/>
          <p className="text-lg">Sign in with github</p>
        </button>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
