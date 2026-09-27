function calculateInterest() {

    const principal =
        parseFloat(document.getElementById("principal").value);

    const rate =
        parseFloat(document.getElementById("rate").value);

    const time =
        parseFloat(document.getElementById("time").value);

    const result =
        document.getElementById("result");

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        result.style.display = "block";
        result.innerHTML = "⚠️ Please enter all values.";
        return;
    }

    if (principal < 0 || rate < 0 || time < 0) {
        result.style.display = "block";
        result.innerHTML = "⚠️ Values cannot be negative.";
        return;
    }

    const simpleInterest =
        (principal * rate * time) / 100;

    const totalAmount =
        principal + simpleInterest;

    result.style.display = "block";

    result.innerHTML = `
        Simple Interest: ₹${simpleInterest.toFixed(2)}
        <br><br>
        Total Amount: ₹${totalAmount.toFixed(2)}
    `;
}

function clearCalculator() {

    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("time").value = "";

    const result =
        document.getElementById("result");

    result.style.display = "none";
    result.innerHTML = "";
}
