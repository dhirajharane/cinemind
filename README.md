# CineMind 🎬🤖

**CineMind** is a modern, AI-powered movie streaming and discovery web app built with React, Redux, Firebase, and Tailwind CSS. It combines the power of TMDB's movie database with Google's Gemini AI to deliver smart movie recommendations, beautiful UI, and a seamless user experience.

---

## ✨ Features

🌟 **Modern UI:** Responsive, visually stunning interface with dynamic backgrounds and smooth transitions.  
🔐 **User Authentication:** Secure sign up, sign in, and sign out using Firebase Auth.  
🌍 **Multi-language Support:** Instantly switch between English, Hindi, and Spanish.  
🤖 **Smart Movie Genie (AI Search):** Get context-aware movie recommendations powered by Gemini AI.  
🔎 **Normal Movie Search:** Search for any movie from TMDB's vast database with a beautiful, instant results dropdown.  
🎬 **Movie Details Page:** View trailers, ratings, release year, runtime, director, overview, and star cast (with actor images).  
🔥 **Trending & Categorized Lists:** Browse Now Playing, Popular, Top Rated, and Upcoming movies.  
📱 **Responsive Design:** Works beautifully on desktop and mobile.  
👤 **Profile Dropdown:** User avatar with a dropdown for sign out and user info.  
📌 **Persistent Sessions:** Stay logged in across sessions.  
🎨 **Beautiful Gradients & Effects:** Custom gradients, shadows, and blur effects for a premium look.

---

## 🖼️ App Screenshots

| Login Page | Home Page |
|------------|-----------|
| [![login.png](https://i.postimg.cc/XYKJ6xzq/login.png)](https://postimg.cc/yDdBFhBC) | [![home-page.png](https://i.postimg.cc/LXHhDsjx/home-page.png)](https://postimg.cc/B8VqQ4YF) |

| Smart Movie Genie | Streaming Page |
|-------------------|----------------|
| [![movie-genie.png](https://i.postimg.cc/c4Dj4kDC/movie-genie.png)](https://postimg.cc/9r71LbHH) | [![stream-Movie.png](https://i.postimg.cc/0QcGdFKJ/stream-Movie.png)](https://postimg.cc/N92rQN4g) |

---

## 🗂️ Folder Structure

my-react-app/
├── .firebase/
├── node_modules/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   └── search/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/
│   │   └── slices/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .firebaserc
├── .gitignore
├── eslint.config.js
├── firebase.json
├── hidden.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

---

## 🛠️ Technologies Used

- **React 19** (with hooks)
- **Redux Toolkit** (state management)
- **React Router v7**
- **Firebase Auth**
- **Tailwind CSS** (utility-first styling)
- **TMDB API** (movie data, trailers, images)
- **Google Gemini API** (AI recommendations)
- **Vite** (fast dev/build tool)
- **Heroicons** (icons)

---

## 🚀 Getting Started

### 1. Clone the repository
`bash
git clone https://github.com/dhirajharane/cinemind.git
cd cinemind/my-react-app
`

### 2. Install dependencies
`bash
npm install
`

### 3. Set up API Keys
All API keys and secrets are stored in `hidden.js` at the project root.  
**Do NOT commit `hidden.js` to version control.**

Example:
`js
export const GEMINI_KEY = "your_google_gemini_api_key";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer your_tmdb_v4_read_access_token",
  },
};
`

- Get your TMDB v4 token from [TMDB API settings](https://www.themoviedb.org/settings/api)  
- Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### 4. Configure Firebase
Update your `firebase.js` with your Firebase project credentials.

### 5. Start the development server
`bash
npm run dev
`
Visit `http://localhost:5173` in your browser.

---

## 🧠 AI Features

### 🎯 Smart Movie Genie:
Click the **Smart Movie Genie** button in the header to open the AI-powered search. Enter a query like `"movies like Inception"` and receive 5 intelligent movie suggestions, each with a movie card and full details.

### 🔍 Normal Search:
Use the search bar in the header to quickly find any movie. The results drop down instantly and link to full details.

---

## 🎥 Movie Details

- 🎞️ **Trailer:** Embedded YouTube trailer (autoplay, no branding).  
- 🖼️ **Poster & Backdrop:** High-resolution images from TMDB.  
- 📌 **Details:** Title, tagline, release year, rating, runtime, language, and overview.  
- 🎭 **Director & Cast:** Director name and top actors with their photos and character names.

---

## 🔐 Authentication

- ✨ Sign up / Sign in securely using Firebase Auth.  
- 👤 Profile avatar dropdown for signing out and user info display.

---

## 🌐 Multi-language

Switch languages seamlessly between **English**, **Hindi**, and **Spanish** directly from the AI Search interface.

---

## 📱 Responsive & Beautiful

- Fully mobile-responsive layout  
- Custom gradients, glass blur, and shadows for a modern cinematic feel  
- Large, bold logo and intuitive header design

---

## 📝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 🧲 Troubleshooting

**Blank screen or missing movies?**
- Double-check your TMDB and Gemini API keys in `hidden.js`
- Ensure Firebase credentials are properly set
- Restart the development server after changes

**API not working?**
- Check browser console for error logs
- Make sure API keys are active and valid

---

## 📄 License

MIT License

---

## 🙏 Acknowledgements

- 🎥 [TMDB](https://www.themoviedb.org/) for movie data and images  
- 🤖 [Google Gemini](https://aistudio.google.com/) for AI recommendations  
- 🔐 [Firebase](https://firebase.google.com/) for auth  
- 💨 [Tailwind CSS](https://tailwindcss.com/) for styling inspiration  

---

**Made with ❤️ by Dhiraj Harane**