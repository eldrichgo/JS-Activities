
function calculatePMT(amount, interest, years) {
    let principal = parseFloat(amount.value);
    let calculatedInterest = parseFloat(interest.value) / 100 / 12; //6% = 0.06 / 12
    let calculatedPayments = parseFloat(years.value) * 12; // 2 years * 12 month payment= 24 months
    
    let x = Math.pow(1 + calculatedInterest, calculatedPayments); // (1 + 0.06)^24
    let monthly = (principal * x * calculatedInterest) / (x - 1);

    return monthly.toFixed(2);
}

document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault();
    amount = document.getElementById('loanAmount');
    interest = document.getElementById('interestRate');
    years = document.getElementById('loanTerm');

    let result = calculatePMT(amount, interest, years);
    document.getElementById('result').innerText = "$ " +result;
});