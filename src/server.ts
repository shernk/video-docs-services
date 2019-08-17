import express, { Request } from "express";
import { Response } from "express-serve-static-core";
import  V1Routes  from "./routes/v1/v1.route";

const app = express();

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

// defines version routes
app.use("/api/v1", V1Routes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
