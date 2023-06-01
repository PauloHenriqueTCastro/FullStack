import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Users } from "./users.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => Users, (users) => users.contact)
  users: Users;
}

export { Contact };
