require("should");
const request = require("supertest");
const mongoose =  require("mongoose");

const app =  require("../app");

const Book = mongoose.model("Book");
const agent =  request.agent(app);

describe("Book Crud Test", () => {
    it("Should allos a book to be pposted and return read and _it", (done) => {
        const bookPost = { title: "myBook", author: "Author", genre: "genre"};

        agent.post("api/books")
            .send(bookPost)
            .expect(200)
            .end((err, results) => {
                results.body.should.have.property
            })
    });
})