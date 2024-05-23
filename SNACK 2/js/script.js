const studentsList = [
    {
        id: 213,
        name: "Giuseppina della Rovere",
        grades: 78,
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96,
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48,
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74,
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68,
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50,
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84,
    },
];

const uppercaseStudentsList = [];

studentsList.forEach((student) => {
    uppercaseStudentsList.push(student.name.toUpperCase());
});

const idAndGradesStudents = studentsList.filter((student) => {
    if(student.grades > 70 && student.id > 120){
        return true
    }
});

const gradesStudents = studentsList.filter((student) => {
    if(student.grades > 70){
        return true
    }
});

console.log(studentsList, uppercaseStudentsList, gradesStudents, idAndGradesStudents);