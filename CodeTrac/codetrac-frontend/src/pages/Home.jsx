// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Codetrac | Home";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4">
      <div className="text-center text-white max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Track Your Coding Journey
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Codetrac helps you monitor your progress across platforms like LeetCode, Codeforces, and more — all in one dashboard.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/login"
            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
