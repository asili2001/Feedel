import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import spoonacular from "../../api/spoonacular";
import Recipe from "./Recipe.comp";
import RecipeCard from "./RecipeCard.comp";


const RecipeList = (params)=>{
    const [recipes, setRecipes] = useState([]);
    const {type, data } = params;
    useEffect(()=>{
        const getRecipes = async () =>{
            let response;
            if(type === "cuisine"){
                response = await spoonacular.get('/recipes/complexSearch', {
                    params : {
                        apiKey : process.env.REACT_APP_API_KEY,
                        cuisine : data,
                        number : 100
                    }
                })
            }
    
            setRecipes([...response.data.results]);
        }
        getRecipes();
    }, [])

    return (
        <section className="w-full h-full md:w-[750px] m-auto">
            <div className="grid grid-cols-3 justify-items-center gap-9">
                {recipes.map((recipe)=>{
                    return (
                        <div className="rounded-full w-full relative" id = {recipe.id}>
                            <NavLink to={`/recipes/recipe/${recipe.id}`}>
                                <RecipeCard recipe = {recipe}/>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default RecipeList