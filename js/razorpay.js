var options = {
    "key": "rzp_test_SwTnkoHHR6nbNt",    
    "amount": "500",
    "currency": "INR",
    "name": "Anu Lekshmi",
    "description": "Donate Now",
    "image": "https://www.clipartmax.com/png/middle/138-1389413_paypal-clipart-donate-button-donate-button-png.png",
    "order_id": "order_HagBZJ939B8Dpr",
    "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Anu Lekshmi",
        "email": "anulekshmi@gmail.com",
        "contact": "9393939393"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#784cd9"
    }
};
var rzp1 = new Razorpay(options); rzp1.on('payment.failed', function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});

document.getElementById('razorpay_donate_button').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
}