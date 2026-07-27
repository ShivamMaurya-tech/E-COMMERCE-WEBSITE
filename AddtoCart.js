
import {getcartproductfromLS} from './getcartproducts';
import { showtoast } from './showtoast';
import { updatecartvalue } from './updatecartvalue';

getcartproductfromLS();

export const addtocart=(event ,id,stock)=>{
    const curproductelement=document.querySelector(`#card${id}`);
//    console.log(curproductelement);

let quantity=curproductelement.querySelector('.productQuantity').innerText;

let price=curproductelement.querySelector('.productprice').innerText;

//  console.log(quantity,price);


//  creating empty function for localstorage element


 let arrlocalstorageproduct=getcartproductfromLS();
// replacing Rupee symbol with null
// price=price.replace("","");


//finding cart product is existing in the local storage or not
let existingproduct=arrlocalstorageproduct.find((curproduct)=>curproduct.id===id);



// after finding the cartproduct we will increase only the 
// quantity and their price .
if(existingproduct && quantity > 1)
{ quantity=Number(existingproduct.quantity)+Number(quantity);
   price=Number(price*quantity);
  let updatedcart={id,quantity,price};
 updatedcart = arrlocalstorageproduct.map((curprod)=>{

 return curprod.id===id ? updatedcart: curprod ;
  });
  console.log(updatedcart)
  localStorage.setItem("cartproductLS",JSON.stringify(updatedcart));
//shows toast when a product added to cart
  showtoast('add',id);
}


if(existingproduct){
    // alert('duplicate data exist');
    return false;
}






price=Number(price*quantity);
quantity=Number(quantity);


// updated local Storage

arrlocalstorageproduct.push({id,quantity,price});
localStorage.setItem("cartproductLS",JSON.stringify(arrlocalstorageproduct));

// Update the cart button value
updatecartvalue(arrlocalstorageproduct);
//shows toast when a product added to cart
  showtoast('add',id);


}














