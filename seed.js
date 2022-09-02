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
			"./models/Activity",
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
				name: "Kecamatan Pandan",
				itemId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
				],
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc901113"),
				name: "Kecamatan Pakkat",
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
			// Tabby Town
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
				title: "Pantai KD3",
				rating: 5,
				country: "Indonesia",
				city: "Barus",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08") },
				],
				categoryId: "5e96cbe292b97300fc901111",
			},
			// Seattle Rain
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
				title: "Pantai PIS",
				rating: 4,
				country: "Indonesia",
				city: "Barus",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901111",
			},

			// Wodden Pit
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
				title: "Pantai Pulau Pane",
				rating: 4,
				country: "Indonesia",
				city: "Barus",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901111",
			},

			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
				title: "Air Terjun Pollung",
				rating: 4,
				country: "Indonesia",
				city: "Barus",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901111",
			},

			// Green Park
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
				title: "Pantai Pandan Indah",
				rating: 5,
				country: "Indonesia",
				city: "Pandan",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901112",
			},

			// Podo Wae
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
				title: "Pantai Pia Hotel",
				rating: 4,
				country: "Indonesia",
				city: "Pandan",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901112",
			},

			// Silver Rain
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
				title: "Pantai Penatapan",
				rating: 4,
				country: "Indonesia",
				city: "Pandan",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901112",
			},

			// Cashville
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
				title: "Pantai Pandan Ceria",
				rating: 4,
				country: "Indonesia",
				city: "Pandan",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901112",
			},

			// PS Wood
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
				title: "Air Terjun Seribu Dolok",
				rating: 5,
				country: "Indonesia",
				city: "Pakkat",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901113",
			},

			// One Five
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
				title: "Air Terjun Cinta",
				rating: 4,
				country: "Indonesia",
				city: "Pakkat",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901113",
			},

			// Minimal
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
				title: "Air Terjun Sipulak",
				rating: 4,
				country: "Indonesia",
				city: "Pakkat",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33") },
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901113",
			},

			// Stays Home
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
				title: "Air Terjun Pollung",
				rating: 5,
				country: "Indonesia",
				city: "Pakkat",
				isFavorit: false,
				description:
					"Pantai KD3 yang berada di kabupaten tapanuli tengan yang mampu menarik perhatian wisatawan yang berasal dari luar daerah tapanuli tengah untuk berlibur ke pantai ini, pantai KD3 juga mempunyai pasir yang putih dan banyak makanan yang beragam mulai dari olahan laut dan kue tradisional nya. ",
				imageId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34") },
					// done
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35") },
					// done
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
				activityId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
				],
				categoryId: "5e96cbe292b97300fc901113",
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
				imageUrl: "Images/image-mostpicked-1-min.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
				imageUrl: "Images/image-mostpicked-2-min.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
				imageUrl: "Images/image-mostpicked-3-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
				imageUrl: "Images/image-mostpicked-4-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
				imageUrl: "Images/item-1.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
				imageUrl: "Images/image-mostpicked-5-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
				imageUrl: "Images/image-mostpicked-7-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8"),
				imageUrl: "Images/image-mostpicked-8-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
				imageUrl: "Images/image-mostpicked-9-min.jpg",
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
				imageUrl: "Images/image-mostpicked-10-min.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
				imageUrl: "Images/image-mostpicked-11-min.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
				imageUrl: "Images/image-mostpicked-12-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
				imageUrl: "Images/image-mostpicked-13-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
				imageUrl: "Images/image-mostpicked-14-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
				imageUrl: "Images/image-mostpicked-15-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
				imageUrl: "Images/image-category-1-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17"),
				imageUrl: "Images/image-category-2-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18"),
				imageUrl: "Images/image-category-3-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19"),
				imageUrl: "Images/image-category-4-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20"),
				imageUrl: "Images/image-category-5-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21"),
				imageUrl: "Images/image-category-6-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22"),
				imageUrl: "Images/image-category-7-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23"),
				imageUrl: "Images/image-category-8-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24"),
				imageUrl: "Images/image-category-9-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25"),
				imageUrl: "Images/image-category-7-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26"),
				imageUrl: "Images/image-category-8-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27"),
				imageUrl: "Images/image-category-9-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28"),
				imageUrl: "Images/image-category-10-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29"),
				imageUrl: "Images/image-category-11-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30"),
				imageUrl: "Images/image-category-12-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31"),
				imageUrl: "Images/image-category-13-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32"),
				imageUrl: "Images/image-category-14-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33"),
				imageUrl: "Images/image-category-15-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34"),
				imageUrl: "Images/image-category-16-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35"),
				imageUrl: "Images/image-category-17-min.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36"),
				imageUrl: "Images/image-category-18-min.jpg",
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
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01"),
				name: "maps",
				qty: 2,
				imageUrl: "Images/feature-1.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
				name: "cars",
				qty: 23,
				imageUrl: "Images/feature-2.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
				name: "store",
				qty: 12,
				imageUrl: "Images/feature-3.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
				name: "sale",
				qty: 5,
				imageUrl: "Images/feature-4.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05"),
				name: "message",
				qty: 5,
				imageUrl: "Images/feature-5.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			// item 2
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
				name: "maps",
				qty: 2,
				imageUrl: "Images/feature-1.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
				name: "cars",
				qty: 23,
				imageUrl: "Images/feature-2.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
				name: "store",
				qty: 12,
				imageUrl: "Images/feature-3.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
				name: "sale",
				qty: 5,
				imageUrl: "Images/feature-4.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13"),
				name: "message",
				qty: 5,
				imageUrl: "Images/feature-5.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
		],
	},
	// end feature
	// start activity
	{
		model: "Activity",
		documents: [
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01"),
				name: "Green Lake",
				type: "Nature",
				imageUrl: "Images/activity-1.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02"),
				name: "Dog Clubs",
				type: "Pool",
				imageUrl: "Images/activity-2.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03"),
				name: "Labour and Wait",
				type: "Shopping",
				imageUrl: "Images/activity-3.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04"),
				name: "Labour and Wait",
				type: "Shopping",
				imageUrl: "Images/activity-4.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			// done 2
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05"),
				name: "Green Lake",
				type: "Nature",
				imageUrl: "Images/activity-3.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06"),
				name: "Dog Clubs",
				type: "Pool",
				imageUrl: "Images/activity-2.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07"),
				name: "Labour and Wait",
				type: "Shopping",
				imageUrl: "Images/activity-1.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08"),
				name: "Labour and Wait",
				type: "Shopping",
				imageUrl: "Images/activity-4.jpg",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
		],
	},
	// end activity
	{
		model: "Users",
		documents: [
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
				username: "admin",
				password: "rahasia",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc903346"),
				username: "superadmin",
				password: "rahasia",
				role: "admin",
			},
		],
	},
];
