import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EditRecipe from './pages/EditRecipe'
import ViewRecipe from './pages/ViewRecipe'
import SingleView from './pages/SingleViewRecipe'
import RecipeForm from './components/recipeform/RecipeForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipeform" element={<RecipeForm />} />
          <Route path="/EditRecipe/:id" element={<EditRecipe />} />
          <Route path="/ViewRecipe" element={<ViewRecipe />} />
          <Route path="/SingleViewRecipe/:id" element={<SingleView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
