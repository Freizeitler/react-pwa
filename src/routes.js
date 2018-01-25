import { configureRoutes } from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home";

console.log('routes.js: ', Home)

export default configureRoutes([
  Home
]);
/*module.exports = configureRoutes([
  Home
]);*/