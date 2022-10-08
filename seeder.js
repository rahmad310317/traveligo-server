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
				title: "Pantai KD3",
				rating: 5,
				country: "Indonesia",
				city: "Barus",
				isPopular: false,
				description:
					"Wisata pantai di Barus yang menyimpan eloknya suasana sunset dan sunrise ialah Pantai Kade Tigo. Sembari selonjoran di atas kursi sambil menunggu golden sunset, cobalah menikmati air kelapa untuk pelepas dahaga.Pantai merupakan tempat terbaik untuk refreshing, menyegarkan jiwa dari peliknya persoalan hidup. Itulah kenapa banyak orang suka nuansa pantai karena bisa me-recharge semangat yang sempat pudar.Teduhnya pantai Kade Tigo di Desa Kedai Gadang niscaya membuat pengunjung nyaman selama menikmati atraksi alam. Banyak juga yang memilih mandi-mandi dan berendam dengan asinnya air laut. Untuk menghindari sengatan mentari, gunakan lotion perlindungan kulit ya",
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
				title: "pantai Binasi",
				rating: 5,
				country: "Indonesia",
				city: "Sorkam ",
				isPopular: false,
				description:
					"Pantai Binasi adalah pantai yang asri berpasir lembut benderang yang terhampar landai dan memanjang. Gelombang air yang jernih cukup tenang, sementara birunya lautan terbentang sejauh mata memandang. Semilir angin yang menerpa barisan kelapa dan cemara turut menghadirkan suasana yang menenangkan.Komposisi alamnya sudah sedemikian cantik sehingga memang layak dikagumi dan diminati. Panorama Pantai Binasi senantiasa memikat sepanjang hari, namun menjadi lebih sempurna seiring senja perlahan tiba. Karena terletak di pesisir barat Pulau Sumatera, sunset di Binasi terasa istimewa memanjakan mata.Sekedar bersantai menikmati cantiknya pantai ini dan suasananya yang khas, semestinya cukup untuk meremajakan pikiran siapa saja. Di kejauhan, bentang laut juga berhias Kepulauan Mursala yang indah. Pulau Kalimantung juga berada di sana. Bila durasi liburan kali ini panjang, Anda wajib mengunjunginya",
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
				imageUrl: "images/pantai-barus-1.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
				imageUrl: "images/pantai-barus-2.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
				imageUrl: "images/pantai-barus-3.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
				imageUrl: "images/pantai-binasi-1.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
				imageUrl: "images/pantai-binasi-2.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
				imageUrl: "images/pantai-binasi-3.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
				imageUrl: "images/pantai-cermin-1.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
				imageUrl: "images/pantai-cermin-2.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
				imageUrl: "images/pantai-cermin-3.jpg",
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
				imageUrl: "images/pantai-kahona-1.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
				imageUrl: "images/pantai-kahona-2.jpg",
			},
			// done
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
				imageUrl: "images/pantai-kahona-3.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
				imageUrl: "images/pantai-kapaloujung-1.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
				imageUrl: "images/pantai-kapaloujung-2.jpg",
			},
			{
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
				imageUrl: "images/pantai-kapaloujung-3.jpg",
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
				name: "UKM",
				qty: 12,
				imageUrl: "images/feature-3.png",
				itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
			},
			{
				// done
				_id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
				name: "Bus",
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
