import { useEffect, useRef, useState } from "react";
import { LOGO_IMG, SignedInLogo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleAISearchView } from "../utils/AISlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showAISearch = useSelector((store) => store.ai.showAISearch);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleAISearch = () => {
    dispatch(toggleAISearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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
    return () => unsubscribe();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[110] bg-gradient-to-b from-black/95 via-black/95 to-transparent">
      <div className="flex flex-row sm:flex-row items-center justify-between  sm:px-8 py-3 w-full max-w-full">
        {/* Logo */}
        <div className="flex items-center justify-center w-full sm:w-auto">
          <img
            className="w-36 sm:w-60 h-auto -mt-8 sm:-mt-18 -ml-57 sm:ml-2"
            src={LOGO_IMG}
            alt="logo"
            style={{
              filter: "brightness(2.2) contrast(1.2) drop-shadow(0 0 16px #fff)",
            }}
          />
        </div>

        {/* Controls */}
        {user && (
          <div className="flex gap-4 -ml-32 sm:gap-6 -mt-8 sm:-mt-18 mr- 4">
            {showAISearch && (
              <select
                className="bg-gray-800 text-white px-2 sm:px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition text-sm sm:text-base"
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
              className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-0.5 sm:px-4 sm:py-2 rounded font-medium text-xs sm:text-base hover:scale-105 transition cursor-pointer whitespace-nowrap"
              onClick={handleAISearch}
            >
              {showAISearch ? "Home" : "Smart Movie Genie"}
            </button>
            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 mr-10 border-white shadow-lg cursor-pointer hover:scale-110 transition"
                src={SignedInLogo}
                alt="Usericon"
                onClick={() => setDropdownOpen((open) => !open)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 sm:w-56 bg-black bg-opacity-95 rounded-xl shadow-xl py-4 px-4 sm:px-6 flex flex-col items-center animate-fade-in z-50">
                  <div className="mb-3 flex flex-col items-center">
                    <img
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-red-600 mb-2"
                      src={user?.photoURL ? user.photoURL : SignedInLogo}
                      alt="Usericon"
                    />
                    <span className="text-white font-bold text-base sm:text-lg">
                      Welcome, {user.displayName || "User"}!
                    </span>
                    <span className="text-gray-400 text-xs mt-1">
                      {user.email}
                    </span>
                  </div>
                  <button
                    className="w-full bg-red-600 text-white px-4 py-2 rounded-md font-semibold mt-2 hover:bg-red-700 transition"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
