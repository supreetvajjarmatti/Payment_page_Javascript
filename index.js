function processPayment() {
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    var name = document.getElementById("name").value;

    // Validate card details (in a real-world application, you would use a payment gateway API for this)
    if (cardNumber && expiryDate && cvv && name) {
        alert("Payment Successful!");
    } else {
        alert("Please fill in all fields.");
    }
}