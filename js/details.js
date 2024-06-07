let reduce = document.querySelector('.reduce');
let number = document.querySelector('input[type="number"]');
let add = document.querySelector('.add');
let addCart = document.querySelector('.addCart');

reduce.addEventListener('click', function() {
    if (number.value == 1) return;
    number.value--;
});

add.addEventListener('click', function(){
    number.value++;
});

addCart.addEventListener('click',function(){
    alert('Successfully added！');
});


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