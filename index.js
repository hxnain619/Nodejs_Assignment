const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname + "/views")));

// Routes
require("./routes/app.route")(app);
app.listen(PORT, () => {
	console.log("Running at Port =", PORT);
});
