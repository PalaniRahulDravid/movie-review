import { useState } from "react";
import movies from "../data/movies";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SelectMovie() {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isValidMovie, setIsValidMovie] = useState(false);
  const navigate = useNavigate();

  // Function to filter movies
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      setFilteredMovies([]);
      setIsValidMovie(false);
    } else {
      const filtered = movies.filter((movie) =>
        movie.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
      setIsValidMovie(filtered.includes(value));         // Checking if movie is valid
    }
  };

  // Function to select a movie
  const handleSelectMovie = (movie) => {
    setSearch(movie);
    setFilteredMovies([]);
    setIsValidMovie(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Select a Movie</h1>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={handleSearch}
        className="p-3 w-80 rounded-lg bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredMovies.length > 0 && (
        <motion.ul
          className="mt-2 bg-gray-800 text-white w-80 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredMovies.map((movie, index) => (
            <motion.li
              key={index}
              className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-200"
              onClick={() => handleSelectMovie(movie)}
              whileHover={{ scale: 1.05 }}
            >
              {movie}
            </motion.li>
          ))}
        </motion.ul>
      )}

      {search && !isValidMovie && filteredMovies.length === 0 && (
        <p className="mt-3 text-red-500">Movie Not Found</p>
      )}

      <button
        onClick={() => navigate("/review")}
        className={`mt-4 px-6 py-2 text-lg font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 cursor-pointer ${
          isValidMovie ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isValidMovie} // Disable button if movie is not found
      >
        Next
      </button>
    </div>
  );
}

export default SelectMovie;
