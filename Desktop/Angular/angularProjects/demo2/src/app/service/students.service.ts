import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentDetails: any[] = [
    { id: 1, name: "Nicolas", details: "Nico Details", email: "nico@gmail.com" },
    { id: 2, name: "james", details: "james Details", email: "james@gmail.com" },
    { id: 3, name: "marvin", details: "marvin Details", email: "marvin@gmail.com" },
    { id: 4, name: "chiller", details: "chiller Details", email: "chiller@gmail.com" },
    { id: 5, name: "lutaaya", details: "lutaaya Details", email: "lutaaya@gmail.com" },
  ]

  constructor() { }
  getStudents() {
    return this.studentDetails
  }
  createStudent(student: { name, email, details }) {
    let index = this.studentDetails.slice(-1)[0].id
    const newIndex = index + 1;
    const newStudent = { ...student, id: newIndex }
    this.studentDetails.unshift(newStudent) 
  }
  deleteStudent(id) {
    console.log(id)
   this.studentDetails =  this.studentDetails.filter(student=>student.id === id)
  }
}
