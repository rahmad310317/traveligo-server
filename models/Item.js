/** @format */

const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
	},
	city: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		default: "Indonesia",
	},
	isFavorit: {
		type: Boolean,
		default: false,
	},
	description: {
		type: String,
		required: true,
	},
	categoryId: {
		type: ObjectId,
		ref: "Category",
	},
	imageId: [
		{
			type: ObjectId,
			ref: "Image",
		},
	],
	featureId: [
		{
			type: ObjectId,
			ref: "Feature",
		},
	],
	activityId: [
		{
			type: ObjectId,
			ref: "Activity",
		},
	],
});

module.exports = mongoose.model("Item", ItemSchema);
