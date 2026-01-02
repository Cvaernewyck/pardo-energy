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

                await transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: process.env.GMAIL_USER,
                    subject: `New contact message from ${name}`,
                    text: `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Message: ${message}
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
