import "./App.css";
import { useState } from "react";
import useRecipeState from "./states/StateManager";
import { Recipe, Ingredient, Ratings } from "./types";
import CreateRecipeComponent from "./components/CreateRecipeComponent";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import DevTools from "./devTesting/devPages/DevTools";
import ComponentDevTestPage from "./devTesting/devPages/ComponentDevTestPage"; 

function App() {
  return (
    <>

      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-recipe" element={<CreateRecipePage />} />
          <Route path="/devTools" element={<DevTools/>} />
          <Route path="/devTest" element={<ComponentDevTestPage/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
