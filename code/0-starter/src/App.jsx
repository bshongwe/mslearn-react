// Unit 7 - Import the CSS - Step 2
import './index.css'
// #1. Create the component step
import React from 'react';
import RecipeTitle from './RecipeTitle' // Use the RecipeTitle component - Step 6

function App() {
    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle /> // Use the RecipeTitle component - Step 3
        </article>
    )
}

export default App;