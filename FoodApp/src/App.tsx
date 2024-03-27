import "./App.css";
import { Recipe, Ingredient, Ratings } from "./types";
import useRecipeState from "./states/StateManager";
import CreateRecipeComponent from "./components/CreateRecipeComponent";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
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
