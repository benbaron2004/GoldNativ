import express from "express";
import cors from "cors";
import calcRouter from "./routers/calculatorRouter.js";
import weatherRouter from "./routers/weatherRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/calculations", calcRouter);
app.use("/weather", weatherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
