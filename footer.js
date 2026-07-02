// <!-- Start footer Section -->
const footerhtml=  `
<footer class="section-footer">
  <div class="footer-container container">
    <div class="content_1">
      <img src="public/ChatGPT Image Jun 26, 2026, 01_57_25 PM.png" alt="logo">
      <p>Welcome to the Shivam Maurya store.Your ultimate destination for cutting-edge gadgets!</p>
      <img src="public/ChatGPT Image Jun 26, 2026, 02_46_09 PM.png" alt="cards">
    </div>

    <div class="content_2">
      <h4>Shopping</h4>
      <a href="#">Computer Store</a>
      <a href="#">Laptop Store</a>
      <a href="#">Accessories</a>
      <a href="#">Sales & Discount</a>
    </div>



    <div class="content_3">
      <h4>Experience</h4>
      <a href="./contact.html">Cantact Us</a>
      <a href="" target="_blank" >Payment Method</a>
      <a href="" target="_blank">Delivery</a>
      <a href="" target="_blank">Return and Exchange</a>
    </div>



    <div class="content_4">
      <h4>Newsletter</h4>
      <p>Be the first to know about new<br/> Arrivals,sales & promos!</p>
      <div class="f-mail">
        <input type="email"  placeholder="Your Email"/>
        <i class="fa-solid fa-envelope"></i>
      </div>
      <hr>
    </div>
  </div>
<div class="f-design">
  <div class="f-design-txt">
    <p>Design and Code by <i class="fa-solid fa-heart"></i> Shivam Maurya</p>
  </div>
</div>



</footer> `

// <!-- End of the Footer section -->
 

 const footerelement=document.querySelector('.section-footer');
 footerelement.insertAdjacentHTML('afterbegin',footerhtml);