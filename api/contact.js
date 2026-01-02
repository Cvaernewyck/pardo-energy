import formidable from "formidable";
import nodemailer from "nodemailer";

// Disable default body parsing
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {

    if (req.method === "POST") {
        const form = formidable({ multiples: false });

        form.parse(req, async (err, fields) => {
            if (err) {
                console.error("Error parsing form-data:", err);
                return res.status(500).json({ error: "Form parse error" });
            }

            console.log("Form fields:", fields);

            const { name, company, email, phone, message } = fields;

            const gmail = process.env.GMAIL_USER
            console.log("gmail user", gmail)

            const pw = process.env.GMAIL_APP_PASSWORD
            console.log("gmail pw", pw)

            try {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_APP_PASSWORD,
                    },
                });

                const toEmails = process.env.GMAIL_USER_TO ? process.env.GMAIL_USER_TO.split(",") : [];
                const bccEmails = process.env.GMAIL_USER_BCC ? process.env.GMAIL_USER_BCC.split(",") : [];

                await transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: toEmails.join(","),  // main recipient(s)
                    bcc: bccEmails.join(","), // hidden recipients
                    replyTo: "support@pardo.com",
                    bcc: bccEmails,
                    subject: `Nieuw contact website ${name}`,
                    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1a73e8; text-decoration: none;">${phone}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <div style="text-align:center; margin-top: 20px;">
        <a href="mailto:${email}" style="padding:12px 25px; background:#1a73e8; color:#fff; text-decoration:none; border-radius:5px;">Reply Now</a>
      </div>
      <p style="font-size: 12px; color: #777; margin-top: 20px;">Sent on ${new Date().toLocaleString()}</p>
    </div>
  `,
                });

                res.status(200).json({ message: "Message sent successfully!" });
            } catch (err) {
                console.error("Error sending email:", err);
                res.status(500).json({ error: "Failed to send email" });
            }
        });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
