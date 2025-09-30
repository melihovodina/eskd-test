import express, { Application } from "express"
import router from "./router/index"
import { connectDB } from "./config/db"

const app: Application = express()

app.use(express.json())
app.use("/api", router)

const PORT = process.env.PORT || 3000;

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`);
  });
})();
