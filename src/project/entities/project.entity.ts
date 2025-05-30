import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StatusEnum } from "../enums/status.enum";

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
}
