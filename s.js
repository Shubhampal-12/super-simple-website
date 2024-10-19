let navbar=document.querySelector('.navbar');

document.querySelector('#bars-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    cartItem.classList.remove('active');
    


}

let searchFrom=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');


}

let cartItem=document.querySelector('.cart-item-cont');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');

}
Window.onscroll = () => {
    navbar.classlist.remove('active');
    cartItem.classList.remove('active');
    searchFrom.classList.remove('active');


}