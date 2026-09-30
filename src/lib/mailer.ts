// Sends sign-up verification emails through the college SMTP account.
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export async function sendVerification(to: string, link: string) {
  await transport.sendMail({ from: "CampusKart <no-reply@campuskart.example>", to, subject: "Verify your email", text: link });
}

export async function sendWithRetry(to: string, link: string) {
  for (let i = 0; i < 3; i++) { try { return await sendVerification(to, link); } catch {} }
}
