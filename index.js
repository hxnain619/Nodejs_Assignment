const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname + "/views")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname + "/views/about.html"));
});
app.get("/project", (req, res) => {
	res.sendFile(path.join(__dirname + "/views/projects.html"));
});

app.listen(PORT, () => {
	console.log("Running at Port =", PORT);
});
