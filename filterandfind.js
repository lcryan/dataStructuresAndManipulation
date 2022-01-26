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


let franksEmail = '';

for (let i = 0; i < studentDetails.length; i++) {
    if (studentDetails[i].name === "Frank Heijnen") {
        franksEmail = studentDetails[i].email;
    }
}
console.log(franksEmail);