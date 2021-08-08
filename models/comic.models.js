const mongoose = require("mongoose")
const Schema = mongoose.Schema

const comicSchema = new Schema({
	title: {type:String},
	description: {type:String},
	image: {type:String},
	publisherName: {type:String},
	date: {type:Date},
	distributionNo: {type:Number},
	issue: {type:String},
	genre: {type:String},
	color: {type:String},
	pageCount: {type:Number}
})

const Comic = mongoose.model("comic",comicSchema)
module.exports = Comic