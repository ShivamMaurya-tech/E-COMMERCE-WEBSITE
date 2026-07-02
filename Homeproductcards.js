
import { addtocart } from './AddtoCart';
import {hometogglebutton} from './HomeQunatityToggle';



const productContainer=document.querySelector("#productcontainer");
const productTemplate=document.querySelector("#productTemplate");

console.log(productContainer,productTemplate);













export const showproductcontainer=(products)=>{
    if(!products){
        return false;
    }




    // Step 4 has been applied
    products.forEach((curprod)=>{
    const {brand,category,description,id,image,name,price ,stock}=curprod;
const productclone=document.importNode(productTemplate.content, true);
productclone.querySelector(".Productname").textContent=name;
productclone.querySelector(".Productname").alt=name;
productclone.querySelector(".productimage").src=image;
productclone.querySelector(".category").textContent=category;

productclone.querySelector(".productstock").textContent=stock;
productclone.querySelector(".productdescription").textContent=description;
productclone.querySelector(".productprice").textContent=price;
productclone.querySelector(".productactualprice").textContent=price*4;

// replacing the value of cardvalue with the help of setattribute 
productclone.querySelector('#cardvalue').setAttribute('id',`card${id}`);



// After the Value of increament and Decreament toggles.
productclone.querySelector(".stockelement").addEventListener('click',(event)=>{
    hometogglebutton(event,id,stock);
    
});



// Function of add to cart and storing value at localstorage.
productclone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
    addtocart(event,id,stock);
})



productContainer.append(productclone);
});
}
