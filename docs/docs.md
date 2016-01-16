#Menu Documentation
___
##Component Structure

***App***
- **ViewSelect**
- **RecipeView**
..  - AddRecipe
..  - RecipeItem
..  - RecipeForm
- **MenuView**
..  - StyleSelect
..  - HeaderSelect
..  - MenuSelect
..  - MenuSave
..  - Menu
- **StaticView**
..  - Menu

___
##API
###Recipes
**Table**

|recipes        |
|---------------|
|id             |
|userId         |
|name           |
|description    |
|link           |
|category       |
|notes          |

**Routes**

|Method |Route          |Description |
|-------|---------------|------------|
|GET    |/recipe        |            |
|GET    |/recipe/\{ids\}|            |
|POST   |/recipe        |            |
|PUT    |/recipe/\{id\} |            |
|DELETE |/recipe/\{id\} |            |

___