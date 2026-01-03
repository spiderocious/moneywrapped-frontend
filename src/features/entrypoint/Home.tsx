import { Link } from "react-router-dom";
import { FaHeart, FaUsers, FaFire } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaHeart className="text-white text-6xl animate-pulse" />
          <h1 className="text-7xl font-bold text-white">Match Maker</h1>
        </div>

        <p className="text-white text-xl mb-12 opacity-90">
          Find your perfect match with our advanced matching algorithm
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
            <FaHeart className="text-pink-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Smart Matching
            </h3>
            <p className="text-gray-600">
              Our AI-powered algorithm finds the best matches for you
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
            <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Connect</h3>
            <p className="text-gray-600">
              Meet interesting people and build meaningful connections
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
            <FaFire className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Hot Matches
            </h3>
            <p className="text-gray-600">
              Get instant notifications for your top matches
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            to="/matches"
            className="bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            View Matches
          </Link>
          <Link
            to="/about"
            className="bg-purple-700 text-white font-bold px-8 py-4 rounded-full hover:bg-purple-800 transition-colors shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
