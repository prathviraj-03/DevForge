import nodemailer from "nodemailer";
import { siteData } from "@/data/siteData";

function createEmailBody({ name, email, budget, message }) {
  const formattedMessage = message ? message.replaceAll("\n", "<br />") : "";
  const { brand } = siteData;
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Outfit:wght@500;700;800&family=Rubik+Glitch&display=swap');
    body { font-family: 'DM Sans', Arial, sans-serif; }
    h1, .font-heading { font-family: 'Outfit', Arial, sans-serif; }
    .logo-font { font-family: 'Rubik Glitch', system-ui, Arial, sans-serif; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #090909; color: #f2f2ee; -webkit-font-smoothing: antialiased;">
  <div style="background-color: #090909; padding: 60px 20px; width: 100%; box-sizing: border-box;">
    <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #111111; border: 1px solid #1e1e1e; border-radius: 16px; border-collapse: collapse; margin: 0 auto; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
      
      <!-- Header -->
      <tr>
        <td style="padding: 40px 30px; text-align: center; border-bottom: 1px solid #1e1e1e; background-color: #0f0f0f; border-radius: 16px 16px 0 0;">
          <h1 class="logo-font" style="margin: 0; color: #f59e0b; font-size: 32px; font-weight: 400; letter-spacing: 2px;">
            ${brand.name}
          </h1>
          <p class="font-heading" style="margin: 12px 0 0 0; color: #9a9a9a; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">
            New Project Inquiry
          </p>
        </td>
      </tr>
      
      <!-- Content Block -->
      <tr>
        <td style="padding: 40px 32px;">
          <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
            <tr>
              <td style="padding-bottom: 24px;">
                <p class="font-heading" style="margin: 0 0 6px 0; font-size: 10px; color: #505050; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 800;">Name</p>
                <p style="margin: 0; font-size: 18px; color: #f2f2ee; font-weight: 500;">${name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 24px;">
                <p class="font-heading" style="margin: 0 0 6px 0; font-size: 10px; color: #505050; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 800;">Email</p>
                <p style="margin: 0; font-size: 18px;"><a href="mailto:${email}" style="color: #f59e0b; text-decoration: none; font-weight: 500;">${email}</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 36px;">
                <p class="font-heading" style="margin: 0 0 10px 0; font-size: 10px; color: #505050; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 800;">Budget</p>
                <span class="font-heading" style="display: inline-block; background-color: rgba(245, 158, 11, 0.10); color: #f59e0b; border: 1px solid rgba(245,158,11,0.18); padding: 6px 14px; border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: 0.04em;">
                  ${budget || "Not specified"}
                </span>
              </td>
            </tr>
            <tr>
              <td style="border-top: 1px solid #1e1e1e; padding-top: 36px;">
                <p class="font-heading" style="margin: 0 0 12px 0; font-size: 10px; color: #505050; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 800;">Message</p>
                <div style="background-color: #0f0f0f; border: 1px solid #1e1e1e; border-radius: 12px; padding: 24px; color: #9a9a9a; font-size: 15px; line-height: 1.8;">
                  ${formattedMessage}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <!-- Footer -->
      <tr>
        <td style="background-color: #0f0f0f; padding: 24px; border-top: 1px solid #1e1e1e; text-align: center; border-radius: 0 0 16px 16px;">
          <p style="margin: 0; color: #505050; font-size: 12px; line-height: 1.5;">
            This message was securely routed from your ${brand.name} portal.<br>
            <span style="color: #707070;">Reply to this email directly to contact the prospect.</span>
          </p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

function createTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("SMTP configuration is missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, budget, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM || `${name} <${email}>`,
      to: process.env.EMAIL_TO || "prathvirajacharya0407@gmail.com",
      subject: `New inquiry from ${name}`,
      html: createEmailBody({ name, email, budget, message }),
    };

    const sent = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ ok: true, messageId: sent.messageId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message || "Failed to send message." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
