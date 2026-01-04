const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend đang chạy!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello từ Node.js" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
