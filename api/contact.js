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

            const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            const userAgent = req.headers['user-agent'];

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
                    to: toEmails.join(","),
                    bcc: bccEmails.join(","),
                    bcc: bccEmails,
                    subject: `Nieuw contact website ${name}`,
                    html: `
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fdfdfd; color: #333;">
  <h2 style="color: #1a73e8; text-align:center;">Nieuw Contactbericht</h2>
  
  <p><strong>Naam:</strong> ${name}</p>
  <p><strong>Bedrijf:</strong> ${company}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></p>
  <p><strong>Telefoon:</strong> <a href="tel:${phone}" style="color: #1a73e8; text-decoration: none;">${phone}</a></p>
  
  <p><strong>Bericht:</strong></p>
  <p style="background:#f1f5f9; padding: 15px; border-radius: 8px; line-height: 1.5;">${message}</p>
  
  <div style="text-align:center; margin-top: 30px;">
    <a href="mailto:${email}" style="padding:14px 30px; background:#1a73e8; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">Direct Beantwoorden</a>
  </div>
  <p>ip: ${ip}, agent: ${userAgent}</p>
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
