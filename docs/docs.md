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


###Menu Object
-recipes
-categories
-menuStyle
-headerData

###Save Behavior
Note: Loading a recipe in menuView checks saved recipe ids against existing state and toggles isSelected accordingly.  If an item is modified it will load any modification in MenuView but will load recipes as they were when they were saved in StaticView.