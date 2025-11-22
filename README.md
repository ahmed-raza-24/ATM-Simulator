# ATM-Simulator
A simple and interactive ATM simulator that allows three withdrawals with real-time balance updates using JavaScript.

# ATM Simulator (JavaScript Project)

A simple ATM simulator built using **HTML, CSS, and JavaScript**.

## Features

- Starts with a balance of **₹1000**
- Allows exactly **3 withdrawal attempts**
- Validates balance before withdrawal
- Automatically locks after 3 attempts
- Professional UI with buttons and input fields

---

## How It Works

1. User enters the withdrawal amount.
2. If the amount is less than or equal to the balance:
   - The balance is updated.
3. If the amount is greater than the balance:
   - Shows “Insufficient balance”.
4. After 3 attempts, the ATM becomes locked.

---

## File Structure

atm-simulator/
│
├── index.html # UI layout
├── style.css # Styling
├── script.js # ATM logic
└── README.md # Project documentation


---

## 📦 Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/ahmed-raza-24/ATM-Simulator.git
