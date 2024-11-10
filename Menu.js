import React, { useState } from 'react';
import './Menu.css';

const initialMenuData = {
    "Shawarma": { 
        category: "Main Course", 
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top&resize=1200:*",
        ingredients: ["Chicken", "Garlic", "Yogurt", "Spices"],
        description: "A popular Middle Eastern dish with spiced, grilled meat.",
        videoUrl: "https://youtube.com/embed/uvsWOi78FP8" // Example video URL in embed format
    },
    "Biryani": { 
        category: "Main Course", 
        imageUrl: "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_1799/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg",
        ingredients: ["Rice", "Chicken", "Saffron", "Spices", "Yogurt"],
        description: "A fragrant and flavorful rice dish cooked with chicken, spices, and herbs.",
        videoUrl: "https://www.youtube.com/embed/95BCU1n268w" // Embed YouTube URL
    },
    "Kaju Curry": { 
        category: "Main Course", 
        imageUrl: "https://cdn2.foodviva.com/static-content/food-images/curry-recipes/kaju-curry/kaju-curry.jpg",
        ingredients: ["Cashews", "Tomato", "Onion", "Cream", "Spices"],
        description: "A luscious and creamy curry made with cashews, cooked in a rich, spiced tomato-onion gravy.",
        videoUrl: "https://youtube.com/embed/gKJ2MBmCZD4" // Example video URL in embed format
    },
    "Vegetable Soup": { 
        category: "Appetizer", 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXDp-H7u3RzjVXlD8BNy5SkNMlnbIO1_4ag&s", 
        ingredients: ["Carrot", "Potato", "Tomato", "Onion", "Garlic", "Spices"], 
        description: "A hearty and nourishing soup made with a variety of fresh vegetables, simmered to perfection in a flavorful broth.", 
        videoUrl: "https://youtube.com/embed/IfvzrjkTHDU" // Example video URL in embed format
    },
    "Manchuria": { 
        category: "Appetizer", 
        imageUrl: "https://i.ytimg.com/vi/xkMbJCtaaqA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrMLgdijp9TJ92IUYugdtisp2tIw", 
        ingredients: ["Cauliflower", "Soy Sauce", "Garlic", "Ginger", "Onion", "Chili Sauce", "Spices"], 
        description: "A popular Indo-Chinese dish made with crispy fried cauliflower in a spicy and tangy sauce.", 
        videoUrl: "https://youtube.com/embed/ZHwkkiw5NP0" // Example video URL in embed format
    },
    "Pulao": { 
        category: "Main Course", 
        imageUrl: "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg", 
        ingredients: ["Rice", "Mixed Vegetables", "Spices", "Ghee", "Onion"], 
        description: "A flavorful and aromatic rice dish cooked with a blend of vegetables and spices, perfect as a main course or side dish.", 
        videoUrl: "https://youtube.com/embed/W1wnXzcxGEU" // Example video URL in embed format
    },
    "Butter Naan": { 
        category: "Main Course", 
        imageUrl: "https://i.ytimg.com/vi/H3tW-UFSojU/maxresdefault.jpg", 
        ingredients: ["Flour", "Yeast", "Butter", "Milk", "Sugar", "Salt"], 
        description: "A soft and fluffy Indian bread made with enriched dough, cooked in a tandoor and generously topped with butter.", 
        videoUrl: "https://youtube.com/embed/BipPqbLm8M0" // Example video URL in embed format
    },
    "Paneer Curry": { 
        category: "Main Course", 
        imageUrl: "https://www.kitchensanctuary.com/wp-content/uploads/2024/03/Paneer-Curry-square-FS.jpg", 
        ingredients: ["Paneer", "Tomato", "Onion", "Ginger", "Garlic", "Spices", "Cream"], 
        description: "A rich and creamy curry made with soft paneer cubes cooked in a flavorful tomato-onion gravy.", 
        videoUrl: "https://youtube.com/embed/ZQM4YbaiW9s" // Example video URL in embed format
    },
    "Cold Coffee": { 
        category: "Drinks", 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJ5JdoCSNugJAYkptJqh5uxrzVQONSddkMw&s", 
        ingredients: ["Coffee", "Milk", "Sugar", "Ice Cream", "Ice"], 
        description: "A refreshing and chilled beverage made with strong coffee, milk, and a touch of sweetness, perfect for a cool treat.", 
        videoUrl: "https://youtube.com/embed/ALJZGfPiFnA" // Example video URL in embed format
    },
    "French Fries": { 
        category: "Snacks", 
        imageUrl: "https://www.chefhasti.com/wp-content/uploads/2020/06/COVER-1-1-scaled.jpg", 
        ingredients: ["Potatoes", "Salt", "Oil"], 
        description: "Crispy and golden fries made from freshly cut potatoes, seasoned with a pinch of salt, and fried to perfection.", 
        videoUrl: "https://www.youtube.com/embed/abcd1234" // Example video URL in embed format
    },
    "Chocolate Pastries": { 
        category: "Desserts", 
        imageUrl: "https://www.foodandwine.com/thmb/rHA0d1aIMTwcxoRrTlqehLgzLUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HD-fw200609_trufflecake-1f285ff1b07944d7ae5ceee94211bd9d.jpg", 
        ingredients: ["Flour", "Cocoa Powder", "Butter", "Sugar", "Eggs", "Chocolate"], 
        description: "Decadent and indulgent chocolate pastries filled with rich, melted chocolate and baked to golden perfection.", 
        videoUrl: "https://youtube.com/embed/uvsWOi78FP8" // Example video URL in embed format
    }
};

function Menu() {
    const [menuData, setMenuData] = useState(initialMenuData);
    const [category, setCategory] = useState('All');
    const [cart, setCart] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const filterMenu = (selectedCategory) => {
        setCategory(selectedCategory);
        setSelectedItem(null);
    };

    const selectItem = (itemName) => {
        const newItem = menuData[itemName];
        setCart([...cart, itemName]);
        setSelectedItem(newItem);
    };

    const promptAddress = () => {
        const recipeName = window.prompt("Enter the name of the recipe to add:");
        const newRecipe = {
            category: "Main Course",
            imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
            ingredients: ["Ingredient 1", "Ingredient 2"], // Default ingredients
            description: "A new recipe description.",
            videoUrl: "https://www.youtube.com/embed/example" // Placeholder video URL
        };
        setMenuData(prevData => ({
            ...prevData,
            [recipeName]: newRecipe
        }));
        alert(`Recipe "${recipeName}" added to Main Course`);
    };

    const updateRecipe = (itemName) => {
        const updatedRecipe = {
            ...menuData[itemName],
            description: prompt("Enter the new description:", menuData[itemName].description),
            ingredients: prompt("Enter the new ingredients (comma-separated):", menuData[itemName].ingredients.join(',')).split(',')
        };

        setMenuData(prevData => ({
            ...prevData,
            [itemName]: updatedRecipe
        }));

        alert(`Recipe "${itemName}" updated successfully.`);
    };

    const deleteRecipe = (itemName) => {
        const confirmation = window.confirm(`Are you sure you want to delete "${itemName}" from the menu?`);
        if (confirmation) {
            const { [itemName]: removed, ...remainingMenuData } = menuData;
            setMenuData(remainingMenuData);
            setSelectedItem(null);  // Deselect any item if it's deleted
            alert(`Recipe "${itemName}" deleted successfully.`);
        }
    };

    return (
        <div className="container">
            <h1>Delicious Menu</h1>

            {/* Categories */}
            <div className="categories">
                {["All", "Main Course", "Snacks", "Desserts", "Drinks"].map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${category === cat ? 'active' : ''}`}
                        onClick={() => filterMenu(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu Items */}
            <div className="menu">
                {Object.keys(menuData)
                    .filter(itemName => category === "All" || category === menuData[itemName].category)
                    .map((itemName) => {
                        const item = menuData[itemName];
                        return (
                            <div key={itemName} className="menu-item" onClick={() => selectItem(itemName)}>
                                <img src={item.imageUrl} alt={itemName} />
                                <div className="item-info">
                                    <h3>{itemName}</h3>
                                </div>
                                <div className="actions">
                                    <button onClick={() => updateRecipe(itemName)}>Update</button>
                                    <button onClick={() => deleteRecipe(itemName)}>Delete</button>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {/* Details Section */}
            {selectedItem && (
                <div className="details">
                    <h2>{selectedItem.description}</h2>
                    <p><strong>Ingredients:</strong> {selectedItem.ingredients.join(', ')}</p>
                    <h3>Watch Recipe Video</h3>
                    <iframe 
                        width="560" 
                        height="315" 
                        src={selectedItem.videoUrl} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Cart Section */}
            <div className="cart">
                <h2>Add new recipe</h2>
                <ul className="cart-items">
                    {cart.map((itemName, index) => (
                        <li key={index}>{itemName}</li>
                    ))}
                </ul>
                <button className="delivery-btn" onClick={promptAddress}>Add</button>
            </div>
        </div>
    );
}

export default Menu;
