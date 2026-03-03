// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wahajrajpoot987654@gmail.com',           
      pass: 'kdxihspbirdtwppe'               
    }
  });

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: 'wahajrajpoot987654@gmail.com',
    subject: `New Contact Message from ${firstName}`,
    html: `
      <h3> Contact From Portfolio</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ code: 500, message: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
