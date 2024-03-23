import CreateRecipePage from "./pages/CreateRecipePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/create-recipe" element={<CreateRecipePage />} />
          {/* <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/cocktails" element={<AllCocktails />} />
          <Route path="/recipes/:_id" element={<SingleRecipe />} />
          <Route path="/categories/:_id" element={<AllCategories />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<ContactPage />} /> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
