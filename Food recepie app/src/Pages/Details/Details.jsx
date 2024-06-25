import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

export default function Details() {
  const { detailsData, setDetailsData, handleFavourites, favourites } =
    useContext(GlobalContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDetailsData() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data.data) {
          setDetailsData(data.data.recipe);
          setLoading(false);
        } else {
          throw new Error("No data found for the recipe.");
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    getDetailsData();
  }, [id, setDetailsData]);

  if (loading) return <p className="text-center text-orange-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!detailsData)
    return <p className="text-center text-gray-500">No details available.</p>;

  const { image_url, publisher, title, ingredients } = detailsData || {};

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row bg-white shadow-lg rounded-lg container pt-20">
      {detailsData && (
        <>
          <img
            className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
            src={image_url}
            alt={title}
          />
          <div className="mt-4 md:mt-0 md:ml-6 flex-1">
            <span className="block text-sm text-gray-600">{publisher}</span>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <button
              onClick={() => handleFavourites(detailsData)}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-700 transition"
            >
              {favourites &&
              favourites.length > 0 &&
              favourites.findIndex(
                (item) => item.id === detailsData.id
              ) !== -1
                ? "Remove from favourites"
                : "Add to favourites"}
            </button>
            <div className="mt-6">
              <span className="block text-lg font-semibold text-gray-700">
                Ingredients:
              </span>
              <ul className="mt-2 space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-gray-700">
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                    <span className="text-gray-900 font-medium">
                      {ingredient.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
