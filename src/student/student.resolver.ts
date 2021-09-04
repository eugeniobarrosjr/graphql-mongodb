import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { StudentInput } from './student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query((results) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  createStudent(@Args('studentInput') studentInput: StudentInput) {
    return this.studentService.createStudent(studentInput);
  }
}
