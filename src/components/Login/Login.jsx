import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';

const Login = () => {

  const {login} = useContext(AuthContext)
  const [error,setError] = useState("")

  
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value; 
    const password = e.target.password.value;
    console.log(email,password);

    login()
    then(result=>{
      console.log(result.user);
      e.target.reset()}
    )
    .catch(() => {
      setError("Login Error")
    })




  }

      // show the top of the page after clicking on "Read more"
      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-6">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className=" input input-bordered" required name='email'/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name='password'/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <p className='ml-4'>First time here? <Link to='/register' className='text-blue-600 font-bold'>Register now</Link> </p>
    </div>
  </div>

  {
    error && <p className='text-red-500 text-center'>{error}</p>
  }
</div>
    );
};

export default Login;