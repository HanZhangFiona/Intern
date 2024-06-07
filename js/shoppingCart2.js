let add = document.querySelector('.add');
let reduce = document.querySelector('.reduce');
let number = document.querySelector('.num');
let price = document.querySelector('.price');
let total = document.querySelector('.total');

add.addEventListener('click', function () {
    number.value++; 
    price.innerHTML = '$' + (number.value * 69.99).toFixed(2); 
    calculateTotal(); 
});


reduce.addEventListener('click', function () {
    if (number.value == 1) return; 
    number.value--; 
    price.innerHTML = '$' + (number.value * 69.99).toFixed(2); 
    calculateTotal(); 
});


function calculateTotal() {
    total.innerHTML = '$' + parseFloat((number.value * 69.99)).toFixed(2); 
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