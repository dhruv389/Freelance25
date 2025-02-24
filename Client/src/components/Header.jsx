import React from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from '@clerk/clerk-react'

import { useFirebase } from '../firebase/firebase';
import { signOut } from 'firebase/auth';

import { TiUser } from "react-icons/ti";
import { Button } from './ui/button';
import { IoLogOut } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { PiUserCirclePlusFill } from "react-icons/pi";
import Swal from 'sweetalert2'
import MegaMenu from './MegaMenu';


const Header = () => {
  const firebase = useFirebase();
  //  console.log(firebase.isLoggedin);
  const navigate = useNavigate();
  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await signOut(firebase.auth);
          Swal.fire({
            title: "Logged out!",
            text: "You have been signed out.",
            icon: "success"
          }).then(() => {
            // Reload the page after the success alert is closed
            navigate('/');
            window.location.reload();
          });
          console.log('User signed out!');
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: `Error signing out: ${error.message}`,
            icon: "error"
          });
          console.error('Error signing out:', error);
        }
      }
    });
  };

  return (
    <div className="flex flex-col gap-3 fixed z-50 backdrop-filter backdrop-blur-2xl w-full top-0 left-0">

      <div className="navbar ">
        <div className=" gap-4 custom:gap-1 custom:w-full  flex w-[40%]">
          <div className="hidden custom:flex custom:pt-4"> </div>

          <Link to="/" className="smj-icon bg-yellow-300 rounded-full  h-[3rem]   w-[5rem]" >
            <img className="h-full  w-full object-contain " src="https://technonguide.com/wp-content/uploads/2023/05/Freelancing.webp" alt="" />
          </Link>

          <div className="  flex justify-start items-center custom:ml-2 custom:flex custom:justify-center custom:items-center w-full">
            <h1 className=" font-semibold text-[2.5rem] custom:text-[2rem]">Freelance</h1>

          </div>
        </div>
        {/* <div className="security w-[30%]">
                <button className="login-btn">
                    <i className="fa-solid fa-phone-volume">139</i>
                </button>
                <p>For Security/Medical Assistance</p>
            </div> */}


        <div className="w-[25%] mr-7 flex justify-center items-center ">
          <SignedOut >
            <div className="btns h-full custom:hidden flex gap-10 space-around ">
              <Button className="py-4 text-md " variant="ghost"><IoIosLogIn fontSize={"30px"} className='mr-1' /><SignInButton /></Button>
              <Button className="py-4 text-md " variant="ghost"><PiUserCirclePlusFill fontSize={"30px"} className='mr-1' /><SignUpButton /></Button>
            </div>
          </SignedOut>
          <SignedIn>

            <div className="btns pl-20 h-full custom:hidden text-3xl flex  justify-end ">
              <UserButton showName={true} appearance={{
                elements: {
                  userButtonAvatarBox: "w-12 h-12",
                  userButtonBox: "text-white text-2xl font-medium",
                  avatarBox: "order-first", // Ensures avatar comes first
                  userButtonTrigger: "gap-2", // Adds space between avatar and text
                },
                layout: {
                  elements: {
                    
                    beforeButtonDisplay: null,
                    afterButtonDisplay: "nameDisplay",
                  }
                }
              }} />
            </div>
          </SignedIn>
        </div>
      </div>
      <MegaMenu />
    </div>
  )
}

export default Header