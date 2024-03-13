//objects destructuring
const course = {
    courseName: "JS_Hindi",
    price: "999",
    courseInstructor: "HC"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     "name": "Manoj",
//     "courseName": "JS_Hindi",
//     "price": "free"
// }