import { Link } from "react-router-dom";
import Image from "../../assets/images/bannerimage/recipe.jpg"
import RecipeVideo from "../../assets/video/Home.mp4";

const Banner = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
            <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
                <source src={RecipeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <Link to="/recipeform" className="bg-[#33ac18] text-white py-2 px-4 rounded hover:bg-[#388c25] transition duration-300 z-10 no-underline">Add Recipe</Link>
        </div>
    )
}

export default Banner;