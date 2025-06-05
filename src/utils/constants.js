import logo from "./logo.png";

import UserIcon from "./UserIcon.jpg";
import profilePhoto from "./profilePhoto.jpg";
import { GEMINI_KEY } from "../hidden";


export const LOGO_IMG = logo;
export const SignedInLogo = UserIcon;
export const PROFILE_PHOTO = profilePhoto; 
export const BANNER_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg";


export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];




export const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;


