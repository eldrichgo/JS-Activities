function calcuGrade(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let grade = prompt("Enter the grade: ");
let result = calcuGrade(grade);
console.log("The grade is: " + result);

document.getElementById("grade-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var grade = document.getElementById("grade").value;
    var result = calcuGrade(grade);
    document.getElementById("result").innerText = result;
});
