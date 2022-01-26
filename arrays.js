// Hier die Beispiele zum Video: de map-methode; Kapitel 6 Java structures & manipulations

const students = ["Henk", "Piet", "Klaas", "Frank"];

//for(i=0; i < students.length; i++){
//    students[i] = students[i] +"je";
//}
//console.log(students);

//mapmethod : here it is a function

const outcome = students.map((student) => {
    return student + "je";
});
console.log(outcome);

const studentDetails = [
    {
        name: "Frank Heijnen",
        email: "frank.heijen@novi-education.nl",
        course: "FSD Bootcamp"
    },
    {
        name: "Lucia Tortilla",
        email: "lucia.tortilla@novi-education.nl",
        course: "FSD Bootcamp"
    },
    {
        name: "Kevin Schmevin",
        email: "kevin.schmevin@novi-education.nl",
        course: "BE Bootcamp"
    }
]

//Wir wollen ein neues Array erstellen, das die Emailadressen der Objeckte (s.o.) beinhaltet.
// mit einem forloop geht das so:
//let emails = [];
//for (let i = 0; i < studentDetails.length; i++) {
//    emails.push(studentDetails[i].email);
//}
//console.log(emails);

//Mit der map-methode geht das so:

const emailadresses = studentDetails.map((studentDetail) => {
    return studentDetail.email;
});

console.log(emailadresses);