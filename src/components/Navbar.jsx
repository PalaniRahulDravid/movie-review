import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-yellow-400">
          🎥 Movie Review
        </Link>

        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400 transition-all">
            Home
          </Link>
          <Link to="/select-movie" className="text-white hover:text-yellow-400 transition-all">
            Select Movie
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
