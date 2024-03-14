import express from "express";
import path from "path";
import { experiences, skills } from "./views/data/pages/resume";
import { contactReasons } from "./views/data/pages/contact";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/views/"));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views/"));

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "JJ-QA",
    environment: process.env.ENV,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/aboutMe", {
    title: "About Me",
  });
});

app.get("/resume", (req, res) => {
  res.render("pages/resume", {
    title: "Resume",
    experiences: experiences,
    skills: skills,
  });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact Me",
    contactReasons: contactReasons,
  });
});

app.listen(PORT, () => {
  console.log(`App listening at PORT ${PORT}`);
});
