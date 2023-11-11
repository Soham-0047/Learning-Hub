import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Signin = () => {

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
      const res = await fetch('api/auth/signin',{
          
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
  })

      const data = await res.json();

       
      setLoading(false);

      if(data.success === false){
          setError(true)
          return;
      }

      navigate('/')
       
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
                    Sign In
                </h4>
            </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">

            <form onSubmit={handleSubmit}>
                

                {/* <div className="mt-4">
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
                </div> */}

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

                
                
                <div className="flex items-center mt-4">
                    <button   disabled={loading}className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                       {loading ? 'Loading...':'Sign In'} 
                    </button>
                </div>
                <p className='text-center text-red-600 mt-4'>{error && 'Something Went Wrong'}</p>
            </form>
            <div className="mt-4 text-grey-600">
                Dont have an account?{" "}
                <span>
                 <Link  to="/signup"className="text-purple-600 hover:underline">
                        Sign Up
                    </Link>
                </span>
            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full" />
                <p className="px-3 ">OR</p>
                <hr className="w-full" />
            </div>
            <div className="my-6 space-y-2">
                <button
                    aria-label="Login with Google"
                    type="button"
                    className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                    >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
               
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signin