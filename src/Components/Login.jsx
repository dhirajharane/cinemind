import Header from "./Header";
import { BANNER,PROFILE_PHOTO } from "../utils/constants";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSignInForm = () => setIsSignIn(!isSignIn);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: PROFILE_PHOTO,
        });
        const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
        setErrorMessage("");
        navigate("/browse");
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      // Sign In
      try {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        setErrorMessage("");
        navigate("/browse");
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img src={BANNER} alt="banner" className="w-full h-screen object-cover fixed top-0 left-0 -z-10 opacity-100" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 px-4 sm:px-16 py-8 sm:py-12 rounded-md w-full max-w-xs sm:max-w-md shadow-2xl"
      >
        <h1 className="text-2xl sm:text-3xl text-white font-bold mb-8">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-[#222] text-white placeholder-gray-400 rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="bg-[#222] text-white placeholder-gray-400 rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-[#222] text-white placeholder-gray-400 rounded px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
        />
        <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>
        <button
          type="submit"
          className="bg-red-600 hover:opacity-80 transition-colors text-white font-semibold rounded px-4 py-3 cursor-pointer text-base"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 font-semibold mt-4 text-sm">
          {isSignIn ? "New to CineMind? " : "Already Registered? "}
          <span
            onClick={toggleSignInForm}
            className="text-white font-semibold cursor-pointer"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
