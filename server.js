const express = require("express");
const connectDb = require("./config/connectDB");
const user = require("./routes/user");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

//     app.use(
//       '/',
//       createProxyMiddleware({
//         target: 'http://localhost:6000',
//         changeOrigin: true,
//       })
//     );

// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow requests from this origin.
//   })
// );
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use("/user", user);
connectDb();

//////property
const property = require("./routes/property");
app.use("/property", property);

//router upload
const upload = require("./routes/upload");
app.use("/upload", upload);

app.listen(PORT, (err) => {
  err
    ? console.error(err)
    : console.log(`server is running successfully on port ${PORT}`);
});
