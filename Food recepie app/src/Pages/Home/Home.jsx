import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import RecipeItems from "../../Components/Recepie-Items/Recipe-items";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div className="text-center text-blue-500 text-lg">Loading! Please wait</div>;

  return (
    <div className="container mx-auto p-4 pt-20">
      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipeList.map((item) => (
            <RecipeItems key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-black text-5xl font-bold">No recipes to show ! Please enter something...</div>
      )}
    </div>
  );
}
