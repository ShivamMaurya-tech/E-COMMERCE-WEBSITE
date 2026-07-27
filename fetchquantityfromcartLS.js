import { getcartproductfromLS } from "./getcartproducts"

export const fetchquantityfromcartLS=(id,price)=>{

    let localstoragecartproducts =getcartproductfromLS();

let existingproducts=localstoragecartproducts.find((curelement)=>
    curelement.id==id);

let quantity=1;

if(existingproducts){
    quantity=existingproducts.quantity;
    price=existingproducts.price;
}
return {quantity,price};

}