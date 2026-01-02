export default function handler(req, res) {
    if (req.method === "POST") {
        console.log("POST /api/contact", req.body);
        res.status(200).json({ message: "Contact received", data: req.body });
    } else if (req.method === "GET") {
        console.log("GET /api/contact");
        res.status(200).send("Contact page (GET)");
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}