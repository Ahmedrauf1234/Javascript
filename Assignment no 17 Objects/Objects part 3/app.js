
//DeStructuring 

const course = {
    courseName : 'Javascript',
    price : '999',
    courseTeacher : 'Hitesh'
}
const {courseTeacher} = course //agar hame courseTeacher ki value chaiye hum ese bhi print krwasakhte hen (best practice)
console.log(courseTeacher);

const {courseTeacher : Teacher} = course //agar courseteacher ki jagah teacher krna ho to hum ese bhi krsakhte hen name change
console.log(Teacher);

console.log(course.courseTeacher); //ese bhi print krwa sakhte hen








