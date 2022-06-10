import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import RecipeCard from "./RecipeCard.comp";
import spoonacular from "../../api/spoonacular";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "../../redux/reducers/recipes";
import { NavLink } from "react-router-dom";

const CategoryList = (props) =>{
    const[categoryRecipes, setCategoryRecipes] = useState([]);
    const dispatch = useDispatch();

    const selectRecipe = (event)=>{
        console.log(event.target.id);
    }
    
    useEffect(()=>{
        const getRecipes = async () =>{
            let data;
            if(props.category.type === "random"){
                data = await spoonacular.get('/recipes/random', {
                    params : {
                        apiKey : process.env.REACT_APP_API_KEY,
                        number : props.category.limit,
                        tags : props.category.tags
                    }
                })
            }
    
            setCategoryRecipes([data.data.recipes]);
        }
        getRecipes();
    }, [])


    return (
        
        <section className="p-3">
            <p className="font-bold p-3 text-[#ffffff]">{props.title}</p>
            <div className="flex justify-center w-full">
                <Swiper spaceBetween={10} freeMode={true} pagination={{clickable: true}} modules={[FreeMode, Pagination]} breakpoints={
                    {
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    "@0.75": {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    }}
                >
                    {
                        categoryRecipes[0] ?
                        categoryRecipes[0].map((recipe)=>{
                            console.log("recipe", recipe);
                            return (
                                <SwiperSlide className="rounded-full w-full" onClick={(e)=>selectRecipe(e)} id = {recipe.id}>
                                    <NavLink to={`/recipes/recipe/${recipe.id}`}>
                                        <RecipeCard recipe = {recipe}/>
                                    </NavLink>
                                </SwiperSlide>
                            )
                        }) : "loading ..."
                    }
                </Swiper>
            </div>
        </section>
    )
}
export default CategoryList;