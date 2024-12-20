import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { SingleRecipeThunk } from '../services/action/RecipeAction';
import { useDispatch, useSelector } from 'react-redux';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CookieIcon from '@mui/icons-material/Cookie';
import CategoryIcon from '@mui/icons-material/Category';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { IconButton, Tooltip } from '@mui/material';

const SingleView = () => {

    const { recipe } = useSelector(state => state.RecipeReducer);
    console.log("single recipe: ", recipe);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(SingleRecipeThunk(id))
    }, [id]);

    return (
        <section className='flex items-center justify-center py-10'>
            <Container>
                <Row >
                    <div className="navigate-button mb-9 text-center flex items-center justify-center gap-x-3">
                        <Link to={"/"} className="px-3 py-2 bg-primary text-white rounded-lg inline-block">Home</Link>
                        <Link to={"/recipeform"} className="px-3 py-2 bg-primary text-white rounded-lg inline-block">Add Recipe</Link>
                        <Link to={"/ViewRecipe"} className="px-3 py-2 bg-primary text-white rounded-lg inline-block">View Recipe</Link>
                    </div>
                    {!recipe ?
                        <div className="text-center">
                            <Spinner animation="border" variant="primary" />
                            <p>Loading Single View Recipes...</p>
                        </div> :

                        <Col>
                            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                                {/* Title and Subtitle */}
                                <div className="text-center">
                                    <h1 className="text-2xl font-bold text-green-600">{recipe.recipeName}</h1>
                                    <p className="text-gray-600 italic">{recipe.recipeDescription}</p>

                                </div>

                                {/* Icons Section */}
                                <div className="flex justify-around text-gray-600 mb-16 mt-5">
                                    <div className="text-center">
                                        <p className="text-xl font-bold flex items-center justify-center flex-col"><span><CookieIcon className="text-green-600 !text-3xl" /></span>{recipe.difficulty}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl font-bold flex items-center justify-center flex-col"><span><AccessTimeIcon className="text-green-600 !text-3xl" /></span>{recipe.cookingTime} min</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl font-bold flex items-center justify-center flex-col"><span><CategoryIcon className="text-green-600 !text-3xl" /></span>{recipe.category}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl font-bold flex items-center justify-center flex-col"><span><RestaurantIcon className="text-green-600 !text-3xl" /></span>{recipe.serving} servings</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    {/* Ingredients Section */}
                                    <div>
                                        <div className="tootip flex items-center justify-center">
                                            <Tooltip title={recipe.ingredients} placement="left">
                                                <IconButton className='hover:!bg-transparent !text-center'>
                                                    <h2 className="text-lg font-bold text-green-600 pb-2 !hover:none inline-block">INGREDIENTS</h2>
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                        <div className="mt-6">
                                            <img src={recipe.recipeimage} alt="Italian Pasta" className="w-full rounded-lg shadow-md" />
                                        </div>
                                    </div>

                                    {/* Cooking Steps Section */}
                                    <div>
                                        <h2 className="text-lg font-bold text-green-600 border-b border-green-300 pb-2">COOKING STEPS</h2>
                                        <ul className="list-decimal list-inside text-sm text-gray-700 mt-2 space-y-2">
                                            <li>{recipe.instructions}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        </section>
    );
};

export default SingleView;