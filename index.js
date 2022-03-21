import express from "express";
import bodyParser from "body-parser";

import courses from "./routes/courses.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.text());
app.use("/courses", courses);
app.get("/", (req, res) => res.send("Welcome"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));