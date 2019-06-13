import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Item } from "./Item";

@Entity("groceries")
export class GroceryList extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({
    unique: true,
    length: 100
  })
  name: string;

  @CreateDateColumn({
    type: "timestamp"
  })
  created: string;

  @OneToMany(type => Item, item => item.groceryList)
  @JoinColumn()
  items: Item[];
}
