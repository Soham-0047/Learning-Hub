import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';


const Navbar = () => {

  const [navbarOpen,setNavbarOpen] = useState(false);

  const {currentUser} = useSelector((state) => state.user);


  return (
    <>  
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500  w-100">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

        <Link
          to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          
        >
          
          Learning Hub
        </Link>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
         {navbarOpen ? <ion-icon name="close"></ion-icon>:<ion-icon name="menu"></ion-icon> }
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center justify-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link to="/"
              className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75"
              
            >
              {/* <ion-icon className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" name="share"></ion-icon> */}
              
              <span  className="ml-2">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about"
              className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              {/* <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> */}
              
              <span className="ml-2">About</span>
            </Link>
          </li>
          <li className="nav-item">
           <Link to="/profile">
              {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}

              {currentUser ? (
                  <img className='w-8 h-8 rounded-full object-cover m-auto' src={currentUser.profilePicture} alt="profilepic"/>
              ):
              (
                
                <span className="ml-2 px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">Sign In</span>
               
              )}
               </Link>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  
  )
}

export default Navbar