function printRange(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

let start = prompt("Enter the start of the range: ");
let end = prompt("Enter the end of the range: ");
printRange(start, end);