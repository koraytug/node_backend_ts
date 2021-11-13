 import * as express from "express"; 
import AppRouter from "./routes/app.route";
  
const app = express.default();
const PORT = process.env.PORT || 4000;
const appRouter = new AppRouter();

app.use("/", appRouter.appRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
