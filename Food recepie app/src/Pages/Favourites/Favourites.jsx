import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/Context'
import RecipeItems from '../../Components/Recepie-Items/Recipe-items';

export default function Favourites() {
    const { favourites } = useContext(GlobalContext);
  
  
    return (
      <div className="container mx-auto p-4 pt-20">
        {favourites && favourites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favourites.map((item) => (
              <RecipeItems key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-black text-5xl font-bold">No recipes added in Favourites</div>
        )}
      </div>
    );
  }