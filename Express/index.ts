import express from "express";
import bodyParser from "body-parser";
import { computerRoutes } from "./src/routes/computerRoutes";
import { mobileRoutes } from "./src/routes/mobileRoutes";
import { audioRoutes } from "./src/routes/audioRoutes";
import { televisionRoutes } from "./src/routes/televisionRoutes";

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/computers", computerRoutes);
app.use("/mobile-devices", mobileRoutes);
app.use("/audio-systems", audioRoutes);
app.use("/televisions", televisionRoutes);

app.get("/home", (req, res) => {
  res.send("Hello and welcome!");
});

const start = () => {
  try {
    app.listen(port, () =>
      console.log(`server is running on port: http://localhost:${port}`)
    );
  } catch (e) {
    console.log(`we have some error: ${e}`);
  }
};

start();
