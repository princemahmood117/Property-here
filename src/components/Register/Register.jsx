import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="heromin-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold italic">Register <span className='text-sky-500'>Here!</span> </h1>
         
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required name='name'/>
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required name='email' />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required name='password'/>
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>


            </form>
            <p className='ml-4'>First time here? <Link to='/login' className='text-blue-600 font-bold'>Login here</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Register;