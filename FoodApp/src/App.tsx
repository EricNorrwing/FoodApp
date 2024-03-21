import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllRecipes from "./pages/AllRecipes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipes" element={<AllRecipes />} />
          {/* This is just an example for a component we can have on the Homepage */}
          {/* <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/cocktails" element={<AllCocktailsPage />} />
          <Route
            path="/recipes/:title"
            element={<SingleRecipe recipe={RecipeCard} />}
          />
          <Route path="about-us" element={<About />} />
          <Route path="blog" element={<Blog />} />

          Feel free to add more routes as needed or take some away! */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
