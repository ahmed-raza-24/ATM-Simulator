let balance = 1000;
let attempts = 0;

document.getElementById("withdrawBtn").addEventListener("click", () => {
    if (attempts >= 3) {
        document.getElementById("message").innerText = "ATM locked after 3 attempts.";
        return;
    }

    let amount = Number(document.getElementById("withdrawInput").value);
    attempts++;

    if (amount > balance) {
        document.getElementById("message").innerText = "Insufficient balance.";
    } else {
        balance -= amount;
        document.getElementById("balance").innerText = "₹" + balance;
        document.getElementById("message").innerText =
            `₹${amount} withdrawn successfully.`;
    }

    if (attempts === 3) {
        document.getElementById("message").innerText +=
            " 3 withdrawals completed. ATM locked.";
    }
});
