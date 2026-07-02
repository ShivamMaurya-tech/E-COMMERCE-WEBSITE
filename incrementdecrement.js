import { getcartproductfromLS } from "./getcartproducts";
import { updatecartproducttotal } from "./updatecartproducttotal";

export const incrementdecrement=(event,id,stock,price)=>{
    const curcardelement=document.querySelector(`#card${id}`);
    // finding the product quantity for taking value of stocks which is 1 right now.
    const productquantity=curcardelement.querySelector('.productQuantity');
    const productprice=curcardelement.querySelector('.productprice');

let quantity=1;
let localstorageprice=0;

//   Get the data from localStorage
 let arrlocalstorageproduct=getcartproductfromLS();

 let existingproducts=arrlocalstorageproduct.find((curelement)=>curelement.id===id);
 if(existingproducts){
    quantity=existingproducts.quantity;
    localstorageprice=existingproducts.price;

 }

else{
  localstorageprice=price;
    price=price;
}


if(event.target.className==='cartincrement'){
    if(quantity < stock){
        quantity+=1;
    }
    else if(quantity===stock){
        quantity=stock;
        localstorageprice=price*stock;
    }

}





if(event.target.className==='cartdecrement'){
if(quantity>1){
    quantity-=1;
}
}



//finally we update the localstorage price.
localstorageprice=(price*quantity);
localstorageprice=Number(localstorageprice.toFixed(2))

let updatedcart={id,quantity,price:localstorageprice};
 updatedcart=arrlocalstorageproduct.map((curelement)=>{
return curelement.id===id ? updatedcart :curelement});


localStorage.setItem('cartproductLS',JSON.stringify(updatedcart));

//   also we need to reflect the changes on the screen too
productprice.innerText=localstorageprice;
productquantity.innerText=quantity;



updatecartproducttotal();
}










