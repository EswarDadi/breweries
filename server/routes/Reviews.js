const express = require("express");
const router = express.Router();
const { Reviews } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/:breweryId", async (req, res) => {
    const breweryId = req.params.breweryId;
    const reviews = await Reviews.findAll({ where: { BreweryId: breweryId } });
    res.json(reviews);
  });
  

router.post("/", validateToken,async(req,res)=>{
    const review=req.body
    await Reviews.create(review)
    res.json(review)

    
})
module.exports=router