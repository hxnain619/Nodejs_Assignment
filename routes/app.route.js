module.exports = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname + "/views/index.html"));
	});

	app.get("/about", (req, res) => {
		res.sendFile(path.join(__dirname + "/views/about.html"));
	});
	app.get("/project", (req, res) => {
		res.sendFile(path.join(__dirname + "/views/projects.html"));
	});
};
