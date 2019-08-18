import app from "./app.model";
import V1Routes from "./routes/v1/v1.route";


// defines version routes
app.use("/api/v1", V1Routes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
