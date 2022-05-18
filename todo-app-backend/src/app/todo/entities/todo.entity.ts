import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'todos' })
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task: string;

  @Column({ name: 'is_done', type: 'tinyint', width: 1 })
  isDone: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string;

  constructor(todo?: Partial<TodoEntity>) {
    this.id = todo?.id;
    this.isDone = todo?.isDone;
    this.task = todo?.task;
    this.createdAt = todo?.createdAt;
    this.updatedAt = todo?.updatedAt;
    this.deleteAt = todo?.deleteAt;
  }
}
