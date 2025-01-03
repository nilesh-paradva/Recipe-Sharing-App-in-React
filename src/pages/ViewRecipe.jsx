import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddFavoriteRecipeThunk, DeleteRecipeThunk, GetRecipeThunk, SingleRecipeThunk } from "../services/action/RecipeAction";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRecipe from "../assets/images/loader/addRecipe2.gif"

const ViewRecipe = () => {
    const { recipes, isloading } = useSelector((state) => state.RecipeReducer);
    const [serchRecipeItem, setSerchRecipeItem] = useState('');
    const [filterRecipe, setFilterRecipe] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const favoriteRecipe = (recipe) => {
        dispatch(AddFavoriteRecipeThunk(recipe));
        navigate('/favoriterecipe');
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSerchRecipeItem(searchValue);
    }

    useEffect(() => {
        const filteredRecipes = recipes.filter((recipe) => recipe.recipeName.toLowerCase().includes(serchRecipeItem.toLowerCase()));
        setFilterRecipe(filteredRecipes);
    }, [recipes, serchRecipeItem]);

    useEffect(() => {
        dispatch(GetRecipeThunk());
    }, []);

    return (
        <>
            <section className="py-20">
                <div className="container-sm">
                    <Row>
                        <div className="navigate-button mb-3 text-center flex items-center justify-center gap-x-3">
                            <Link to={"/"} className="px-3 py-2 bg-primary text-white rounded-lg inline-block">Home</Link>
                            <Link to={"/recipeform"} className="px-3 py-2 bg-primary text-white rounded-lg inline-block">Add Recipe</Link>
                        </div>
                        <div className="searchRecipe mb-4">
                            <label htmlFor="search " className="block mb-1 ">Search Recipe</label>
                            <input type="text" placeholder="Search for a recipe" className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary" value={serchRecipeItem} onChange={handleChange} />
                        </div>

                        {isloading ? <div className="flex items-center justify-center">
                            <img src={AddRecipe} alt="" />
                        </div> :
                            filterRecipe.length === 0 ? <h1 className="text-center">No Recipe Found</h1> :
                                filterRecipe.map((recipe) => (
                                    <Col lg={4} md={6} key={recipe.id}>
                                        <div className="flex flex-col rounded-lg overflow-hidden shadow-xl h-full transition-transform duration-300 hover:shadow-2xl">
                                            <img className="h-48 w-full transition-transform duration-300 hover:scale-110" src={recipe.recipeimage || 'https://via.placeholder.com/150'} alt={recipe.recipeName || 'Recipe Image'} />

                                            <div className="flex flex-col justify-between bg-white rounded-b-lg flex-1">
                                                <div className="recipe-dis mb-3 p-3">
                                                    <h4 className="font-bold text-2xl text-gray-900 mb-2 text-center transition-colors duration-300 hover:text-[#60608a]">
                                                        <span >{recipe.recipeName}</span>
                                                        <p className="text-[#454343] font-light italic h6">{recipe.recipeDescription}</p>
                                                    </h4>
                                                </div>

                                                <div className="recipe-dis mb-3">
                                                    <p className="text-gray-700 text-base font-bold mb-2 flex items-center justify-between p-1 px-3 hover:bg-[#f1efef] transition duration-200">
                                                        <span>Cuisine Type:</span><span>{recipe.cuisineType}</span>
                                                    </p>
                                                    <p className="text-gray-700 text-base font-bold mb-2 flex items-center justify-between p-1 px-3 hover:bg-[#f1efef] transition duration-200">
                                                        <span>Category : </span><span>{recipe.category}</span>
                                                    </p>
                                                </div>

                                                <div className="recipe-dis mb-3">
                                                    <p className="text-gray-700 text-base font-bold mb-2 flex items-center justify-between p-1 px-3 hover:bg-[#f1efef] transition duration-200">
                                                        <span>Preparation Time:</span><span>{recipe.preparationTime} min</span>
                                                    </p>
                                                    <p className="text-gray-700 text-base font-bold mb-2 flex items-center justify-between p-1 px-3 hover:bg-[#f1efef] transition duration-200">
                                                        <span>Cooking Time:</span><span>{recipe.cookingTime} min</span>
                                                    </p>
                                                    <p className="text-gray-700 text-base font-bold mb-2 flex items-center justify-between p-1 px-3 hover:bg-[#f1efef] transition duration-200">
                                                        <span>Servings:</span><span>{recipe.serving}</span>
                                                    </p>
                                                    <p className="text-gray-700 text-base font-bold mb-2 flex items-center justify-between p-1 px-3 hover:bg-[#f1efef] transition duration-200">
                                                        <span>Difficulty Level:</span><span>{recipe.difficulty}</span>
                                                    </p>
                                                </div>

                                                <div className="flex justify-between mt-4 px-3 pb-3">
                                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md" onClick={() => navigate(`/SingleViewRecipe/${recipe.id}`)}>View</button>
                                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md" onClick={() => navigate(`/editrecipe/${recipe.id}`)}>Edit</button>
                                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md" onClick={() => dispatch(DeleteRecipeThunk(recipe.id))}>Delete</button>
                                                </div>

                                                <div className="addfavorite text-center py-4">
                                                    <Button size="md" color="success" className="!bg-green-700 !text-white m-0 transition-all duration-200 hover:shadow-xl" onClick={() => favoriteRecipe(recipe)}>Add Favorite<span className="ps-1"><FavoriteIcon className="!text-[18px] text-[#206320]" /></span></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                        }
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ViewRecipe;
