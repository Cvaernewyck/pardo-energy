const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ CORS config (adjust origin as needed)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} requested at ${new Date().toISOString()}`);

  // Log body only for POST/PUT/PATCH
  if (["POST", "PUT", "PATCH"].includes(req.method)) {
    console.log("Request body:", req.body);
  }

  next(); // continue to route
});

// ✅ GET /contact
app.get("/contact", (req, res) => {
  console.log("Handling GET /contact");
  res.send("Contact page (GET)");
});

// ✅ POST /contact
app.post("/contact", (req, res) => {
  console.log("Handling POST /contact");
  res.json({ message: "Contact received", data: req.body });
});

// ✅ Catch-all for undefined routes
app.use((req, res) => {
  console.log(`Unhandled route: ${req.method} ${req.url}`);
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
