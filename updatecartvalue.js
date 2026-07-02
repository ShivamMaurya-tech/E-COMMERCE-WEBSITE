const cartvalue=document.querySelector('#cartvalue');

export const updatecartvalue=(cartproducts)=>{
    return (cartvalue.innerHTML=` <i class="fa-solid fa-cart-shopping">${cartproducts.length}</i>`);
};