import "./App.css";
import { Recipe, Ingredient, Ratings } from "./types";
import useRecipeState from "./states/StateManager";
import CreateRecipeComponent from "./components/CreateRecipeComponent";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-recipe" element={<CreateRecipePage />} />
          <Route path="/recipe/" element={<RecipeDetailPage/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
