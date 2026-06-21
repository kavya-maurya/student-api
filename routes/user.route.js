const express=require("express");
const router= express.Router();
const mongoose = require("mongoose");
const User = require("../models/user.model");


router.get("/user", async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: users });
});

router.post("/user", async (req, res) => {
  const users = await User.create(req.body);
  res.status(200).json({ message: users });
});

router.delete("/user/:id", async (req, res) => {
  const deletedusers = await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: deletedusers });
});

router.put("/user/:id", async(req, res) => {
const users = await User.findByIdAndUpdate(req.params.id,req.body );
res.status(200).json({ message: "Changes made." });
});

module.exports=router;