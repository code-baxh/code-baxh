import nextConnect from "next-connect";
import { body, validationResult } from "express-validator";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

const router = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

router.use(
  body("title").not().isEmpty().withMessage("Please enter your job title")
);

router.use(
  body("firstname").not().isEmpty().withMessage("Please enter your first name")
);

router.use(
  body("lastname").not().isEmpty().withMessage("Please enter your last name")
);

router.use(
  body("email").isEmail().withMessage("Please enter a valid email address")
);

router.use(
  body("mobilenumber")
    .not()
    .isEmpty()
    .withMessage("Please enter your mobile number")
);

router.use(body("cv").not().isEmpty().withMessage("Please choose a file"));

router.post(async (req, res) => {
  const {
    cv,
    title,
    firstname: firstName,
    lastname: lastName,
    email,
    mobilenumber: mobileNumber,
  } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  // const cvBase64 = Buffer.from(cv, "base64");
  // const cvUTF8 = cvBase64.toString("utf-8");
  // fs.writeFileSync("file.pdf", Buffer.from(cv, "base64"), "utf8");

  const message = `
        Title: ${title}\r\n
        Name: ${firstName + " " + lastName}\r\n
        Email: ${email}\r\n
        Contact: ${mobileNumber}\r\n
    `;

  await mail.send({
    to: "info@touchque.com",
    from: "contactform@touchque.com",
    subject: "New Contact form message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
    attachments: [
      {
        content: cv,
        filename: "attachment.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  });

  res.json({ success: true, msg: "Application submitted successfully" });
});

export default router;
