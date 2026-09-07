```javascript
// =========================
// SHOPPING CART
// =========================

let cartCount = 0;

let cart = document.querySelector(".cart");

let addButtons = document.querySelectorAll(".product-bottom a");


for (let i = 0; i < addButtons.length; i++) {

    addButtons[i].addEventListener("click", function(event) {

        event.preventDefault();

        cartCount++;

        cart.textContent = "Cart (" + cartCount + ")";

    });

}



// =========================
// FAVORITE BUTTON
// =========================

let hearts = document.querySelectorAll(".heart");


for (let i = 0; i < hearts.length; i++) {

    hearts[i].addEventListener("click", function() {

        if (hearts[i].textContent === "♡") {

            hearts[i].textContent = "♥";

        } else {

            hearts[i].textContent = "♡";

        }

    });

}



// =========================
// NEWSLETTER
// =========================

let newsletter = document.querySelector(".newsletter");

if (newsletter) {

    newsletter.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for subscribing to Greenora! 🌿");

    });

}
```
