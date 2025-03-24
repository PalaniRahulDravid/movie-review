import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Review() {
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.movie || "";

  //  If user directly opens /review without selecting a movie, redirect to select page
  useEffect(() => {
    if (!movie) {
      navigate("/select-movie");
    }
  }, [movie, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Review for {movie}
      </motion.h1>

      {/* Review Input Box */}
      <textarea
        placeholder="Is this movie good? Can I watch it?"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="p-3 w-80 h-24 rounded-lg bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      {/* Submit Button */}
      <motion.button
        onClick={() => navigate("/result", { state: { movie, review } })}
        className={`mt-4 px-6 py-2 text-lg font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 ${
          review ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!review}
        whileHover={{ scale: review ? 1.05 : 1 }}
      >
        Submit
      </motion.button>
    </div>
  );
}

export default Review;
