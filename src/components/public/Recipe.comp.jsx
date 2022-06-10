import { useEffect, useRef, useState } from "react";
import spoonacular from "../../api/spoonacular";
import averageImgColor from "../../hooks/averageImgColor.hook";

const Recipe = (props) =>{
    const {recipeid} = props;
    const [recipe, setRecipe] = useState([]);
    const [imageColors, setImageColors] = useState([{R : 0, G : 0, B : 0}])
    const readMore = useRef();
    const ingredientsPanel = useRef();

    const x = async () =>{
        const response = await spoonacular.get(`recipes/${recipeid}/information`, {
            params : {
                apiKey : process.env.REACT_APP_API_KEY,
            }
        });
        setRecipe(response.data);
    }
    const readMoreDesc = (btnElm)=>{
        readMore.current.classList.toggle('h-full'); 
        readMore.current.classList.toggle('h-32');
        if(btnElm.innerText === "Read More"){
            btnElm.innerText = "Read Less"
        }else{
            btnElm.innerText = "Read More"
        }

    }

    const getAverageColor = (element)=>{
        const colors = averageImgColor(element);
        console.log(colors);
        setImageColors({R : colors.R, G : colors.G, B : colors.B});

    }

    const ingrImage = (name) =>{
        return `https://spoonacular.com/cdn/ingredients_100x100/${name}`;
    }

    const openIngredientsPanel = (action)=>{

        if (action === 'open'){
            document.body.style.overflow = "hidden";
            ingredientsPanel.current.classList.add('top-0');
            ingredientsPanel.current.classList.remove('top-full');
        }

        if(action === 'close'){
            document.body.style.overflow = "unset";
            ingredientsPanel.current.classList.add('top-full');
            ingredientsPanel.current.classList.remove('top-0');
        }


    }

    useEffect(()=>{
        x();
    },[])

    return (
        <section className="w-full h-full md:w-[750px] m-auto">
            <div className="relative w-full rounded-2xl" style={{background : `radial-gradient(circle, rgb(${imageColors.R}, ${imageColors.G}, ${imageColors.B}), rgb(0, 0, 0))`}}>
                <img src={recipe.image} alt={recipe.title} className = "w-full h-96 object-contain" crossOrigin="anonymous" onLoad={(element)=>getAverageColor(element.target)} />
                <div className="absolute bottom-0 w-full p-3 text-white bg-[#0000009c] rounded-b-2xl">
                    <h1 className="font-bold p- text-3xl text-center">{recipe.title}</h1>
                </div>
            </div>
            <div className="flex flex-col gap-10 w-full h-full">
                <div className="flex gap-4 flex-col justify-center h-40 w-full">
                    <div className="flex flex-row justify-between text-base font-bold"><p>Ingredients: {recipe.extendedIngredients ? recipe.extendedIngredients.length : ''}</p> <p>{recipe.servings} servings</p></div>
                    <div className="flex gap-3" onClick={()=>openIngredientsPanel('open')}>
                        {recipe.extendedIngredients ? recipe.extendedIngredients.map((ingr, index)=>{
                            if (index < 3){
                                return (
                                    <div className="flex items-center gap-2 bg-slate-800 text-white rounded-lg p-3 h-14 w-full">
                                        <img src={ingrImage(ingr.image)} alt={ingr.name} className = "h-full "/>
                                        <p>{ingr.name}</p>
                                    </div>
                                )
                            }else if(index === 4){
                                return (
                                    <div className="flex items-center gap-2 bg-slate-800 text-white rounded-lg p-3 h-14 w-full">
                                        +{recipe.extendedIngredients.length - 3} more
                                    </div>

                                )
                            }
                        }) : "Loading"
                        }
                    </div>
                    <div ref = {ingredientsPanel} className = "fixed top-full left-0 h-full w-full bg-[#0e1724] transition-[.5s_ease_all] overflow-auto">
                        <p onClick={()=>openIngredientsPanel('close')} className = "absolute right-0 p-5 cursor-pointer text-3xl font-mono">x</p>
                        <div className="w-full h-full md:w-[750px] m-auto">
                            <ul className="grid grid-cols-2 justify-items-center py-20 gap-10">
                                {recipe.extendedIngredients ? recipe.extendedIngredients.map((ingr, index)=>{
                                    return (
                                        <li className="flex flex-col items-center p-5 bg-[#2222222b] rounded-2xl h-64 w-52">
                                            <div className="flex justify-center rounded-2xl h-4/5 w-full p-5 bg-white">
                                                <img src={ingrImage(ingr.image)} alt={ingr.name} className = "h-full "/>
                                            </div>
                                            <p className="font-bold">{ingr.name}</p>
                                            <p>{ingr.amount} {ingr.unit}</p>
                                        </li>
                                    )
                                }) : "Loading"
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className=" font-bold">Instructions: {recipe.analyzedInstructions ? recipe.analyzedInstructions[0].steps.length : ''}</h1>
                    <ul className="flex flex-col gap-5">
                        {recipe.analyzedInstructions ? recipe.analyzedInstructions[0].steps.map((step)=>{
                            return (
                                <li>
                                    <label className="flex h-full w-full items-center gap-4 bg-[#1e293b] rounded-2xl p-4">
                                        <input type="checkbox" id={'step' + step.number} className=" peer" />
                                        <div className="peer-checked:line-through" htmlFor={'step' + step.number}>{step.step}</div>
                                    </label>
                                </li>
                            )
                        }): 'loading'}
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                <h1 className=" font-bold">Summary: </h1>
                    <div className="flex flex-col">
                        <h3 ref = {readMore} dangerouslySetInnerHTML={{__html: recipe.summary}} className = "overflow-hidden h-32 transition-[.5s_ease_all]"></h3>
                        <button onClick={(event)=>readMoreDesc(event.target)} className = "p-2 bg-slate-400 rounded-lg">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recipe;