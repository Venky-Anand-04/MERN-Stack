const express = require("express")
const router = express.Router()
const Comic = require("../models/comic.models.js")

//comic GET Route==================
router.get("/", async (req,res)=>{
	try{
		const comics = await Comic.find().exec()
		console.log(comics)
	} catch(err) {
		console.log("Error: ", err)
	}	
})
//comic POST Route==================
router.post("/", async (req,res)=>{
	const genre = req.body.genre
	const comic = {
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		publisherName: req.body.publisherName,
		date: req.body.date,
		distributionNo: req.body.distributionNo,
		genre,
		issue: req.body.issue,
		color: !!req.body.color,
		pageCount: req.body.pageCount
	}
	try{
		const comic = await Comic.create(comic)
		console.log(comic)
	} catch(err) {
		console.log("Error: ",err)
	}	
})



//Comic SHOW ROUTE ====================
router.get("/:id", async (req,res)=>{
	try{
		const comic = await Comic.findById(req.params.id).exec()
		console.log(comic)
	} catch (err) {
		console.log("Error: ", err)
	}	
})



//comic UPDATE Route ==================

router.put("/edit/:id", async (req,res)=>{
	const genre = req.body.genre
	const comic = {
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		publisherName: req.body.publisherName,
		date: req.body.date,
		distributionNo: req.body.distributionNo,
		genre,
		issue: req.body.issue,
		color: !!req.body.color,
		pageCount: req.body.pageCount
	}
	try{
		const comicUpdate = await Comic.findByIdAndUpdate(req.params.id,comic,{new: true}).exec()
		console.log(comicUpdate)
	} catch(err) {
		console.log("Error: ", err)
	}	
})




//Comic DELETE Route======================
router.delete("/:id", async (req,res)=>{
	try{
		const deleteComic = await Comic.findByIdAndDelete(req.params.id).exec()
		console.log(deleteComic)
	} catch (err) {
		console.log("Error: ",err)
	}	
})

module.exports = router


