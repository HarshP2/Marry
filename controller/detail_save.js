const User = require("../models/sign_form");
var nodemailer = require("nodemailer");

var Admin = require("../models/admin");

module.exports.create = async function (req, res) {
  console.log("hello");
  var post = await User.create(req.body);

  // ***************************************************** email **********************

  console.log("hello");
console.log("Checking req.body :",req.body.email);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abhinitnaware01@gmail.com",
      pass: "pccr sxdj teow kmyv",
    },
  });

  var mailOptions = {
    from: "abhinitnaware01@gmail.com",
    to: req.body.email,
    subject: "Sending Email using Node.js",
    text: "kaisa hai makhi chor !",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log("BYY");

 
  return res.redirect('back');
};

module.exports.check = async function (req, res) {
  if (req.body.email == "ptanu460@gmail.com" && req.body.pass == 123) {
    console.log("Login successfull");
    try {
      const users = await User.find(); // Fetch all users from MongoDB
      res.render("info.ejs", { users }); // Render the EJS template
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    console.log("Error email or password");
  }
};
