import React from 'react'
import { LOGO, USER_AVATAR } from '../utils/constants'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);



  return (
    <>
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black to-transparent z-50 flex flex-col md:flex-row m-0  '>
        <img className='absolute bg-gradient-to-b from-black w-12 md:w-32 lg:w-44 top-0 left-0 mx-auto md:mx:0  ' src={LOGO} alt="logo" />
    
        <img className='hidden md:block w-12 h-12 absolute top-3 right-24 z-40  ' src={USER_AVATAR} alt="User" />
        <button onClick={handleSignOut} className="font-bold absolute top-6 right-6 z-30 text-white  ">
        
    Sign Out
  </button>
 
    </div>
    
  </>
  )
}

export default Header