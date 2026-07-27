import './src/style.css';


import products from './API/products.json';

console.log('Loaded products:', products);
import {showproductcontainer} from "./Homeproductcards";
showproductcontainer(products);