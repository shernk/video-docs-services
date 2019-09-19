import app from "./app.model";
import V1Routes from "./routes/v1/v1.route";

// version routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://www.videodevdocs.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// defines version routes
app.use("/api/v1", V1Routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Example app listening on port 3000!"));
