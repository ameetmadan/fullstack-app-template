import express from "express";
import { healthRouter } from "./infrastructure/health.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(healthRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app };
