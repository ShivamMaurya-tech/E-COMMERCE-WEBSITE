import products from './API/products.json';
import { fetchquantityfromcartLS } from './fetchquantityfromcartLS';
import { getcartproductfromLS } from './getcartproducts';
import { incrementdecrement } from './incrementdecrement';
import { removeproductsfromcart } from './removeproductfromcart';
import { updatecartproducttotal } from './updatecartproducttotal';

let cartproductselements=getcartproductfromLS();

let filterproducts=products.filter((curproduct)=>{
    // console.log(curproduct.id
    return cartproductselements.some((curelem)=>
        curelem.id===curproduct.id);



        
    
});
console.log(filterproducts);



// To update the addtocart Page

const cartelement=document.querySelector('.productcartelement');
const Templatecontainer=document.querySelector('#productcarttemplate');

const showproducts=()=>{
 filterproducts.forEach((curelement)=>{
    const {id,category,image,price,name, stock,}=curelement;

    let productclone=document.importNode(Templatecontainer.content,true);

let LSactualdata=fetchquantityfromcartLS(id,price);
productclone.querySelector('.productQuantity').textContent=LSactualdata.quantity;
productclone.querySelector('.productprice').textContent=LSactualdata.price;

// handle increment and decrement button
productclone.querySelector(".stockelement").addEventListener('click',(event)=>{
    incrementdecrement(event,id,stock,price);
    
});






    productclone.querySelector('#cardvalue').setAttribute('id',`card${id}`)
productclone.querySelector('.category').textContent=category;
productclone.querySelector('.Productname').textContent=name;
productclone.querySelector('.productimage').src=image;
productclone.querySelector('.productstock').textContent=stock;

productclone.querySelector('.remove-to-cart-button').addEventListener('click',()=>removeproductsfromcart(id));

  cartelement.append(productclone);
 })

}
showproducts();










//calculate the card total in our cartproducts page

updatecartproducttotal();