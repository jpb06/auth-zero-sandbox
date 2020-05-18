import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import isAuthenticated from "../../middleware/is.authenticated.middleware";
import repos from "../../mock-data/repos.mock.data";
const checkScopes = require("express-jwt-authz"); // no typings

const mapGetTimelineRoute = (server: Application) => {
  server.get(
    "/timeline",
    isAuthenticated,
    checkScopes(["read:timeline"]),
    (req: Request, res: Response) => res.json(repos)
  );
};

export default mapGetTimelineRoute;
