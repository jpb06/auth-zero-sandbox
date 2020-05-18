import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import isAuthenticated from "../../middleware/is.authenticated.middleware";
import hasRole from "../../middleware/has.role.middleware";
const checkScopes = require("express-jwt-authz"); // no typings

const mapGetRestrictedRoute = (server: Application) => {
  server.get(
    "/restricted/scope",
    isAuthenticated,
    checkScopes(["read:timeline", "read:restricted"], { checkAllScopes: true }),
    (req: Request, res: Response) =>
      res.json("200 with timeline and restricted scopes")
  );
  server.get(
    "/restricted/role",
    isAuthenticated,
    hasRole("admin"),
    (req: Request, res: Response) => res.json("200 with admin role")
  );
};

export default mapGetRestrictedRoute;
