import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup() {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const handleSignup =(e)=>{
        e.preventDefault();
        try{
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                if (res){
                    console.log('Success')
                    navigate('/login')
                }
            }
            )
        }catch(error){
            console.error(error)
        }

    };
    
      

  return (
    <div className="w-full h-screen flex items-center justify-center p-20">


        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" onChange={(e) => setValues({ ...values, email: e.target.value })} />            
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e) => setValues({ ...values, password: e.target.value })}/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Have an Account! Login
            </a>
            </div>
        </form>

    </div>
  )
}


export default Signup;
