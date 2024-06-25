import React, { createContext, useState } from "react";


export const GlobalContext = createContext(null);

export default function Context({ children }) {

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [detailsData, setDetailsData] = useState([]);

  async function handleSubmit (event) {
    event.preventDefault()
    setLoading(true)
    try {
        
        const response  = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
        const data = await response.json()

        if (data.data.recipes) {
            setRecipeList(data.data.recipes)
            setLoading(false)
            setSearch('')
        }

        if (data.data.recipes === 0) {
            <div>No recipes available!</div>
        }

        console.log(data);

    } catch (error) {
        console.log(error)
        setLoading(false)
        setSearch('')
    }
  }

  return (
    <GlobalContext.Provider value={{ search, setSearch, handleSubmit , loading , recipeList , detailsData , setDetailsData }}>
      {children}
    </GlobalContext.Provider>
  );
}
