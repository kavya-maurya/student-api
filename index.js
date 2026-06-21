
const express = require("express");
const mongoose = require("mongoose");


const userRoutes = require("./routes/user.route");
const studentRoutes = require("./routes/student.route");

const app = express();
app.use(express.json()); //middleware Middleware runs before routes.    Converts incoming JSON into JavaScript object.

mongoose
  .connect(
    "mongodb://admin:admin@ac-xxh8qed-shard-00-00.7pulazq.mongodb.net:27017,ac-xxh8qed-shard-00-01.7pulazq.mongodb.net:27017,ac-xxh8qed-shard-00-02.7pulazq.mongodb.net:27017/?ssl=true&replicaSet=atlas-9m1zsk-shard-0&authSource=admin&appName=Cluster0",
  ).then(() => {
    console.log("Database connected successfully !");
  }).catch((err) => {
    console.log(err);
  });




app.use("/api/user", userRoutes);
app.use("/api/student", studentRoutes);



app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
