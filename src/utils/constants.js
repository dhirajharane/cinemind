import logo from "./logo.png";
import myBanner from "./myBanner.png"
import UserIcon from "./UserIcon.png";
import profilePhoto from "./profilePhoto.jpg";



export const LOGO_IMG = logo;
export const SignedInLogo = UserIcon;
export const PROFILE_PHOTO = profilePhoto; 
export const BANNER =myBanner;
  


export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`;




