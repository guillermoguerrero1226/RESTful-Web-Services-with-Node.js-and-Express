const should = require("should");
const sinon = require("sinon");
const bookController = require("../controllers/booksControllers");

describe("Book Controller Tests:", () => {
    describe("Post", () => {
        it("Should not allow an empty title on post", () => {
            const Book = function (book) { this.save = () => {}};
            const req = {
                body: {
                    author: "Mocked Author"
                }
            }

            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            }
            const controller = bookController(Book);
            controller.post(req, res);
            res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
            res.send.calledWith("Title is required").should.equal(true);
        });
    });
});