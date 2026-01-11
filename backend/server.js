require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const cors = require("cors"); // Import cors middleware

connectDB();

// Enable CORS and allow all origins
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
