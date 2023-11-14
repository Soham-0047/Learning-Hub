import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import OAuth from '../components/OAuth';


const Signup = () => {

    const [formData,setFormData] = useState({})
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange =(e)=>{

    setFormData(
        {...formData,[e.target.id]: e.target.value})

        // console.log(formData)
        
    }

    const handleSubmit = async(e) =>{
        
        e.preventDefault();

        try {
          
        //* Instead of doing tghis http://localhost:5000/api/auth/signup we cas use proxy in vite-config section for production ready code

        setLoading(true)
        setError(false);
        const res = await fetch('api/auth/signup',{
            
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
    })

        const data = await res.json();

        console.log(data); 
        setLoading(false);

        if(data.success === false){
            setError(true)
            return;
        }

        navigate('/signin')
         
        } catch (error) {
            setLoading(false);
            setError(true)
        }

    }
  return (
    <div className="card">
    <div className="flex flex-col items-center  pt-6 sm:justify-center sm:pt-0 bg-gray-50 ">
        <div>
            <Link to="/">
                <h3 className="text-4xl font-bold text-purple-600 mb-4">
                    Learning Hub
                </h3>
                <h4 className="text-3xl font-bold text-blue-400 text-center ">
                    Sign Up
                </h4>
            </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">

            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Name
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Username
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="username"
                            id="username"
                            name="username"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Email
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={handleChange}
                        />
                    </div>
                </div>


                <div className="mt-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Password
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                
                {/* <div className="mt-4">
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Confirm Password
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            name="password_confirmation"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div> */}
                {/* <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline"
                >
                    Forget Password?
                </a> */}
                <div className="flex items-center mt-4">
                    <button   disabled={loading}className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                       {loading ? 'Loading...':'Sign Up'} 
                    </button>
                </div>
                <p className='text-center text-red-600 mt-4'>{error && 'Something Went Wrong'}</p>
            </form>
            <div className="mt-4 text-grey-600">
                Already have an account?{" "}
                <span>
                 <Link  to="/signin"className="text-purple-600 hover:underline">
                        Sign in
                    </Link>
                </span>
            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full" />
                <p className="px-3 ">OR</p>
                <hr className="w-full" />
            </div>
           <OAuth/>
        </div>
    </div>
    </div>
);
  
}

export default Signup