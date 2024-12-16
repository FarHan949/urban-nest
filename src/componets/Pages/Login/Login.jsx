import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      
    <div className="card bg-base-100 w-full max-w-sm mt-5 m-auto shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-LiverChestnut text-white">Login</button>
        </div>
       <p>Do not a have account ? <Link to='/register' className='text-JackoBean underline cursor-pointer'>Register</Link></p>
      </form>
    </div>

    );
};

export default Login;