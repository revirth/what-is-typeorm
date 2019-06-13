import "dotenv/config";

import { server } from "./server";
import { dbConnect } from "./database";

(async () => {
  dbConnect();
  server();
})();
