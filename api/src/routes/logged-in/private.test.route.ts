import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import isAuthenticated from "../../middleware/is.authenticated.middleware";

const mapPrivateTestRoute = (server: Application) => {
  server.get("/private", isAuthenticated, (req: Request, res: Response) =>
    res.json({
      message:
        "Success: you just accessed a route restricted to logged users only.",
    })
  );
};

export default mapPrivateTestRoute;
