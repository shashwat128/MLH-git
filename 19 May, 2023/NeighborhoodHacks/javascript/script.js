let searchForm =document.querySelector('search-form');

document.querySelector('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active');
}

let shoppingCart =document.querySelector('.shopping-cart');

document.querySelector('#vart-btn').onclick =() =>{
    shoppingCart.classList.toggle('active');
}