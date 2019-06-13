import { GroceryList } from "../entities/GroceryList";
import { Item } from "../entities/Item";

export const showAllItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const grocery = await GroceryList.findOne({
      where: { id },
      relations: ["items"]
    });

    res.status(200).json(grocery.items);
  } catch (err) {
    next(err);
  }
};
export const showItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({ where: { id: itemId } });

    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const createItem = async (req, res, next) => {
  try {
    let item = await Item.create(req.body);
    item = await item.save();

    const { id } = req.params;
    const grocery = await GroceryList.findOne({
      where: { id },
      relations: ["items"]
    });
    grocery.items.push(item);
    grocery.save();

    res.json(item);
  } catch (err) {
    next(err);
  }
};
export const updateItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({ where: { id: itemId } });
    item.name = req.body.name;
    await item.save();

    res.json(item);
  } catch (err) {
    next(err);
  }
};
export const deleteItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({ where: { id: itemId } });
    await item.remove();

    res.json(item);
  } catch (err) {
    next(err);
  }
};
