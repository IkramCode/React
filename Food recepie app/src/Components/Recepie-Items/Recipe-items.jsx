import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeItems({ item }) {
    return (
        <div className="bg-orange-100 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden h-48">
                <img className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" src={item.image_url} alt='recipe-img' />
            </div>
            <div className="p-4">
                <div className="text-orange-500 text-sm mb-2">{item.publisher}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <Link to={`/recipe-item/${item.id}`} className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-white text-black hover:bg-gray-200">
                    Recipe Details
                </Link>
            </div>
        </div>
    )
}
