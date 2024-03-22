import "./App.css";
import HomePage from "./pages/HomePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/homePageSection/Header";
import Footer from "./components/homePageSection/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-recipe" element={<CreateRecipePage />} />
          {/* <Route path="/recipes" element={<AllRecipes />} />
          <Route path="about-us" element={<About />} />
          <Routepath="/recipes/:_id"element={<SingleRecipe recipe={Recipe} />}
          <Route path="contact-us" element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
