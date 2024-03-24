import "./App.css";
import { Recipe, Ingredient, Ratings } from "./types";
import useRecipeState from "./states/StateManager";
import CreateRecipeComponent from "./components/CreateRecipeComponent";
import { useState } from "react";
// import HomePage from "./pages/HomePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipePage />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
