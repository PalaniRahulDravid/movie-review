import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="bg-gray-900 shadow-lg py-4 fixed w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* logo */}
        <Link to="/" className="text-3xl font-bold text-yellow-400 flex items-center">
          🎬 Movie Review
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400 transition-all duration-300">
            Home
          </Link>
          <Link to="/select-movie" className="text-white hover:text-yellow-400 transition-all duration-300">
            Select Movie
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div 
          className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/select-movie" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
            Select Movie
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
