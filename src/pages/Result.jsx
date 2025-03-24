import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, review } = location.state || {};

  // Dummy review database
  const movieReviews = {
    "Inception": ["Amazing", "Great story", "Must watch"],
    "Forrest Gump": ["Terrible", "Boring", "Waste of time"],
    "Avengers": ["Superb", "Epic action", "Loved it"],
    "The Godfather": ["Masterpiece", "Classic", "Brilliant performances"],
    "Kalki 2898 AD": ["Mind-blowing visuals", "Unique storyline", "A must-watch"],
    "Devara: Part 1": ["Intense action", "Great cinematography", "Engaging"],
    "Pushpa 2: The Rule": ["Powerful performance", "Mass entertainer", "Thrilling"],
    "Titanic": ["Emotional", "Beautiful love story", "Heartbreaking"],
    "Parasite": ["Mind-bending", "Great plot twists", "Unpredictable"],
  };

  let response = "No data available for this movie.";
  if (movieReviews[movie]) {
    const goodKeywords = ["amazing", "great", "must watch", "superb", "epic", "loved", "masterpiece",
    "classic", "beautiful", "emotional", "thrilling", "exciting", "inspirational", "brilliant", "entertaining"];
    const badKeywords = ["terrible", "boring", "waste", "disappointing", "dull", "slow"];

    const reviewsLower = movieReviews[movie].map((r) => r.toLowerCase());

    if (reviewsLower.some((r) => goodKeywords.some((g) => r.includes(g)))) {
      response = "✅ Yes, you can watch this movie! 🎬";
    } else if (reviewsLower.some((r) => badKeywords.some((b) => r.includes(b)))) {
      response = "❌ Better to skip this one! 🚫";
    } else {
      response = "🤔 Mixed reviews. It depends on your taste.";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4">
      <motion.div
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-25 blur-lg rounded-lg"></div>

        <h1 className="text-3xl font-bold mb-4 text-blue-400">Movie Review Result</h1>

        {movie ? (
          <>
            <h2 className="text-2xl font-semibold text-yellow-400">{movie}</h2>
            <p className="mt-3 text-gray-300 italic">"{review}"</p>
            <motion.p
              className="mt-4 text-lg font-medium text-green-400"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, yoyo: Infinity }}
            >
              {response}
            </motion.p>
          </>
        ) : (
          <p className="text-red-500">⚠ No movie selected. Please go back.</p>
        )}

        <motion.button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 text-lg font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Result;
