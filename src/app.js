import express from "express";
import router from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

// Déclaration des routes API
app.use(router);

// Route racine
app.get("/", (req, res) => {
  res.json({
    name: "API REST Users",
    version: "1.0.0",
    status: "running",
    endpoints: {
      users: "/users",
      products: "/products",
    },
  });
});

app.use(errorMiddleware);
export default app;
