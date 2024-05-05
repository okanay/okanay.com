import nodemailer from "nodemailer";

const NEXT_EMAIL = process.env.GMAIL_APP_EMAIL || "";
const NEXT_PASSWORD = process.env.GMAIL_APP_PASSWORD || "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: NEXT_EMAIL,
    pass: NEXT_PASSWORD,
  },
});

const mailOptions = {
  from: NEXT_EMAIL,
  to: NEXT_EMAIL,
};

export { transporter, mailOptions };
