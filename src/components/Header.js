import React from 'react'
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from '../utils/configSlice';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
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

  const handleGptSearchClick =() =>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
  //   <>
  //   <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black to-transparent z-50 flex flex-col md:flex-row m-0  '>
  //       <img className='absolute bg-gradient-to-b from-black w-12 md:w-32 lg:w-44 top-0 left-0 mx-auto md:mx:0  ' src={LOGO} alt="logo" />
    
  //       <img className='hidden md:block w-12 h-12 absolute top-3 right-24 z-40  ' src={USER_AVATAR} alt="User" />
  //       <button onClick={handleSignOut} className="font-bold absolute top-6 right-6 z-30 text-white  ">
        
  //   Sign Out
  // </button>
 
  //   </div>
  <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-transparent z-20 flex flex-col md:flex-row justify-between">
  <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
  {user && (
    <div className="flex p-2 justify-between">
      {showGptSearch && (
        <select
          className="p-2 m-2 bg-gray-900 text-white"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      )}
      <button
        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
        onClick={handleGptSearchClick}
      >
        {showGptSearch ? "Homepage" : "GPT Search"}
      </button>
      <img
        className="hidden md:block w-12 h-12"
        alt="usericon"
        src={USER_AVATAR}
      />
      <button onClick={handleSignOut} className="font-bold text-white ">
        (Sign Out)
      </button>
    </div>
  )}
</div>
  
  )
}

export default Header