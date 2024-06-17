const express = require("express");
const router = express.Router();
const { Brewery } = require("../models");


router.get("/",async(req,res)=>{
   const listOfBrewery=await Brewery.findAll()
   res.json(listOfBrewery)
})

router.get("/byId/:id",async(req,res)=>{
    const id=req.params.id
    const brewery=await Brewery.findByPk(id)
    res.json(brewery)
})


router.get("/search", async (req, res) => {
    const { city,name,breweryType } = req.query;
    const where = {};
  
    if (city) {
      where.city = city;
    }
    if (name) {
      where.name = name;
    }
    if (breweryType) {
      where.breweryType = breweryType;
    }
  
    try {
      const breweries = await Brewery.findAll({ where });
      res.json(breweries);
    } catch (error) {
      console.error('Error searching breweries:', error);
      res.status(500).json({ error: 'Failed to search breweries' });
    }
  });

router.post('/', async (req, res) => {
    try {
      const brewery = req.body;
      await Brewery.create(brewery);
      res.json(brewery);
    } catch (error) {
      console.error('Error creating brewery:', error);
      res.status(500).json({ error: 'Failed to create brewery' });
    }
  });

module.exports = router;

