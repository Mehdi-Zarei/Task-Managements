import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { StatusEnum } from "../enums/project.enum";
import { User } from "src/user/entities/user.entity";
import { Category } from "src/category/entities/category.entity";

@Entity({ name: "Projects" })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category_id: number;

  @Column({ type: "enum", enum: StatusEnum, default: StatusEnum.Planning })
  status: StatusEnum;

  @ManyToOne(() => User, (user) => user.project_id)
  userId: User;

  @ManyToOne(() => Category, (category) => category.projectIds)
  categoryIds: Category;
}
