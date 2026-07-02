export const showtoast=(operation,id)=>{
    let toast=document.createElement('div');
    toast.classList.add('toast');


    //see the text content of the toast based on the operation

    if(operation==='add'){
        toast.textContent =`product with ID ${id} has been added `;
    }
    else {
        toast.textContent =`product with ID ${id} has been deleted `;
        
    }
document.body.appendChild(toast);

  // Automatically remove the toast after a few seconds
setTimeout(() => {
    toast.remove();
    
},2000);

}