// Q.  Write a for loop that iterates over the `subjects` array in the `student` object and prints each subject.
// Loops can execute a block of code a number of times.

const student = {
    name : "john",
    age : 20,
    subjects : ["Maths", "Science", "History"]
};

for(let i = 0; i < student.subjects.length; i++) {
    console.log(student.subjects[i]);
}



