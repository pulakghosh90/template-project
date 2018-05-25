var express = require("express");
var app = express();
app.use(express.static("public/html"));
app.use(express.static("public/js"));
app.use(express.static("public/css"));

app.listen("3003", () => {
    console.log("server is listening on 3003.");
});