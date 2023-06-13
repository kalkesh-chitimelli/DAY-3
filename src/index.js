//console.log("Demo App");
import marks from './marks.js';

class student {
    constructor(rollno,firstname,lastname,marksarr,totalMarks){
        this.rollno = rollno;
        this.firstname = firstname;
        this.lastname = lastname;
        this.marksarr = marksarr;
        this.totalMarks =0; 
    }
    display(){
        console.log(this.rollno,this.firstname,this.lastname,this.marksarr);
        this.caltotalmarks(this.marksarr);
        
    }
    
    caltotalmarks(){
        this.marksarr.forEach(element => {
            this.totalMarks += element.mark;
        });
        //console.log(this.totalMarks)
    }
    
    
    
}

const marks1 = new marks('Maths',70);
const marks2 = new marks('Science',60);
const marks3 = new marks('Social',50);

let marksarr1 = [marks1,marks2,marks3];

const marks1s2 = new marks('Maths',70);
const marks2s2 = new marks('Science',50);
const marks3s2 = new marks('Social',50);

let marksarr2 = [marks1s2,marks2s2,marks3s2];

const marks1s3 = new marks('Maths',70);
const marks2s3 = new marks('Science',60);
const marks3s3 = new marks('Social',30);

let marksarr3 = [marks1s3,marks2s3,marks3s3];

var student1 = new student(1,'john','doe',marksarr1);
var student2 = new student(2,'joe','niv',marksarr2);
var student3 = new student(3,'job','nik',marksarr3);

const students = [student1,student2,student3]

const resultPercentage = (students)=>{
    return students.map(student=>{
        const l = student.marksarr.length; 
        student.caltotalmarks();
        return (student.totalMarks / l);
    })
}

const studentWithDistinction=(students)=>{
    return students.filter(student=>{
        student.caltotalmarks();
        return student.totalMarks >=200;
    })
}

const studentDetails = (students,rollno)=>{
    const student = students.find(student=>{
        student.caltotalmarks();
        return student.rollno===rollno
    })
    console.log(`${student.rollno}   ${student.firstname} ${student.lastname}    ${student.totalMarks}`);
}

const percentagesOfAllStudents = resultPercentage(students)

console.log(percentagesOfAllStudents);

const totalStudentsWithDistinction = studentWithDistinction(students).length;

console.log(`Total Student with distinction ${totalStudentsWithDistinction}`);

studentDetails(students,3)






