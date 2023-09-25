import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });


    const handleLogin = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:8081/login', values)
            .then((res) => {
                if (res.data.status === 'Success') {
                    navigate('/signup');
                } else {
                    console.log('Error Signing in');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    return (
      <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <form className="h-max mx-auto flex flex-col items-center" onSubmit={handleLogin}>
          <img className="h-[40px] w-[47px] mb-5" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          <h1 className="text-xl font-bold text-center pb-10">Sign in to your account</h1>
          <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
            <div>
              <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
              <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="mehedi@jaman.com" onChange={(e) => setValues({ ...values, email: e.target.value })} />
            </div>
            <div>
              <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
              <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******" onChange={(e) => setValues({ ...values, password: e.target.value })} />
            </div>
            <div className="flex">
              <div className="w-1/2">
                <input type="checkbox" name="remeberMe" />
                <label htmlFor="remeberMe">Remeber me</label>
              </div>
              <div className="w-1/2">
                <a className="font-bold text-blue-600" href="">Forgot password ?</a>
              </div>
            </div>
            <div>
                <button className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit">
                Sign in
                </button>
            </div>
            <div>
              <p className="text-center">Or continue with</p>
            </div>
            
          </div>
          <p className="text-sm text-gray-500 mt-10">Not a member? <a href="#" className="text-[#4F46E5] font-bold">Start a 14 day free trial</a></p>
        </form>
      </div>
    );
  }
  
  export default Login;
  