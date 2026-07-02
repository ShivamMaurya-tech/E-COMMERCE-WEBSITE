import { getcartproductfromLS } from "./getcartproducts"

export const updatecartproducttotal=()=>{


let productsubtotal=document.querySelector('.productsubtotal');
let productfinaltotal=document.querySelector('.productfinaltotal');


    let localstorageproduct=getcartproductfromLS();
    let initialvalue=0;
    let totalproductprice=localstorageproduct.reduce((accum,curelement)=>{
let productprice=parseInt(curelement.price)||0;
return accum+productprice;
    },initialvalue);

    // console.log(totalproductprice);
   
    productsubtotal.innerText=`₹${totalproductprice}`;
     productfinaltotal.innerText=`₹${totalproductprice+50}`;
}