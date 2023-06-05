import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entitie";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => Contact, (contact) => contact.users)
  contact: Contact[];
}

export { Users };
