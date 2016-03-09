package main

import (
	"database/sql"
	"flag"
	"fmt"
	"log"
	"menu/Godeps/_workspace/src/github.com/gin-gonic/gin"
	_ "menu/Godeps/_workspace/src/github.com/lib/pq"
	"menu/Godeps/_workspace/src/gopkg.in/gorp.v1"
	"net/http"
	"strconv"
)

//config using command line flags
var dbUser = flag.String("dbuser", "golang", "db username")
var dbPass = flag.String("dbpass", "password", "db password")
var dbName = flag.String("dbname", "golang", "db name")
var dbHost = flag.String("dbhost", "localhost", "db host")

type Recipe struct {
	Id          int64  `db:"id" json:"id"`
	UserId      int64  `db:"userId" json:"userId"`
	Name        string `db:"name" json:"name"`
	Description string `db:"description" json:"description"`
	Link        string `db:"link" json:"link"`
	Category    string `db:"category" json:"category"`
	Notes       string `db:"notes" json:"notes"`
}

type Menu struct {
	Id   int64  `db:"id" json:"id"`
	Name string `db:"name" json:"name"`
	Data string `db:"data" json:"data"`
}

var dbmap = initDb()

func initDb() *gorp.DbMap {
	flag.Parse()
	connString := fmt.Sprintf("user=%s password=%s dbname=%s host=%s sslmode=disable",
		*dbUser, *dbPass, *dbName, *dbHost)
	db, err := sql.Open("postgres", connString)
	checkErr(err, "sql.Open failed")
	dbmap := &gorp.DbMap{Db: db, Dialect: gorp.PostgresDialect{}}
	dbmap.AddTableWithName(Recipe{}, "Recipe").SetKeys(true, "Id")
	dbmap.AddTableWithName(Menu{}, "Menu").SetKeys(true, "Id")
	err = dbmap.CreateTablesIfNotExists()
	checkErr(err, "Create table failed")

	return dbmap
}

func checkErr(err error, msg string) {
	if err != nil {
		log.Fatalln(msg, err)
	}
}

func main() {
	r := gin.Default()
	r.StaticFS("/static", http.Dir("static"))
	v1 := r.Group("api/v1")
	{
		v1.GET("/recipes", GetRecipes)
		v1.GET("/recipes/:id", GetRecipe)
		v1.POST("/recipes", PostRecipe)
		v1.PUT("/recipes/:id", UpdateRecipe)
		v1.DELETE("/recipes/:id", DeleteRecipe)

		v1.GET("/menus", GetMenus)
		v1.POST("/menus", PostMenu)

	}
	r.Run(":8080")
}

func GetMenus(c *gin.Context) {
	var menus []Menu
	_, err := dbmap.Select(&menus, "select * from menu")

	if err == nil {
		c.JSON(200, menus)
	} else {
		c.JSON(404, gin.H{"error": "no items in this table"})
	}
}

func PostMenu(c *gin.Context) {
	var menu Menu
	c.Bind(&menu)

	if menu.Name != "" {
		if insert, _ := dbmap.Exec(`insert into menu (name, data) values ($1, $2)`,
			menu.Name, menu.Data); insert != nil {

			content := &Menu{
				Id:   0,
				Name: menu.Name,
				Data: menu.Data,
			}
			c.JSON(201, content)
		}
	} else {
		c.JSON(422, gin.H{"error": "fields are empty"})
	}
}

func GetRecipes(c *gin.Context) {
	var recipes []Recipe
	_, err := dbmap.Select(&recipes, "select * from recipe")

	if err == nil {
		c.JSON(200, recipes)
	} else {
		c.JSON(404, gin.H{"error": "no items in this table"})
	}
}

func GetRecipe(c *gin.Context) {
	id := c.Params.ByName("id")
	var recipe Recipe
	err := dbmap.SelectOne(&recipe, "select * from recipe where id=$1", id)

	if err == nil {
		recipe_id, _ := strconv.ParseInt(id, 0, 64)

		content := &Recipe{
			Id:          recipe_id,
			Name:        recipe.Name,
			Description: recipe.Description,
			Link:        recipe.Link,
			Category:    recipe.Category,
			Notes:       recipe.Notes,
		}
		c.JSON(200, content)
	} else {
		c.JSON(404, gin.H{"error": "item not found"})
	}
}

func PostRecipe(c *gin.Context) {
	var recipe Recipe
	c.Bind(&recipe)

	if recipe.Name != "" {
		if insert, _ := dbmap.Exec(`insert into recipe (userid, name, description, link, category, notes) values ($1, $2, $3, $4, $5, $6)`,
			recipe.UserId, recipe.Name, recipe.Description, recipe.Link, recipe.Category, recipe.Notes); insert != nil {

			content := &Recipe{
				Id:          0,
				UserId:      recipe.UserId,
				Name:        recipe.Name,
				Description: recipe.Description,
				Link:        recipe.Link,
				Category:    recipe.Category,
				Notes:       recipe.Notes,
			}
			c.JSON(201, content)
		}
	} else {
		c.JSON(422, gin.H{"error": "fields are empty"})
	}
}

func UpdateRecipe(c *gin.Context) {
	id := c.Params.ByName("id")
	var recipe Recipe
	err := dbmap.SelectOne(&recipe, "select * from recipe where id =$1", id)

	if err == nil {
		var json Recipe
		c.Bind(&json)

		recipe_id, _ := strconv.ParseInt(id, 0, 64)

		recipe := Recipe{
			Id:          recipe_id,
			UserId:      json.UserId,
			Name:        json.Name,
			Description: json.Description,
			Link:        json.Link,
			Category:    json.Category,
			Notes:       json.Notes,
		}

		if recipe.Name != "" {
			_, err := dbmap.Update(&recipe)

			if err == nil {
				c.JSON(200, recipe)
			} else {
				checkErr(err, "Updated failed")
			}

		} else {
			c.JSON(422, gin.H{"error": "fields are empty"})
		}
	} else {
		c.JSON(404, gin.H{"error": "item not found"})
	}
}

func DeleteRecipe(c *gin.Context) {
	id := c.Params.ByName("id")

	var recipe Recipe
	err := dbmap.SelectOne(&recipe, "select id from recipe where id=$1", id)

	if err == nil {
		_, err = dbmap.Delete(&recipe)
		if err == nil {
			c.JSON(200, gin.H{"id #" + id: "deleted"})
		} else {
			checkErr(err, "Delete failed")
		}
	} else {
		c.JSON(404, gin.H{"error": "item not found"})
	}
}
