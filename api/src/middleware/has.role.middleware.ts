import { Request, Response, NextFunction } from "express";

const hasRole = (role: string) => (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const assignedRoles = req.user["http://localhost:3000/roles"];
  if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
    return next();
  } else {
    return res.status(401).send("Isufficient role");
  }
};

export default hasRole;
