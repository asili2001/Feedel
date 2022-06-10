import CategoryList from "./public/CategoryList.comp";
import CategoryFilterList from "./public/CategoryFilterList.comp";
import SearchComp from "./public/Search.comp";

const HomeComp = () => {
    return (
        <section className="w-full h-full md:w-[750px] m-auto">
            <SearchComp/>
            <CategoryFilterList />
            <CategoryList title = "Picked just for you" category = {{type : "random", tags : "", limit : 8}}/>
            <CategoryList title = "Ketogenic Food" category = {{type : "random", tags :"ketogenic", limit : 8}} />
            <CategoryList title = "Feeling Vegetarian?" category = {{type : "random", tags : "vegetarian", limit : 8}}/>
            <CategoryList title = "Or maybe Vegan?" category = {{type : "random", tags: "vegan", limit : 8}}/>
        </section>
    )
}
export default HomeComp;