import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentInput } from './student.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(studentInput: StudentInput): Promise<Student> {
    const { firstName, lastName } = studentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}
