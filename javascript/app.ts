import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { Request, Response, NextFunction } from "express";
const app = express();
//Making express aware that behind our proxy is Ingress nginx so trust the proxy
app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ err });

  next(err);
});

export { app };
