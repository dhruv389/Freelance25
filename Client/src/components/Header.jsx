import React ,{useEffect,useState}from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton  } from '@clerk/clerk-react'

import { useFirebase } from '../firebase/firebase';
import { signOut } from 'firebase/auth';

import { TiUser } from "react-icons/ti";
import { Button } from './ui/button';
import { IoLogOut } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { PiUserCirclePlusFill } from "react-icons/pi";
import Swal from 'sweetalert2'
import MegaMenu from './MegaMenu';
import { useUser } from "@clerk/clerk-react";
import  Dropdown from "../components/Dropdown";
import  Dropdown3 from "../components/Dropdown3";

const Header = () => {

const { isSignedIn, user } = useUser();
  const [x,sx]=useState(1);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/clients/getclient/${user.id}`);
      
        if(response.data.role==='Client') sx(0);
        console.log(response.data.role);
        console.log(response.data);
      } catch (err) {
        setError("User not found or server error.");
      }
    };
  
    if (user?.id) {
      fetchUser();
    }
  }, [user?.id]);

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

      <div className="navbar py-2 ">
        <div className=" gap-4 custom:gap-1 custom:w-full  flex w-[40%]">

         

         

          <Link to="/" className="  flex justify-start items-center custom:ml-2 custom:flex custom:justify-center custom:items-center w-full">
            <h1 className=" font-semibold text-[2.5rem] custom:text-[2rem]">Skillsphere</h1>

          </Link>
        </div>
       


        <div className="w-[45%] mr-7 flex justify-center items-center ">

        <button>
           
        </button>
          <SignedOut >
            <div className="btns h-full custom:hidden flex gap-10 space-around ">
              <Button className="py-4 text-md " variant="ghost"><IoIosLogIn fontSize={"30px"} className='mr-1' /><SignInButton /></Button>
              <Button className="py-4 text-md " variant="ghost"><PiUserCirclePlusFill fontSize={"30px"} className='mr-1' /><SignUpButton /></Button>
            </div>
          </SignedOut>
          <SignedIn>


          <Dropdown3/>
            <Dropdown/>

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