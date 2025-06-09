import { useContext } from 'react';
import { Recipecontext } from '../context/RecipeContext';
import Recipecard from '../components/RecipeCard';


const Recipe = () => {
    const { data } = useContext(Recipecontext)

    const renderrecipe = data.map((recipe) => (
     <Recipecard key = {recipe.id} recipe={recipe}/>
    ))

    return (
        <div className=''>
            {renderrecipe}
        </div>
    )
}

export default Recipe