/** @format */
const Category = require("../models/Category");
const Item = require("../models/Item");
const Image = require("../models/Image");
const Feature = require("../models/Feature");
const Activity = require("../models/Activity");
const Users = require("../models/Users");
const fs = require("fs-extra");
const path = require("path");
const bcrypt = require("bcryptjs");

module.exports = {
	viewSignin: async (req, res) => {
		try {
			const alertMessage = req.flash("alertMessage");
			const alertStatus = req.flash("alertStatus");
			const alert = { message: alertMessage, status: alertStatus };
			if (req.session.user == null || req.session.user == undefined) {
				res.render("index", {
					alert,
					title: "Traveligo | Login",
				});
			} else {
				res.redirect("/admin/dashboard");
			}
		} catch (error) {
			res.redirect("/admin/signin");
		}
	},

	actionSignin: async (req, res) => {
		try {
			const { username, password } = req.body;
			const user = await Users.findOne({ username: username });
			if (!user) {
				req.flash("alertMessage", "User yang anda masukan tidak ada!!");
				req.flash("alertStatus", "danger");
				res.redirect("/admin/signin");
			}
			const isPasswordMatch = await bcrypt.compare(password, user.password);
			if (!isPasswordMatch) {
				req.flash("alertMessage", "Password yang anda masukan tidak cocok!!");
				req.flash("alertStatus", "danger");
				res.redirect("/admin/signin");
			}

			req.session.user = {
				id: user.id,
				username: user.username,
			};
			res.redirect("/admin/dashboard");
		} catch (error) {
			res.redirect("/admin/signin");
		}
	},

	actionLogout: (req, res) => {
		req.session.destroy();
		res.redirect("/admin/signin");
	},

	viewDashboard: async (req, res) => {
		try {
			const item = await Item.find();
			const category = await Category.find();
			res.render("admin/dashboard/view_dashboard", {
				title: "Traveligo | Dashboard",
				user: req.session.user,
				category,
				item,
			});
		} catch (error) {
			res.redirect("/admin/dashboard");
		}
	},
	viewCategory: async (req, res) => {
		try {
			const category = await Category.find();
			const alertMessage = req.flash("alertMessage");
			const alertStatus = req.flash("alertStatus");
			const alert = { message: alertMessage, status: alertStatus };
			res.render("admin/category/View_Category", {
				category,
				alert,
				title: " Traveligo | Details Wisata",
			});
		} catch (error) {
			res.flash("alertMessage", `${error.message}`);
			res.flash("alertStatus", "danger");
			res.redirect("/admin/category");
		}
	},
	addCategory: async (req, res) => {
		try {
			const { name } = req.body;
			await Category.create({ name });
			req.flash("alertMessage", "Succes Menambahkan Category");
			req.flash("alertStatus", "success");
			res.redirect("/admin/category");
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/category");
		}
	},
	editCategory: async (req, res) => {
		try {
			const { id, name } = req.body;
			const category = await Category.findOne({ _id: id });
			category.name = name;
			await category.save();
			req.flash("alertMessage", "Succes Edit Category");
			req.flash("alertStatus", "warning");
			res.redirect("/admin/category");
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "warning");
			res.redirect("/admin/category");
		}
	},
	deleteCategory: async (req, res) => {
		try {
			const { id } = req.params;
			const category = await Category.findOne({ _id: id });
			await category.remove();
			req.flash("alertMessage", "Succes Delete Category");
			req.flash("alertStatus", "danger");
			res.redirect("/admin/category");
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/category");
		}
	},

	viewItem: async (req, res) => {
		try {
			const item = await Item.find()
				.populate({ path: "imageId", select: "id imageurl" })
				.populate({ path: "categoryId", select: " id name" });
			const category = await Category.find();
			const alertMessage = req.flash("alertMessage");
			const alertStatus = req.flash("alertStatus");
			const alert = { message: alertMessage, status: alertStatus };
			res.render("admin/item/View_Item", {
				item,
				title: "Landing Page | Item",
				alert,
				category,
				action: "view",
			});
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/item");
		}
	},
	addItem: async (req, res) => {
		try {
			const { categoryId, title, rating, city, about } = req.body;
			if (req.files.length > 0) {
				const category = await Category.findOne({ _id: categoryId });
				const newItem = {
					categoryId,
					title,
					description: about,
					rating,
					city,
				};
				const item = await Item.create(newItem);
				category.itemId.push({ _id: item._id });
				await category.save();
				for (let i = 0; i < req.files.length; i++) {
					const imageSave = await Image.create({
						imageUrl: `images/${req.files[i].filename}`,
					});
					item.imageId.push({ _id: imageSave._id });
					await item.save();
				}
				req.flash("alertMessage", "Success Add Item");
				req.flash("alertStatus", "success");
				res.redirect("/admin/item");
			}
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/item");
		}
	},

	showImageItem: async (req, res) => {
		try {
			const { id } = req.params;
			const item = await Item.findOne({ _id: id })
				.populate({ path: "imageId", select: "id imageUrl" })
				.populate({ path: "categoryId", select: " id name" });
			const alertMessage = req.flash("alertMessage");
			const alertStatus = req.flash("alertStatus");
			const alert = { message: alertMessage, status: alertStatus };
			res.render("admin/item/View_Item", {
				item,
				title: "Landing Page | Show Image Item",
				alert,
				action: "show image",
			});
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/item");
		}
	},
	EditImageItem: async (req, res) => {
		try {
			const { id } = req.params;
			const item = await Item.findOne({ _id: id })
				.populate({
					path: "imageId",
					select: "id imageUrl",
				})
				.populate({
					path: "categoryId",
					select: "id name",
				});
			const category = await Category.find();
			const alertMessage = req.flash("alertMessage");
			const alertStatus = req.flash("alertStatus");
			const alert = { message: alertMessage, status: alertStatus };
			res.render("admin/item/View_Item", {
				item,
				title: "Landing Page | Show Edit Item",
				alert,
				action: "edit",
				category,
			});
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/item");
		}
	},
	editItem: async (req, res) => {
		try {
			const { id } = req.params;
			const { categoryId, title, rating, city, about } = req.body;
			const item = await Item.findOne({ _id: id })
				.populate({
					path: "imageId",
					select: "id imageUrl",
				})
				.populate({
					path: "categoryId",
					select: "id name",
				});
			if (req.files.length) {
				for (let i = 0; i < item.imageId.length; i++) {
					const imageUpdate = await Image.findOne({ _id: item.imageId[i]._id });
					await fs.unlink(path.join(`public/${imageUpdate.imageUrl}`));
					imageUpdate.imageUrl = `images/${req.files[i].filename}`;
					await imageUpdate.save();
					item.title = title;
					item.rating = rating;
					item.city = city;
					item.description = about;
					item.categoryId = categoryId;
					await item.save();
					req.flash("alertMessage", "Succes Update Item");
					req.flash("alertStatus", "danger");
					res.redirect("/admin/item");
				}
			} else {
				item.title = title;
				item.rating = rating;
				item.city = city;
				item.description = about;
				item.categoryId = categoryId;
				await item.save();
				req.flash("alertMessage", "Succes Update Item");
				req.flash("alertStatus", "success");
				res.redirect("/admin/item");
			}
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/item");
		}
	},

	deleteItem: async (req, res) => {
		try {
			const { id } = req.params;
			const item = await Item.findOne({ _id: id }).populate("imageId");
			for (let i = 0; i < item.imageId.length; i++) {
				Image.findOne({ _id: item.imageId[i]._id })
					.then((image) => {
						fs.unlink(path.join(`public/${image.imageUrl}`));
						image.remove();
					})
					.catch((error) => {
						req.flash("alertMessage", `${error.message}`);
						req.flash("alertStatus", "danger");
						res.redirect("/admin/item");
					});
			}
			await item.remove();
			req.flash("alertMessage", "Success delete Item");
			req.flash("alertStatus", "success");
			res.redirect("/admin/item");
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect("/admin/item");
		}
	},
	viewDetailItem: async (req, res) => {
		const { itemId } = req.params;
		try {
			const alertMessage = req.flash("alertMessage");
			const alertStatus = req.flash("alertStatus");
			const alert = { message: alertMessage, status: alertStatus };
			const feature = await Feature.find({ itemId: itemId });
			const activity = await Activity.find({ itemId: itemId });

			res.render("admin/item/detail_item/view_detail_item", {
				title: "Traveligo | Detail Item",
				alert,
				itemId,
				feature,
				activity,
			});
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	addFeature: async (req, res) => {
		const { name, qty, itemId } = req.body;
		try {
			if (!req.file) {
				req.flash("alertMessage", "Image not found");
				req.flash("alertStatus", "danger");
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
			const feature = await Feature.create({
				name,
				qty,
				itemId,
				imageUrl: `images/${req.file.filename}`,
			});

			const item = await Item.findOne({ _id: itemId });
			item.featureId.push({ _id: feature._id });
			await item.save();
			req.flash("alertMessage", "Success Add Feature");
			req.flash("alertStatus", "success");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},

	editFeature: async (req, res) => {
		const { id, name, qty, itemId } = req.body;
		try {
			const feature = await Feature.findOne({ _id: id });
			if (req.file == undefined) {
				feature.name = name;
				feature.qty = qty;
				await feature.save();
				req.flash("alertMessage", "Success Update Feature");
				req.flash("alertStatus", "success");
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			} else {
				await fs.unlink(path.join(`public/${feature.imageUrl}`));
				feature.name = name;
				feature.qty = qty;
				feature.imageUrl = `images/${req.file.filename}`;
				await feature.save();
				req.flash("alertMessage", "Success Update Feature");
				req.flash("alertStatus", "success");
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},

	deleteFeature: async (req, res) => {
		const { id, itemId } = req.params;
		try {
			const feature = await Feature.findOne({ _id: id });

			const item = await Item.findOne({ _id: itemId }).populate("featureId");
			for (let i = 0; i < item.featureId.length; i++) {
				if (item.featureId[i]._id.toString() === feature._id.toString()) {
					item.featureId.pull({ _id: feature._id });
					await item.save();
				}
			}
			await fs.unlink(path.join(`public/${feature.imageUrl}`));
			await feature.remove();
			req.flash("alertMessage", "Success Delete Feature");
			req.flash("alertStatus", "success");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},

	addActivity: async (req, res) => {
		const { name, type, itemId } = req.body;
		try {
			if (!req.file) {
				req.flash("alertMessage", "Image not found");
				req.flash("alertStatus", "danger");
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
			const activity = await Activity.create({
				name,
				type,
				itemId,
				imageUrl: `images/${req.file.filename}`,
			});

			const item = await Item.findOne({ _id: itemId });
			item.activityId.push({ _id: activity._id });
			await item.save();
			req.flash("alertMessage", "Success Add Activity");
			req.flash("alertStatus", "success");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},

	editActivity: async (req, res) => {
		const { id, name, type, itemId } = req.body;
		try {
			const activity = await Activity.findOne({ _id: id });
			if (req.file == undefined) {
				activity.name = name;
				activity.type = type;
				await activity.save();
				req.flash("alertMessage", "Success Update activity");
				req.flash("alertStatus", "success");
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			} else {
				await fs.unlink(path.join(`public/${activity.imageUrl}`));
				activity.name = name;
				activity.type = type;
				activity.imageUrl = `images/${req.file.filename}`;
				await activity.save();
				req.flash("alertMessage", "Success Update activity");
				req.flash("alertStatus", "success");
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},

	deleteActivity: async (req, res) => {
		const { id, itemId } = req.params;
		try {
			const activity = await Activity.findOne({ _id: id });
			const item = await Item.findOne({ _id: itemId }).populate("activityId");
			for (let i = 0; i < item.activityId.length; i++) {
				if (item.activityId[i]._id.toString() === activity._id.toString()) {
					item.activityId.pull({ _id: activity._id });
					await item.save();
				}
			}
			await fs.unlink(path.join(`public/${activity.imageUrl}`));
			await activity.remove();
			req.flash("alertMessage", "Success Delete Activity");
			req.flash("alertStatus", "success");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash("alertMessage", `${error.message}`);
			req.flash("alertStatus", "danger");
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
};
