import React, { useState, useEffect } from "react";

export default function Card() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); 

  const API_KEY = "b74da4a0634ded45efff58509726cb71";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`; 

  useEffect(() => {
    if (!searchQuery) {
      return; 
    }

    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data.results);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [url, searchQuery]); 

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value); 
  };

  const openPopup = (movie) => {
    setSelectedMovie(movie);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <input
          type="text"
          className="w-full bg-gray-700 rounded-md p-2 text-white focus:outline-none"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error.message}</p>}
      {!loading && !error && data.length > 0 && (
        <ul className="divide-y divide-gray-700">
          {data.map((movie) => (
            <li key={movie.id} className="p-4 cursor-pointer" onClick={() => openPopup(movie)}>
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-sm text-gray-400">{movie.release_date}</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && data.length === 0 && <p className="text-center p-4">No movies found.</p>}


      {showPopup && selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-75">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full relative">
           
            <h2 className="text-2xl font-bold mb-4 text-white">{selectedMovie.title}</h2>
            <p className="text-gray-300 mb-2">Release Date: {selectedMovie.release_date}</p>
            <p className="text-gray-300 mb-2">Rating: {selectedMovie.vote_average}/10</p>
            <p className="text-gray-300">{selectedMovie.overview}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg focus:outline-none"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
