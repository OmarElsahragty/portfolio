const nodemailer = require("nodemailer");

exports.sendEmail = (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: process.env.EMAIL,
      to: "omar_elsahragty@hotmail.com",
      subject: "Sahragty's Portfolio ✔",
      text: `
    from: ${req.body.name}
    
    contact: ${req.body.email}
    
    message: ${req.body.message}`,
    },
    (err) => {
      if (err) {
        res.status(400).json({
          message: "Failed, Couldn't send the email",
        });
        return;
      } else {
        res.status(200).json({
          message: "success",
        });
      }
    }
  );
};
