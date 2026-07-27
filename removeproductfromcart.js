import { getcartproductfromLS } from "./getcartproducts"
import { showtoast } from "./showtoast";
import { updatecartproducttotal } from "./updatecartproducttotal";
import { updatecartvalue } from "./updatecartvalue";

export const removeproductsfromcart=(id)=>{
    
    let cartproducts=getcartproductfromLS();
    cartproducts=cartproducts.filter((curelement)=>curelement.id!==id);
    
    localStorage.setItem('cartproductLS',JSON.stringify(cartproducts));




    //element removing from cart


    let removediv=document.querySelector(`#card${id}`);
    if(removediv){
        removediv.remove();

        showtoast('delete',id);
       
    }
 updatecartproducttotal();
    updatecartvalue(cartproducts);
}