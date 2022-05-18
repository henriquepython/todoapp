import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async create(data: CreateTodoDto) {
    return await this.todoRepository.save(this.todoRepository.create(data));
  }

  async findAll() {
    return await this.todoRepository.find();
  }

  async findOneOrFail(id: string) {
    try {
      return await this.todoRepository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  async update(id: string, data: UpdateTodoDto) {
    const todo = await this.todoRepository.findOneOrFail(id);
    this.todoRepository.merge(todo, data);
    return await this.todoRepository.save(todo);
  }

  async deleteById(id: string) {
    await this.todoRepository.findOneOrFail(id);
    await this.todoRepository.softDelete(id);
  }
}
