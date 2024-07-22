import "./index.css";
import { useState, useMemo, useEffect, useCallback } from "react";

const menu = [
  {
    name: "Classic Bruschetta",
    price: 8.99,
    description:
      "Italian bread toast with fresh tomato, basil, and a touch of garlic.",
    category: "Starters",
    image: "./Assets/Classic Bruschetta.jpg",
  },
  {
    name: "Fried Calamari",
    price: 10.99,
    description: "Fresh calamari battered and fried, served with tartar sauce.",
    category: "Starters",
    image: "./Assets/Fried Calamari.jpg",
  },
  {
    name: "Caprese Salad",
    price: 9.99,
    description: "Slices of tomato, fresh mozzarella, basil, and olive oil.",
    category: "Starters",
    image: "./Assets/Caprese Salad.jpg",
  },
  {
    name: "Tomato Basil Soup",
    price: 7.99,
    description: "Creamy tomato and basil soup with a touch of cream.",
    category: "Starters",
    image: "./Assets/Tomato Basil Soup.jpg",
  },
  {
    name: "Spaghetti Carbonara",
    price: 15.99,
    description: "Pasta with pancetta, egg, parmesan cheese, and black pepper.",
    category: "Main Courses",
    image: "./Assets/Spaghetti Carbonara.jpg",
  },
  {
    name: "Mushroom Risotto",
    price: 18.99,
    description: "Creamy rice with a mix of mushrooms and parmesan cheese.",
    category: "Main Courses",
    image: "./Assets/Mushroom Risotto.jpg",
  },
  {
    name: "Lemon Chicken",
    price: 16.99,
    description:
      "Chicken breast marinated in lemon and herbs, served with mashed potatoes.",
    category: "Main Courses",
    image: "./Assets/Lemon Chicken.jpg",
  },
  {
    name: "Bolognese Lasagna",
    price: 17.99,
    description:
      "Layers of pasta, bolognese sauce, béchamel, and gratinated cheese.",
    category: "Main Courses",
    image: "./Assets/Bolognese Lasagna.jpg",
  },
  {
    name: "Margherita Pizza",
    price: 14.99,
    description:
      "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
    category: "Main Courses",
    image: "./Assets/Margherita Pizza.jpg",
  },
  {
    name: "Grilled Fish",
    price: 20.99,
    description: "Fresh grilled fish fillet with roasted vegetables.",
    category: "Main Courses",
    image: "./Assets/Grilled Fish.jpg",
  },
  {
    name: "Eggplant Parmesan",
    price: 15.99,
    description:
      "Baked eggplant with tomato sauce, mozzarella, and parmesan cheese.",
    category: "Main Courses",
    image: "./Assets/Eggplant Parmesan.jpg",
  },
  {
    name: "Tiramisu",
    price: 8.99,
    description:
      "Classic Italian dessert with layers of sponge cake, coffee, mascarpone, and cocoa.",
    category: "Desserts",
    image: "./Assets/Tiramisu.jpg",
  },
  {
    name: "Panna Cotta",
    price: 7.99,
    description: "Creamy vanilla dessert served with berry coulis.",
    category: "Desserts",
    image: "./Assets/Panna Cotta.jpg",
  },
  {
    name: "Lemon Gelato",
    price: 6.99,
    description: "Artisanal lemon ice cream, refreshing and light.",
    category: "Desserts",
    image: "./Assets/Lemon Gelato.jpg",
  },
  {
    name: "Sicilian Cannoli",
    price: 8.99,
    description:
      "Fried pastry tubes filled with sweet ricotta and chocolate chips.",
    category: "Desserts",
    image: "./Assets/Sicilian Cannoli.jpg",
  },
  {
    name: "Fresh Lemonade",
    price: 4.99,
    description: "Homemade lemonade with a touch of mint.",
    category: "Beverages",
    image: "./Assets/Fresh Lemonade.jpg",
  },
  {
    name: "Espresso Coffee",
    price: 3.99,
    description: "Italian espresso coffee, intense and aromatic.",
    category: "Beverages",
    image: "./Assets/Espresso Coffee.jpg",
  },
  {
    name: "Chamomile Tea",
    price: 3.99,
    description: "Chamomile infusion, perfect for relaxing.",
    category: "Beverages",
    image: "./Assets/Chamomile Tea.jpg",
  },
  {
    name: "Chardonnay White Wine",
    price: 6.99,
    description: "Dry white wine with notes of apple and citrus.",
    category: "Beverages",
    image: "./Assets/Chardonnay White Wine.jpg",
  },
  {
    name: "Merlot Red Wine",
    price: 6.99,
    description:
      "Smooth red wine with flavors of red fruits and a touch of spices.",
    category: "Beverages",
    image: "./Assets/Merlot Red Wine.jpg",
  },
];

const categories = ["all", "Starters", "Main Courses", "Desserts", "Beverages"];

function Menu() {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleChange = useCallback((event) => {
    setSelectedOption(event.target.value);
  }, []);

  const filteredMenu = useMemo(() => {
    const filtered =
      selectedOption === "all"
        ? menu
        : menu.filter((dish) => dish.category === selectedOption);
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedOption]);

  return (
    <main>
      <div className="nav-filter container ">
        {categories.map((category) => (
          <label
            key={category}
            className={category === selectedOption ? "selected" : ""}
          >
            <input
              type="radio"
              value={category}
              checked={selectedOption === category}
              onChange={handleChange}
            />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))}
      </div>

      <section className={`menu-section container grid `}>
        {filteredMenu.map((dish) => (
          <article className="dish-card" key={dish.name}>
            <img src={dish.image} alt={dish.name} loading="lazy" />
            <div className="dish-info">
              <div className="dish-title">
                <h2>{dish.name}</h2>
                <span>${dish.price}</span>
              </div>
              <p>{dish.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Menu;
