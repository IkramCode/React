import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(null);

export default function Context({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [detailsData, setDetailsData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();

      if (data.data.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearch("");
        navigate('/')
      }
      console.log(data);

    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearch("");
    }
  }

  function handleFavourites (getCurrItem) {
    console.log(getCurrItem);
    let copyFavList = [...favourites]
    const index = copyFavList.findIndex(item => item.id === getCurrItem.id)
    if(index === -1){
      copyFavList.push(getCurrItem)
    } else {
      copyFavList.splice(index)
    }

    setFavourites(copyFavList)
    console.log(favourites);

  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        loading,
        recipeList,
        detailsData,
        setDetailsData,
        favourites,
        setFavourites,
        handleFavourites
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
