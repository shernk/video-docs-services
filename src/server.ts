import app from "./app.model";
import V1Routes from "./routes/v1/v1.route";

// version routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "https://www.documentation.com");
  res.header("Access-Control-Allow-Origin", "https://www.videodevdocs.com");
  res.header("Access-Control-Allow-Origin", "https://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  if (req.method === "OPTIONS") {
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET"); //to give access to all the methods provided
  return res.status(200).json({});
  }
  next();
});

// defines version routes
app.use("/api/v1", V1Routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server is running on port: 3000"));
