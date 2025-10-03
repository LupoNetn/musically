import React from "react";

const SignIn = () => {
  const handleSpotifySignIn = () => {
    // Redirect to your backend / Spotify OAuth endpoint
    window.location.href = "/api/auth/spotify";
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="bg-white rounded-3xl shadow-xl p-4 md:p-10 max-w-md w-full text-left">
        <h1 className="text-3xl font-extrabold text-gray-800">Welcome Back</h1>
        <p className="mt-4 text-gray-600 text-sm">
          Sign in with Spotify to join millions of music lovers worldwide.
        </p>

        <button
          onClick={handleSpotifySignIn}
          className="mt-8 flex items-center justify-center gap-3 w-full py-3 px-6 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 168 168"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M84 0C37.6 0 0 37.6 0 84s37.6 84 84 84 84-37.6 84-84-37.6-84-84-84zm38.9 120.5c-1.2 1.8-3.6 2.4-5.4 1.2-14.7-9-33.2-11-55-6.2-2 .4-4.1-1-4.5-3.1-.4-2.1 1-4.1 3.1-4.5 24-4.8 44 2.2 58.5 12.7 1.8 1.2 2.4 3.6 1.2 5.4zm7.6-20c-1.5 2.3-4.6 3-6.9 1.5-16.9-10.7-42.7-13.8-62.9-7.7-2.7.7-5.5-.8-6.2-3.5-.7-2.7.8-5.5 3.5-6.2 23-6 52.7-2.6 71.8 8.4 2.3 1.5 3 4.6 1.5 6.9zm.1-19.6c-19.5-12-51.9-13.1-69.6-7.3-3.3 1-6.9-.8-7.9-4.1-1-3.3.8-6.9 4.1-7.9 20.8-6.2 57.3-4.9 79.5 8.5 3.1 1.9 4 6 2.1 9.1-1.9 3.1-6 4-9.2 2z" />
          </svg>
          Spotify
        </button>

        <p className="mt-6 text-gray-400 text-xs">
          By signing in, you agree to our{" "}
          <span className="text-indigo-600 font-semibold">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-indigo-600 font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
