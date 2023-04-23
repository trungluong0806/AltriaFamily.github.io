let no_item = parseInt(localStorage.getItem('number_of_items_in_cart'));

const add_to_cart_buttons = document.querySelectorAll(".add_to_cart_button")
const cart_item = document.getElementById("cart_item")

if (!no_item) {
    no_item = 0
}


for (let i=0; i<add_to_cart_buttons.length; i++){
    add_to_cart_buttons[i].addEventListener("click", function(){
        no_item = no_item+1;
        localStorage.setItem('number_of_items_in_cart',no_item)
        cart_item.textContent=no_item;
    })
}

cart_item.textContent=no_item;