//whitespace characters
const person_name :string = "   \n\tRuba khan\t\n   ";
console.log(person_name);
//print name after striping the white spaces
const  without_whitespace :string = person_name.trim();
console.log(without_whitespace);