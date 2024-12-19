import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddRecipeThunk } from '../../services/action/RecipeAction';
import { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RecipeForm = () => {

    const { isCreated } = useSelector(state => state.RecipeReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [RecipeInput, setRecipeInput] = useState({
        recipeName: '',
        cuisineType: '',
        category: '',
        ingredients: '',
        instructions: '',
        preparationTime: '',
        cookingTime: '',
        serving: '',
        difficulty: '',
        notes: '',
        recipeimage: ''
    })

    const RecipeSubmit = (e) => {
        e.preventDefault()
        dispatch(AddRecipeThunk(RecipeInput))
        console.log(RecipeInput)
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setRecipeInput((prev) => ({
                ...prev,
                recipeimage: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (isCreated) {
            navigate('/viewrecipe')
        }
    }, [isCreated]);

    return (
        <>
            <section className='py-20'>
                <Container>
                    <div className="navigateButton text-center mb-10 flex items-center justify-center gap-x-3">
                        <Link to={"/"} className="px-3 py-2 bg-primary text-white rounded-lg inline-block">Home</Link>
                        <Link to={"/ViewRecipe"} className="px-3 py-2 bg-primary text-white rounded-lg inline-block">View Recipe</Link> 
                    </div>
                    <Row className='justify-content-center'>
                        <Col lg={7}>
                            <div className="min-h-screen flex items-center justify-center">
                                <div className="bg-white p-10 rounded-lg shadow-lg w-full">
                                    <h1 className="text-2xl font-bold text-center mb-6">Recipe Form</h1>
                                    <form className="space-y-4" onSubmit={RecipeSubmit}>
                                        {/* Recipe Name */}
                                        <div>
                                            <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">Recipe Name</label>
                                            <input type="text" id="recipeName" name='recipeName' value={RecipeInput.recipeName} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2" placeholder="Enter recipe name" onChange={(e) => setRecipeInput({ ...RecipeInput, recipeName: e.target.value })} />
                                        </div>

                                        {/* Cuisine Type */}
                                        <div>
                                            <label htmlFor="cuisineType" className="block text-sm font-medium text-gray-700">Cuisine Type</label>
                                            <select id="cuisineType" name='cuisineType' value={RecipeInput.cuisineType} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2" onChange={(e) => setRecipeInput({ ...RecipeInput, cuisineType: e.target.value })}>
                                                <option value="">Select Cuisine</option>
                                                <option value="Italian">Italian</option>
                                                <option value="Chinese">Chinese</option>
                                                <option value="Indian">Indian</option>
                                                <option value="Mexican">Mexican</option>
                                                <option value="French">French</option>
                                            </select>
                                        </div>

                                        {/* Category */}
                                        <div>
                                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                            <select id="category" name='category' value={RecipeInput.category} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2" onChange={(e) => setRecipeInput({ ...RecipeInput, category: e.target.value })}>
                                                <option value="">Select Category</option>
                                                <option value="Breakfast">Breakfast</option>
                                                <option value="Lunch">Lunch</option>
                                                <option value="Dinner">Dinner</option>
                                                <option value="Dessert">Dessert</option>
                                                <option value="Snack">Snack</option>
                                            </select>
                                        </div>

                                        {/* Ingredients */}
                                        <div>
                                            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
                                            <textarea id="ingredients" name='ingredients' value={RecipeInput.ingredients} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2 resize-none" placeholder="List the ingredients" rows="4" onChange={(e) => setRecipeInput({ ...RecipeInput, ingredients: e.target.value })}></textarea>
                                        </div>

                                        {/* Instructions */}
                                        <div>
                                            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
                                            <textarea id="instructions" name='instructions' value={RecipeInput.instructions} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2 resize-none" placeholder="Write the cooking instructions" rows="6" onChange={(e) => setRecipeInput({ ...RecipeInput, instructions: e.target.value })}></textarea>
                                        </div>

                                        {/* Preparation Time */}
                                        <div>
                                            <label htmlFor="preparationTime" className="block text-sm font-medium text-gray-700">Preparation Time (in minutes)</label>
                                            <input type="number" id="preparationTime" name='preparationTime' value={RecipeInput.preparationTime} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2" placeholder="Enter preparation time" onChange={(e) => setRecipeInput({ ...RecipeInput, preparationTime: e.target.value })} />
                                        </div>

                                        {/* Cooking Time */}
                                        <div>
                                            <label htmlFor="cookingTime" className="block text-sm font-medium text-gray-700">Cooking Time (in minutes)</label>
                                            <input type="number" id="cookingTime" name='cookingTime' value={RecipeInput.cookingTime} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2" placeholder="Enter cooking time" onChange={(e) => setRecipeInput({ ...RecipeInput, cookingTime: e.target.value })} />
                                        </div>

                                        {/* Serving */}
                                        <div>
                                            <label htmlFor="serving" className="block text-sm font-medium text-gray-700">Servings</label>
                                            <input type="number" id="serving" name='serving' value={RecipeInput.serving} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2" placeholder="Number of servings" onChange={(e) => setRecipeInput({ ...RecipeInput, serving: e.target.value })} />
                                        </div>

                                        {/* Difficulty Level */}
                                        <div>
                                            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty Level</label>
                                            <select id="difficulty" name='difficulty' value={RecipeInput.difficulty} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2" onChange={(e) => setRecipeInput({ ...RecipeInput, difficulty: e.target.value })}>
                                                <option value="">Select Difficulty</option>
                                                <option value="Easy">Easy</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Hard">Hard</option>
                                            </select>
                                        </div>

                                        {/* Upload Image */}
                                        <div>
                                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                                            <input type="file" id="image" name='recipeimage' onChange={handleImage} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                        </div>

                                        {/* Notes */}
                                        <div>
                                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes / Tips</label>
                                            <textarea id="notes" name='notes' value={RecipeInput.notes} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-2 resize-none" placeholder="Add any extra tips or notes for this recipe" rows="4" onChange={(e) => setRecipeInput({ ...RecipeInput, notes: e.target.value })}></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div>
                                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"> Submit Recipe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default RecipeForm;
