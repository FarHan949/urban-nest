import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const {createUser, user} = useContext(AuthContext)


  const handelRegister = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name')
    const photoUrl = formData.get('photo')
    const email = formData.get('email');
    const password = formData.get('password');
    console.log( name, photoUrl, email, password );
    createUser(email, password)
    .then(result => {
      console.log(result.user)
     })
     .catch(error => console.log(error.message))
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen mt-5">
      <div className="card bg-base-100 w-full max-w-sm p-6 rounded-lg shadow-lg">
        <form className="card-body" onSubmit={handelRegister}>
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-xl cursor-pointer"
              >
                {showPassword ?  <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-LiverChestnut text-white w-full">Register</button>
          </div>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-JackoBean underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
