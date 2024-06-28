import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=20"
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
  }, []);

  const handlePopUp = (currId) => {
    setPopup(currId);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <div className="flex flex-wrap justify-center p-4 bg-gray-100">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="m-2 p-2 border rounded-lg shadow-lg bg-white"
        >
          <img
            src={photo.download_url}
            alt={photo.author}
            className="w-48 h-48 object-cover rounded-md"
          />
          <p className="text-center mt-2 text-gray-700 font-semibold">
            {photo.author}
          </p>
          <button
            onClick={() => handlePopUp(photo.id)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Show popup
          </button>
        </div>
      ))}

      {popup !== null && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={photos.find((photo) => photo.id === popup)?.download_url}
              alt="Popup"
              className="max-w-full max-h-full"
            />
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 m-4 bg-gray-300 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
