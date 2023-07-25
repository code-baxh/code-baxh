const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
        Name:${body.name}\r\n
        Company Name:${body.companyName}\r\n
        Email:${body.email}\r\n
        Message:${body.message}\r\n
    `;

  await mail.send({
    to: "code.baxh@gmail.com",
    from: "contactform@touchque.com",
    subject: "New Contact form message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "OK" });
  console.log(res.status);
};
