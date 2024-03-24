import React from "react";
import "./CreateRecipeSection.css";
import { Link } from "react-router-dom";

const CreateRecipeSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Craft Your Culinary Masterpiece</h1>
        <p>
          Share your unique flavors with the world. Our intuitive recipe creator
          makes it easy to document your recipes, add ingredients, and jot down
          cooking instructions. Start crafting your culinary masterpiece today!
        </p>
        <Link to="/create-recipe">
          <button className="cta-button">Create Your Own Recipe</button>
        </Link>
      </div>
    </section>
  );
};

export default CreateRecipeSection;
