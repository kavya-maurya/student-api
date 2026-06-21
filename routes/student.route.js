const express= require ("express");
const router = express.Router();
const Student = require("../models/student.model")

const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "af775b001@smtp-brevo.com",
    pass: "bskOjQ3C18G5wq0",
  },
});



router.get("/student", async (req, res) => {
  const students = await Student.find();
  res.status(200).json({ message: students });
});

router.post("/student", async (req, res) => {
  const student = await Student.create(req.body);
   const info = await transporter.sendMail({
    from: 'kavyamaurya269@gmail.com', // sender address
    to: "kavyamaurya264@gmail.com,wakeupcoders@gmail.com", // list of recipients
    subject: "student record", // subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  res.status(200).json({ message: student });

});

router.delete("/student/:id", async (req, res) => {
  const deletedStudent = await Student.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: deletedStudent });
});

router.put("/student/:id", async(req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id,
    req.body
)})

module.exports=router;