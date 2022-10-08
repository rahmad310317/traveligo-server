/** @format */

var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
	"mongodb+srv://Rahmadee:Fitri310317@cluster0.i3ytv09.mongodb.net/db_traveligo?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	},
	function () {
		// Load Mongoose models
		seeder.loadModels([
			"./models/Category",
			"./models/Item",
			"./models/Feature",
			"./models/Member",
			"./models/Image",
			"./models/Users",
		]);

		// Clear specified collections
		seeder.clearModels(
			["Category", "Item", "Feature", "Image", "Users"],
			function () {
				// Callback to populate DB once collections have been cleared
				seeder.populateModels(data, function () {
					seeder.disconnect();
				});
			},
		);
	},
);

var data = [
	// start category
	{
		model: "Category",
		documents: [
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
				name: "Kecamatan Barus",
				itemId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
				],
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
				name: "Kecamatan Sorkam",
				itemId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
				],
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc901113"),
				name: "Kecamatan Pandan",
				itemId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233") },
				],
			},
		],
	},
	// end category
	// start item
	{
		model: "Item",
		documents: [
			// houses
			// done
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
				title: "Tabby Town",
				price: 12,
				sumBooking: 2,
				country: "Indonesia",
				city: "Lampung",
				isPopular: false,
				description:
					"Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
				unit: "night",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6") },
				],
				featureId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16") },
				],
			},
			// done
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
				title: "Seattle Rain",
				price: 20,
				sumBooking: 4,
				country: "Indonesia",
				city: "Bandung",
				isPopular: false,
				description:
					"Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
				unit: "night",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3") },
				],
				featureId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
				],
			},
		],
	},
	// end item
	// start image
	{
		model: "Image",
		documents: [
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1"),
				imageUrl: "images/item-1.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
				imageUrl: "images/item-2.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
				imageUrl: "images/item-3.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
				imageUrl: "images/item-4.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
				imageUrl: "images/item-1.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
				imageUrl: "images/item-2.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
				imageUrl: "images/item-3.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
				imageUrl: "images/item-4.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
				imageUrl: "images/item-1.png",
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
				imageUrl: "images/item-1.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
				imageUrl: "images/item-2.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
				imageUrl: "images/item-3.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
				imageUrl: "images/item-4.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
				imageUrl: "images/item-1.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
				imageUrl: "images/item-2.png",
			},
		],
	},
	// end image
	// start feature
	{
		model: "Feature",
		documents: [
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
				name: "kapal",
				qty: 2,
				imageUrl: "images/feature-1.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
				name: "UKM",
				qty: 23,
				imageUrl: "images/feature-2.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
				name: "Penginapan",
				qty: 12,
				imageUrl: "images/feature-3.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
				name: "Banana bot",
				qty: 5,
				imageUrl: "images/feature-4.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
		],
	},
	// end feature
	{
		model: "Users",
		documents: [
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
				username: "admin",
				password: "rahasia",
			},
		],
	},
];
