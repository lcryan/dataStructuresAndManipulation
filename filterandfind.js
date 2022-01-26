const studentDetails = [
    {
        name: "Frank Heijnen",
        email: "frank.heijen@novi-education.nl",
        course: "FSD Bootcamp",
        averageGrade: 7
    },
    {
        name: "Lucia Tortilla",
        email: "lucia.tortilla@novi-education.nl",
        course: "FSD Bootcamp",
        averageGrade: 6
    },
    {
        name: "Kevin Schmevin",
        email: "kevin.schmevin@novi-education.nl",
        course: "BE Bootcamp",
        averageGrade: 7.5
    }
]

// Wir wollen die Mail von Frank finden. Hierbei koennen wir einen
//for-loop gebrauchen. Und das geht so:
let franksEmail = '';

for (let i = 0; i < studentDetails.length; i++) {
    if (studentDetails[i].name === "Frank Heijnen") {
        franksEmail = studentDetails[i].email;
    }
}
console.log(franksEmail);

//Man kann hier jedoch auch die FIND-Methode gebrauchen, welche bei
//einem array mit zig Auftraegen Sinn macht.
// find kann nur boolean returnen! Findet, das wonach es sucht und hoert dann auf.
// Kann nur ein Ding finden.
// wichtig bei all den methoden ist das man immer ein callback erstellt!

const franksDetails = studentDetails.find((studentDetail) => {
    if (studentDetail.name === "Frank Heijnen") {
        return true;
    }
    return false;
});

console.log(franksDetails.email);

//Wir wollen alle Studenten aus dem Array heraus FILTERN, die am BOOTCAMP teilnehmen. Also benutzen wir hier FILTER!
// Filter geht durch das ganze Array hindurch!

const bootcampers = studentDetails.filter((studentDetail) => {
    if (studentDetail.course === "FSD Bootcamp") {
        return true
    }
    return false
});
console.log(bootcampers);

