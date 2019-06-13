import { Router } from "express";
import {
  showAllItem,
  createItem,
  showItem,
  updateItem,
  deleteItem
} from "./items.handler";

export const router = Router({ mergeParams: true });

router
  .route("/")
  .get(showAllItem)
  .post(createItem);

router
  .route("/:itemId")
  .get(showItem)
  .put(updateItem)
  .delete(deleteItem);
