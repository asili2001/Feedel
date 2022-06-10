import { createSlice } from "@reduxjs/toolkit";

export const RecipesSlice = createSlice({
    name : 'recipes',
    initialState : {
        recipes : [],
        currentRecipe : []
    },
    reducers : {
        selectRecipe : (state, action) =>{
            state.currentRecipe = action.payload;
        },
        setRecipes : (state, action) =>{
            const tryFind = state.recipes.find(x => x.category === action.category);
            if(tryFind){
                console.log("found");
            }else{
                state.recipes.push(action.payload);
                console.log("inserted : ", action.payload);
            }
        }
    }
})

export const {selectRecipe, setRecipes} = RecipesSlice.actions;
export default RecipesSlice.reducer;