import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { GroceryList } from "./GroceryList";

@Entity("items")
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 100
  })
  name: string;

  @CreateDateColumn({
    type: "timestamp"
  })
  created: string;

  @ManyToOne(type => GroceryList, groceryList => groceryList.items)
  groceryList: GroceryList;
}
