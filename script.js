// Function to search for a recipe by title and display ingredients
function searchRecipe() {
    const recipeInput = document.getElementById('recipe-search').value.toLowerCase().trim();
    const foundRecipe = recipes.find(recipe => recipe.title.toLowerCase() === recipeInput);

    const ingredientList = document.getElementById('ingredient-list');
    ingredientList.innerHTML = '';  // Clear previous results

    if (foundRecipe) {
        ingredientList.innerHTML = `
            <h3>${foundRecipe.title}</h3>
            <img src="${foundRecipe.image}" alt="${foundRecipe.title}">
            
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${foundRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <p><strong>Making:</strong></p>
            <ol>
                ${foundRecipe.Making.map(step => `<li>${step}</li>`).join('')}
            </ol>
        `;
    } else {
        ingredientList.innerHTML = '<p>No recipe found for the entered title.</p>';
    }
}

// Call displayAllRecipes on page load
window.onload = displayAllRecipes;// Array of 15 static recipes
const recipes = [
    {
        title: "Spaghetti Bolognese",
        image: "Spaghetti Bolognese.jpeg",
        ingredients: ["spaghetti(200g)", "ground beef(300g)", "tomato sauce(400g)", "onion(1, chopped)", "garlic(2 cloves, minced)"],
        Making: [
            "Cook Spaghetti: Boil salted water, add spaghetti, and cook until al dente. Drain.",
            "Make Sauce: In a skillet, heat olive oil (if using). Sauté onion until translucent, then add garlic for 1 minute.",
            "Brown Beef: Add ground beef, cook until browned. Season with salt and pepper.",
            "Add Tomato Sauce: Stir in tomato sauce and simmer for 10-15 minutes.",
            "Combine: Toss cooked spaghetti with the sauce.",
            "Serve: Plate and enjoy!"
        ]
    },
    {
        title: "Chicken Salad",
        image: "Chicken Salad.jpg",
        ingredients: ["chicken(200g)", "lettuce(1 head)", "cucumber(1)", "tomato(1)", "olive oil(2 tbsp)"],
        Making: [
            "Cook Chicken: Grill or boil chicken until cooked through. Let cool and shred.",
            "Prepare Salad: In a bowl, combine lettuce, cucumber, and tomato.",
            "Add Chicken: Toss in shredded chicken.",
            "Dress: Drizzle with olive oil and season to taste."
        ]
    },
    {
        title: "Pancakes",
        image: "pancake.jpg",
        ingredients: ["flour(1 cup)", "milk(1 cup)", "egg(1)", "butter(2 tbsp)", "sugar(2 tbsp)"],
        Making: [
            "Mix Ingredients: In a bowl, whisk together flour, milk, egg, melted butter, and sugar until smooth.",
            "Heat Pan: Preheat a non-stick skillet over medium heat.",
            "Cook Pancakes: Pour batter into the skillet, cooking until bubbles form, then flip and cook until golden.",
            "Serve: Stack pancakes and top with syrup or fruits."
        ]
    },
    {
        title: "Vegetable Stir-Fry",
        image: "vegetable_stir_fry (1).jpg",
        ingredients: ["mixed vegetables(400g)", "soy sauce(2 tbsp)", "olive oil(2 tbsp)", "garlic(2 cloves)", "ginger(1 tsp)"],
        Making: [
            "Prep Vegetables: Chop vegetables into bite-sized pieces.",
            "Heat Oil: In a pan, heat olive oil over medium heat.",
            "Sauté Aromatics: Add garlic and ginger, sauté until fragrant.",
            "Add Vegetables: Stir in mixed vegetables, cooking until tender.",
            "Add Soy Sauce: Drizzle with soy sauce and stir-fry for an additional 2 minutes.",
            "Serve: Enjoy warm with rice."
        ]
    },
    {
        title: "Tacos",
        image: "Tacos (1).jpg",
        ingredients: ["taco shells(4)", "ground beef(300g)", "lettuce(1 cup)", "cheese(100g, shredded)", "salsa(1/2 cup)"],
        Making: [
            "Cook Beef: In a skillet, brown the ground beef over medium heat.",
            "Prepare Toppings: Chop lettuce and prepare cheese and salsa.",
            "Assemble Tacos: Fill taco shells with beef, lettuce, cheese, and salsa.",
            "Serve: Enjoy immediately!"
        ]
    },
    {
        title: "Tomato Soup",
        image: "tomato-soup-7 (1).jpg",
        ingredients: ["canned tomatoes(800g)", "onion(1, chopped)", "garlic(2 cloves)", "vegetable broth(2 cups)", "basil(1 tsp)"],
        Making: [
            "Sauté Onion: In a pot, heat olive oil and sauté chopped onion until translucent.",
            "Add Garlic: Stir in minced garlic, cooking for 1 minute.",
            "Combine Ingredients: Add canned tomatoes and vegetable broth, bring to a boil.",
            "Simmer: Reduce heat, add basil, and simmer for 20 minutes.",
            "Blend: Use an immersion blender to puree until smooth.",
            "Serve: Enjoy with bread."
        ]
    },
    {
        title: "Fried Rice",
        image: "fried-rice-feat (1).jpg",
        ingredients: ["cooked rice(2 cups)", "egg(1)", "mixed vegetables(1 cup)", "soy sauce(2 tbsp)", "green onions(2)"],
        Making: [
            "Scramble Egg: In a pan, scramble the egg and set aside.",
            "Heat Pan: In the same pan, heat oil and add mixed vegetables.",
            "Add Rice: Stir in cooked rice and soy sauce.",
            "Combine: Mix in scrambled egg and chopped green onions.",
            "Serve: Enjoy warm."
        ]
    },
    {
        title: "Grilled Cheese Sandwich",
        image: "Grilled-Cheese-4 (1).webp",
        ingredients: ["bread(2 slices)", "cheese(2 slices)", "butter(1 tbsp)"],
        Making: [
            "Butter Bread: Spread butter on one side of each slice of bread.",
            "Assemble Sandwich: Place cheese between the unbuttered sides of the bread.",
            "Grill: Heat a skillet and grill the sandwich until golden brown on both sides.",
            "Serve: Cut in half and enjoy!"
        ]
    },
    {
        title: "Chocolate Cake",
        image: "Air_Fryer_Chocolate_Cake (1).jpg",
        ingredients: ["flour(1 cup)", "cocoa powder(1/2 cup)", "sugar(1 cup)", "eggs(2)", "butter(1/2 cup)"],
        Making: [
            "Preheat Oven: Preheat your oven to 350°F (175°C).",
            "Mix Ingredients: In a bowl, combine flour, cocoa powder, and sugar.",
            "Add Eggs: Beat in eggs and melted butter until smooth.",
            "Bake: Pour batter into a greased cake pan and bake for 30-35 minutes.",
            "Cool and Serve: Let cool before serving."
        ]
    },
    {
        title: "Caesar Salad",
        image: "big-bowl-side (1).jpg",
        ingredients: ["romaine lettuce(1 head)", "croutons(1 cup)", "parmesan cheese(1/2 cup)", "Caesar dressing(1/4 cup)"],
        Making: [
            "Chop Lettuce: Wash and chop romaine lettuce.",
            "Combine: In a bowl, combine lettuce, croutons, and parmesan cheese.",
            "Dress: Drizzle with Caesar dressing and toss.",
            "Serve: Enjoy as a side or main dish."
        ]
    },
    {
        title: "Omelette",
        image: "Omelette (1).webp",
        ingredients: ["eggs(2)", "milk(1 tbsp)", "cheese(1/4 cup)", "salt(1/2 tsp)", "pepper(1/4 tsp)"],
        Making: [
            "Beat Eggs: In a bowl, beat eggs with milk, salt, and pepper.",
            "Heat Pan: Heat a skillet over medium heat.",
            "Cook: Pour in egg mixture, cooking until edges set.",
            "Add Cheese: Sprinkle cheese on one half and fold over.",
            "Serve: Cook until cheese melts, then serve."
        ]
    },
    {
        title: "Beef Stew",
        image: "Beef-Stew-Recipe3 (1).jpg",
        ingredients: ["beef(500g, cubed)", "carrots(2, chopped)", "potatoes(2, diced)", "onion(1, chopped)", "beef broth(4 cups)"],
        Making: [
            "Brown Beef: In a pot, brown the beef over medium heat.",
            "Add Vegetables: Add chopped carrots, potatoes, and onion.",
            "Pour Broth: Add beef broth and bring to a boil.",
            "Simmer: Reduce heat and simmer for 1.5 to 2 hours.",
            "Serve: Enjoy with bread or rice."
        ]
    },
    {
        title: "Caprese Salad",
        image: "Caprese-Salad-7b (1).jpg",
        ingredients: ["tomatoes(2)", "mozzarella cheese(200g)", "basil(1/4 cup)", "olive oil(2 tbsp)", "balsamic vinegar(1 tbsp)"],
        Making: [
            "Slice Tomatoes: Slice tomatoes and mozzarella cheese.",
            "Layer: On a plate, layer tomato slices, mozzarella, and basil.",
            "Drizzle: Drizzle with olive oil and balsamic vinegar.",
            "Serve: Enjoy fresh as a salad."
        ]
    },
    {
        title: "Mutton Curry",
        image: "images (1).jpeg",
        ingredients: [
            "mutton(500g, cut into pieces)",
            "onion(2, finely chopped)",
            "tomato(2, pureed)",
            "ginger-garlic paste(1 tbsp)",
            "yogurt(1/2 cup)",
            "cumin seeds(1 tsp)",
            "coriander powder(2 tsp)",
            "red chili powder(1 tsp)",
            "turmeric powder(1/2 tsp)",
            "garam masala(1 tsp)",
            "oil(3 tbsp)",
            "salt(to taste)",
            "water(as needed)"
        ],
        Making: [
            "Heat Oil: In a heavy pot, heat oil and add cumin seeds. Let them splutter.",
            "Cook Onions: Add chopped onions and sauté until golden brown.",
            "Add Ginger-Garlic: Stir in ginger-garlic paste and cook for a minute.",
            "Cook Mutton: Add mutton pieces, sauté until they brown.",
            "Add Spices: Mix in coriander powder, red chili powder, turmeric, and salt. Cook for a few minutes.",
            "Add Tomato Puree: Stir in tomato puree and cook until oil separates.",
            "Add Yogurt: Lower the heat, add yogurt, and cook well to combine.",
            "Simmer: Add water as needed, cover, and let it simmer until mutton is tender.",
            "Serve: Garnish with fresh coriander and serve hot with rice or bread."
        ]
    },
    {
        title: "Chinese Noodles",
        image: "Lo-Mein-Recipe (1).jpg", // Add the image path
        ingredients: [
            "noodles(200g)",
            "bell pepper(1, sliced)",
            "carrot(1, julienned)",
            "broccoli(100g, cut into florets)",
            "soy sauce(3 tbsp)",
            "ginger(1 tsp, minced)",
            "garlic(2 cloves, minced)",
            "green onions(2, chopped)",
            "sesame oil(1 tbsp)",
            "salt(to taste)",
            "pepper(to taste)",
            "oil(for stir-frying)"
        ],
        Making: [
            "Cook Noodles: Boil water in a pot, add noodles, and cook according to package instructions. Drain and set aside.",
            "Heat Oil: In a large wok or skillet, heat oil over medium-high heat.",
            "Stir-Fry Vegetables: Add ginger and garlic, sauté for a minute. Then add bell pepper, carrot, and broccoli. Stir-fry until vegetables are tender-crisp.",
            "Add Noodles: Add the cooked noodles to the wok. Pour in soy sauce and sesame oil, tossing everything together to coat evenly.",
            "Season: Add salt and pepper to taste, and mix well.",
            "Serve: Garnish with chopped green onions and serve hot."
        ]
    },
    
];


// Function to display all recipes
function displayAllRecipes() {
    const allRecipesDiv = document.getElementById('all-recipes');
    allRecipesDiv.innerHTML = ''; // Clear previous recipes

    recipes.forEach(recipe => {
        allRecipesDiv.innerHTML += `
            <div class="recipe">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
            </div>
        `;
    });
}


// Function to toggle the display of recipe details
function toggleDetails(recipeDiv) {
    const detailsDiv = recipeDiv.querySelector('.details');
    detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
}


