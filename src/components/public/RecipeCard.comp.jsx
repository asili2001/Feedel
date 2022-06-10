const RecipeCard = ({recipe}) =>{
    return (
        <>
            <img src={recipe.image} alt="" className="rounded-3xl h-full w-full"/>
            <div className="flex justify-center items-center absolute bottom-0 h-20 w-full rounded-3xl bg-[linear-gradient(0deg,_#1e293b,_#ff000000)] text-white p-2">{recipe.title}</div>
        </>
    )
}

export default RecipeCard;