import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  signInFailure,
  signInSuccess,
  signInstart,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";


const Signin = () => {
  const [formData, setFormData] = useState({});
  //   const [error,setError] = useState(false)
  //   const [loading,setLoading] = useState(false)

  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //* Instead of doing tghis http://localhost:5000/api/auth/signup we cas use proxy in vite-config section for production ready code
      //   setLoading(true)
      //   setError(false);
      //! Instead of doing this we can use usedispatch

      dispatch(signInstart());

      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      //   setLoading(false);

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      //   setLoading(false);
      //   setError(true)
      dispatch(signInFailure(error));
    }
  };
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
              <button
                disabled={loading}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
            <p className="text-center text-red-600 mt-4">
              {error ? error.message || "Something Went Wrong" : ""}
            </p>
          </form>
          <div className="mt-4 text-grey-600">
            Dont have an account?{" "}
            <span>
              <Link to="/signup" className="text-purple-600 hover:underline">
                Sign Up
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <OAuth />
        </div>
      </div>
    </div>
  );
};

export default Signin;
