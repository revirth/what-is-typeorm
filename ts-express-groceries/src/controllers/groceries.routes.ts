import { Router } from "express";
import { router as itemsRouter } from "./items.routes";

import {
  showAllGroceries,
  createNewGroceries,
  showOneGroceries,
  updateGroceries,
  deleteGroceries
} from "./groceries.handler";

export const router = Router();

router
  .route("/")
  .get(showAllGroceries)
  .post(createNewGroceries);

router
  .route("/:id")
  .get(showOneGroceries)
  .put(updateGroceries)
  .delete(deleteGroceries);

router.use("/:id/items", itemsRouter);
