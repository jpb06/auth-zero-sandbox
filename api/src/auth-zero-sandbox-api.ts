import * as dotenv from "dotenv";
const envLoadingResult = dotenv.config({ path: "../front-react/.env" });
if (envLoadingResult.error) {
  console.log(envLoadingResult.error.message);
  process.exit(1);
}

import * as express from "express";
import { Express } from "express-serve-static-core";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
import * as cors from "cors";

import extendsImplementation from "./middleware/extends.implementation.middleware.js";
import ErrorHandler from "./middleware/errors.handler.middleware.js";
import NoRouteErrorHandler from "./middleware/no.route.error.handler.middleware.js";
import mapPrivateTestRoute from "./routes/logged-in/private.test.route.js";
import mapGetTimelineRoute from "./routes/logged-in/get.timeline.route.js";
import mapGetRestrictedRoute from "./routes/logged-in/get.restricted.route.js";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(extendsImplementation);

// simulate delay
app.use((req, res, next) => setTimeout(next, 1500));

// logged in
mapPrivateTestRoute(app);
mapGetTimelineRoute(app);
mapGetRestrictedRoute(app);

app.use(ErrorHandler);
app.use(NoRouteErrorHandler);

app.set("port", 3001);

var server = app.listen(app.get("port"), "", () => {
  console.log("Auth0 dev api running on port 3001");
});
