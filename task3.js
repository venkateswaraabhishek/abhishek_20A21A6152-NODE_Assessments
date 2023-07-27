const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'GMAIL',
  auth: {
    user: 'honey@gmail.com',
    pass: '1234567890'
  }
});


const mailOptions = {
  from: 'honey@gmail.com', 
  to: 'pravin.consensus@gmail.com',
  subject: '20A21A6152',
  text: 'This is 20a21a6152 sending email'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});