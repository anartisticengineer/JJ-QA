import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/views/"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "JJ-QA",
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
  });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact Me",
  });
});

app.listen(PORT, () => {
  console.log(`App listening at PORT ${PORT}`);
});
