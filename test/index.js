/** @format */

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
	it("GET Landing Page", (done) => {
		chai
			.request(app)
			.get("/api/v1/member/landing-page")
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("object");
				expect(res.body).to.have.property("mostPicked");
				expect(res.body.mostPicked).to.have.an("array");
				expect(res.body).to.have.property("category");
				expect(res.body.category).to.have.an("array");
				done();
			});
	});
	it("GET Details Page", (done) => {
		chai
			.request(app)
			.get("/api/v1/member/details-page/6342dc6c325cb65ca453968e")
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("country");
				expect(res.body).to.have.property("isFavorit");
				expect(res.body).to.have.property("featureId");
				expect(res.body.featureId).to.have.an("array");
				expect(res.body).to.have.property("activityId");
				expect(res.body.activityId).to.have.an("array");
				expect(res.body).to.have.property("imageId");
				expect(res.body.imageId).to.have.an("array");
				expect(res.body).to.have.property("_id");
				expect(res.body).to.have.property("title");
				expect(res.body).to.have.property("rating");
				expect(res.body).to.have.property("city");
				expect(res.body).to.have.property("description");
				expect(res.body).to.have.property("__v");
				done();
			});
	});
});
