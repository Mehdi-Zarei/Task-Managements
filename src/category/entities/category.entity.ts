import { Project } from "src/project/entities/project.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Project, (project) => project.category_id)
  projectIds: Project[];
}
