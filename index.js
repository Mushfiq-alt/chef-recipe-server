const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// storing Data through variable
const chefDetails = require("./data/chef.json");
const popularFoods = require("./data/popularDish.json");

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef is running')
});

// accessing Chef Data 
app.get("/chef", (req, res) => {
    res.send(chefDetails);
});

// accessing individual food id by chef
app.get("/chef/:id", (req, res) => {
    const id = req.params.id;

    const selectedChef = chefDetails.find((n) => n.chef_id == id);
    res.send(selectedChef);
});

// accessing popular foods Data
app.get("/popular-foods", (req, res) => {
    res.send(popularFoods);
});


app.listen(port, () => {
    console.log(`Chef API is running on PORT: ${port}`);
})