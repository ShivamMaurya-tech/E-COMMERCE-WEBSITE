
//this files symbolised that getting data from localstorage


import { updatecartvalue } from "./updatecartvalue";

export const getcartproductfromLS=()=>{
    let cartproducts=localStorage.getItem("cartproductLS");
    if (!cartproducts){    //if local storage is empty then return empty
        return [];
    }


    cartproducts=JSON.parse(cartproducts);
     //update the cart button value
    updatecartvalue(cartproducts);
    return cartproducts;
}






















































// import { updatecartvalue } from "./updatecartvalue";

// export const getcartproductfromLS=()=>{
//     let cartproducts=localStorage.getItem("cartproductLS");

//     if (!cartproducts){  
//         cartproducts=localStorage.getItem("cartproductsLS");  //if local storage is empty then return empty
       
//     }

//     if (!cartproducts){
//         return [];
//     }


//     cartproducts=JSON.parse(cartproducts);
//     updatecartvalue(cartproducts);
//     return cartproducts;
// }