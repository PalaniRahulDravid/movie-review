import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-yellow-400 mb-6"
      >
        Welcome to Movie Review
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl text-gray-300 mb-8 text-center px-4"
      >
        Find the best movies & read real reviews from users!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/select-movie")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transition-all"
      >
        Get Started 🚀
      </motion.button>
    </div>
  );
}

export default Home;
