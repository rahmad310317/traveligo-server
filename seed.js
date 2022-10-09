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
			["Category", "Item", "Item", "Feature", "Image", "Users"],
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
				name: "Kecamatan Andam Dewi",
				itemId: [
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
					{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
				],
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc901113"),
				name: "Kecamatan Sorkam",
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
				title: "Pantai Barus",
				rating: 5,
				country: "Indonesia",
				city: "Barus",
				isFavorit: false,
				description:
					"Pantai Barus adalah tempat wisata yang cantik di sekitar Pelabuhan Barus. Alamnya masih begitu asri,menyajikan panorama pasir putih dan laut biru memanjakan mata. Di sepanjang garis pantai ini telah dibangun dermaga kapal yang menjorok ke laut.Pelabuhan ini sama sekali belum difungsikan dan hanya dimanfaatkan kapal nelayan. Karenanya, pengunjung leluasa berjalan-jalan di atas dermaga tersebut, entah untuk memandang-mandang atau sekedar merasakan lembutnya angin laut.Obyek wisata ini berada di pusat ibukota kecamatan yai Nah, tak terlalu jauh dari lokasi itu terdapat penginapan murah. Bagi wisatawan yang misalnya datang dari luar kota dan terpaksa bermalam. Dapat menginap di Hotel Fansuri Barus atau Penginapan Borneo.",
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
				title: "Pantai KD3",
				rating: 5,
				country: "Indonesia",
				city: "Barus",
				isFavorit: false,
				description:
					"Wisata pantai di Barus yang menyimpan eloknya suasana sunset dan sunrise ialah Pantai Kade Tigo. Sembari selonjoran di atas kursi sambil menunggu golden sunset, cobalah menikmati air kelapa untuk pelepas dahaga.Pantai merupakan tempat terbaik untuk refreshing, menyegarkan jiwa dari peliknya persoalan hidup. Itulah kenapa banyak orang suka nuansa pantai karena bisa me-recharge semangat yang sempat pudar.Teduhnya pantai Kade Tigo di Desa Kedai Gadang niscaya membuat pengunjung nyaman selama menikmati atraksi alam. Banyak juga yang memilih mandi-mandi dan berendam dengan asinnya air laut. Untuk menghindari sengatan mentari, gunakan lotion perlindungan kulit ya.",
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
				imageUrl: "images/image-category-1-min.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
				imageUrl: "images/image-category-2-min.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
				imageUrl: "images/image-category-3-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
				imageUrl: "images/image-category-4-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
				imageUrl: "images/image-category-5-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
				imageUrl: "images/image-category-6-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
				imageUrl: "images/image-category-7-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
				imageUrl: "images/image-category-8-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
				imageUrl: "images/image-category-9-min.png",
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
				imageUrl: "images/image-category-10-min.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
				imageUrl: "images/image-category-11-min.png",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
				imageUrl: "images/image-category-12-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
				imageUrl: "images/image-category-13-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
				imageUrl: "images/image-category-14-min.png",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
				imageUrl: "images/image-category-15-min.png",
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
				name: "badroom",
				qty: 2,
				imageUrl: "images/feature-1.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
				name: "living room",
				qty: 23,
				imageUrl: "images/feature-2.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
				name: "televison",
				qty: 12,
				imageUrl: "images/feature-3.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
				name: "televison",
				qty: 5,
				imageUrl: "images/feature-4.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
			},
		],
	},
	// end feature

	// end activity

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
