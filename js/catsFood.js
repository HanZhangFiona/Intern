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