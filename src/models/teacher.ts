export interface ITeacher {
  teacherName: string;
  surname: string;
  dni: string;
  subjects: Array<string>;
  sendedDocs: boolean;
}