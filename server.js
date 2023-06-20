const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const path = require("path");
const fs = require("fs");
const https = require("https");
require("dotenv").config();

connectDB();

// HTTPS credentials
/*const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/xtherapp.online/privkey.pem"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/xtherapp.online/cert.pem"
);
const ca = fs.readFileSync("/etc/letsencrypt/live/xtherapp.online/chain.pem");

const credentials = {
  key: privateKey,
  cert: certificate,
  ca,
};*/

// const httpsServer = https.createServer(credentials, app);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/pastores", require("./routes/api/pastor"));
app.use("/api/usuarios", require("./routes/api/usuario"));
app.use("/api/cultos", require("./routes/api/cultos"));
app.use("/api/lancamentos", require("./routes/api/lancamentos"));
app.use("/api/tarefas", require("./routes/api/tarefas"));
app.use("/api/igreja-filha", require("./routes/api/igrejaFilha"))
app.use("/api/igreja-mae", require("./routes/api/igrejaMae"))
app.use("/api/comunicados", require("./routes/api/comunicados"))

// Static Routes
app.use("/", express.static(path.join(__dirname, "public")));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))

app.listen(PORT, () => console.log(`HTTP server running at port: ${PORT}`));
// httpsServer.listen(443,() => console.log("HTTPS server running at port 443"))