import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
 res.send("Hello World!");    
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.end("Hi")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});