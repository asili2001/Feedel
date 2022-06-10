import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from './reducers/recipes'

export default configureStore({
    reducer : {
        recipe : RecipeReducer
    }
})