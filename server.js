const express = require("express");
const app = express();

app.use(express.static("dist"));
app.use(express.static("dist/html"));

app.listen("3003", () => {
    console.log("server is listening on 3003.");
});