import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'live.smtp.gmail.com',
    port: 587,
    secure: false, // use SSL
    auth: {
      user: 'atulsaxena7a7a7a@gmail.com',
      pass: 'vrdj facz ofel ifhc',
    }
  });


  export function sendEmail(name, email, message) {
  // Configure the mailoptions object
      const mailOptions = {
        from: email,
        to: '0506cs211015@gmail.com',
        subject: `Message from ${name}`,
        text: message
      };
      
      // Send the email
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  }
  
