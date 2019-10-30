require("should");
const request = require("supertest");
const mongoose =  require("mongoose");

process.env.ENV = "Test";

const app =  require("../app");

const Book = mongoose.model("Book");
const agent =  request.agent(app);

describe("Book Crud Test", () => {
    it("Should allows a book to be pposted and return read and _it", (done) => {
        const bookPost = { title: "myBook", author: "Author", genre: "genre"};

        agent.post("/api/books")
            .send(bookPost)
            .expect(200)
            .end((err, results) => {
                console.log(results.body);
                results.body.read.should.not.equal("false");
                results.body.should.have.property("_id");
                done();
            });
    });

    afterEach((done) => {
        Book.deleteMany({}).exec();
        done();
    });

    after((done) => {
        mongoose.connection.close();
        app.server.close(done());
    });
})