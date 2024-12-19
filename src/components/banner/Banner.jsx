import { Link } from "react-router-dom";
import Image from "../../assets/images/bannerimage/recipe.jpg"

const Banner = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
            <img  src={Image}  alt="Recipe Background"  className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-black opacity-65"></div>
            <Link to="/recipeform"  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 z-10 no-underline">Add Recipe</Link>
        </div>   
    )    
}

export default Banner;