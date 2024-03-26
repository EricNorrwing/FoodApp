import "./App.css";
import { Recipe, Ingredient, Ratings } from "./types";
import useRecipeState from "./states/StateManager";
import CreateRecipeComponent from "./components/CreateRecipeComponent";
import { useState } from "react";
import CreateRecipePage from "./pages/CreateRecipePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-recipe" element={<CreateRecipePage />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
