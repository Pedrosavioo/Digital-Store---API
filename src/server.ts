import e from "express";
import router from "./routes/router";
import { config } from "dotenv";

config();

const app = e();

app.use(e.json());

app.use("/api/v1", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`🔸🔷 Server is running in port: ${PORT} 🔷🔸`);
});
