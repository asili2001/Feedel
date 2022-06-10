import { useParams } from "react-router-dom";
import HeaderComp from "../components/Header.comp";
import Recipe from "../components/public/Recipe.comp";
import RecipeList from "../components/public/RecipesList.comp";

const actions = {GET_BY_ID : 'getById', GET_BY_CATEGORY : 'GetByCategory'}

const Recipes = ()=>{
    const {payload, action} = useParams();
    if (action === 'recipe'){
        return (
            <>
                <HeaderComp />
                <Recipe recipeid = {payload}/>
            </>
        )
    }
    if (action === 'cuisine'){
        return (
            <>
                <HeaderComp />
                <RecipeList data = {payload} type = "cuisine"/>
            </>
        )
    }
}

export default Recipes;