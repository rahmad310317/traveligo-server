/** @format */

const Category = require("../models/Category");
const Treasure = require("../models/Activity");
const Item = require("../models/Item");

module.exports = {
	landingPage: async (req, res) => {
		try {
			const mostPicked = await Item.find()
				.select("_id title country city rating imageId")
				.limit(5)
				.populate({ path: "imageId", select: "_id imageUrl" });

			const category = await Category.find()
				.select("_id name")
				.limit(3)
				.populate({
					path: "itemId",
					select: "_id title country city isFavorit imageId",
					perDocumentLimit: 4,
					populate: {
						path: "imageId",
						select: "imageUrl",
						perDocumentLimit: 1,
					},
				});

			const city = await Item.find();
			const treasure = await Treasure;
			for (let i = 0; i < category.length; i++) {
				for (let x = 0; x < category[i].itemId.length; x++) {
					const item = await Item.findOne({ _id: category[i].itemId[x]._id });
					item.isFavorit = false;
					await item.save();
					if (category[i].itemId[0] === category[i].itemId[x]) {
						item.isFavorit = true;
						await item.save();
					}
				}
			}

			res.status(200).json({
				mostPicked,
				category,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "Server Dalam Masalah" });
		}
	},

	detailsPage: async (req, res) => {
		try {
			const { id } = req.params;
			const item = await Item.findOne({ _id: id })
				.populate({
					path: "featureId",
					select: "id name qty imageUrl",
				})
				.populate({ path: "activityId", select: " id name type imageUrl" })
				.populate({ path: "imageId", select: "imageUrl" });
			res.status(200).json({
				...item._doc,
			});
		} catch (error) {}
	},
};
