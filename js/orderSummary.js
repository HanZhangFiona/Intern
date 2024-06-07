let add1 = document.querySelector('.add1');
let add2 = document.querySelector('.add2');
let reduce1 = document.querySelector('.reduce1');
let reduce2 = document.querySelector('.reduce2');
let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let price1 = document.querySelector('.price1');
let price2 = document.querySelector('.price2');
let subtotal = document.querySelector('.subtotal');
let total = document.querySelector('.total');
let total2 = document.querySelector('.total2');

add1.addEventListener('click', function () {
    number1.value++; 
    price1.innerHTML = '$' + (number1.value * 69.99).toFixed(2); 
    calculateTotal(); 
});


reduce1.addEventListener('click', function () {
    if (number1.value == 1) return; 
    number1.value--; 
    price1.innerHTML = '$' + (number1.value * 69.99).toFixed(2); 
    calculateTotal(); 
});

add2.addEventListener('click', function () {
    number2.value++; 
    price2.innerHTML = '$' + (number2.value * 69.99).toFixed(2); 
    calculateTotal(); 
});

reduce2.addEventListener('click', function () {
    if (number2.value == 1) return; 
    number2.value--; 
    price2.innerHTML = '$' + (number2.value * 69.99).toFixed(2); 
    calculateTotal(); 
});


function calculateTotal() {
    let subtotalValue = parseFloat((number1.value * 69.99)) + parseFloat((number2.value * 69.99)); 
    subtotal.innerHTML = '$' + subtotalValue.toFixed(2); 
    total.innerHTML = '$' + subtotalValue.toFixed(2);
    total2.innerHTML = '$' + subtotalValue.toFixed(2);
}


let likes = document.querySelectorAll('.like');

likes.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        if (e.target.dataset.img == '0') {
            e.target.src = './images/love.png';
            e.target.dataset.img = '1';
        } else {
            e.target.src = './images/wishList.png';
            e.target.dataset.img = '0';
        }
    });
});