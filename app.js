/** @format */

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// import method overRide
const methodOverride = require("method-override");
//import express session
const session = require("express-session");
// import connect-flash
const flash = require("connect-flash");
//import mongoose
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
	"mongodb+srv://Rahmadee:Fitri310317@cluster0.i3ytv09.mongodb.net/db_traveligo?retryWrites=true&w=majority",

	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// router admin dan router apicontroller
const adminRouter = require("./routes/admin");
const apiRouter = require("./routes/api");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//session
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 600000 },
	}),
);
// connect flash
app.use(flash());
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//export css dan javascript
app.use(
	"/sb-admin-2",
	express.static(
		path.join(__dirname, "node_modules/startbootstrap-sb-admin-2"),
	),
);
app.use(cors());

const corsOptions = {
	origin: "http://localhost:3000/",
};
app.use("/", indexRouter);
app.use("/users", usersRouter);
// admin dan api controller
app.use("/admin", adminRouter);
app.use("/api/v1/member", apiRouter), cors(corsOptions);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
