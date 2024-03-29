import app from "./app.model";
import V1Routes from "./routes/v1/v1.route";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Origin", "https://www.documentation.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// defines version routes
app.use("/api/v1", V1Routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server is running on port: 3000" + port));
