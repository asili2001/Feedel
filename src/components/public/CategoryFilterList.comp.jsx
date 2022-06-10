import Italian from '../../assets/images/pasta.jpg';
import MiddleEastern from '../../assets/images/kabse.jpg';
import American from '../../assets/images/burger.png';
import Indien from '../../assets/images/Matar-Paneer.jpg';
import { NavLink } from 'react-router-dom';
const CategoryFilterList = ()=>{
    return(
        <section className="flex justify-center p-3 w-full">
            <ul className="flex gap-4 flex-wrap justify-center">
                <NavLink to={'/recipes/cuisine/italian'}>
                    <li className="flex flex-col justify-center items-center h-24 w-24 rounded-full text-center">
                        <img src={Italian} alt="pasta" className=" object-cover rounded-full h-12 w-12"/>
                        <p>Italian Food</p>
                    </li>
                </NavLink>
                <NavLink to={'/recipes/cuisine/Middle Eastern'}>
                    <li className="flex flex-col justify-center items-center h-24 w-24 rounded-full text-center">
                        <img src= {MiddleEastern} alt="kabse" className=" object-cover rounded-full h-12 w-12"/>
                        <p>Middle Eastern Food</p>
                    </li>
                </NavLink>

                <NavLink to={'/recipes/cuisine/American'}>
                    <li className="flex flex-col justify-center items-center h-24 w-24 rounded-full text-center">
                        <img src= {American} alt="burger" className=" object-cover rounded-full h-12 w-12"/>
                        <p>American Food</p>
                    </li>
                </NavLink>

                <NavLink to={'/recipes/cuisine/Indian'}>
                    <li className="flex flex-col justify-center items-center h-24 w-24 rounded-full text-center">
                        <img src= {Indien} alt="Indian food" className=" object-cover rounded-full h-12 w-12"/>
                        <p>Indian Food</p>
                    </li>
                </NavLink>
            </ul>
        </section>
    )
}

export default CategoryFilterList;