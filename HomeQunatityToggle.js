export const hometogglebutton=(event,id,stock)=>{
const curcardelement=document.querySelector(`#card${id}`);
// console.log(curcardelement);




// finding the product quantity for taking value of stocks which is 1 right now.
const productquantity=curcardelement.querySelector('.productQuantity');
// console.log(productquantity);

let quantity=parseInt(productquantity.getAttribute('data-quantity')) || 1;
if(event.target.className==='cartincrement'){
    if(quantity < stock){
        quantity+=1;
    }
    else if(quantity===stock){
        quantity=stock;
    }

}




if(event.target.className==='cartdecrement'){
if(quantity>1){
    quantity-=1;
}
}

productquantity.innerText=quantity;
productquantity.setAttribute('data-quantity',quantity.toString());
return quantity;
}
