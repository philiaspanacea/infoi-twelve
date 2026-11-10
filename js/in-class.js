if (!localStorage.getItem("cart")){
    localStorage.setItem("cart", "[]")
};

const store = [
    "Apples", "Shoes", "Lemons", "Keyboard", "Lotion"
]

store.forEach((itm, idx) =>{ 
    const ele = document.createElement("div");
    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.addEventListener("click", () => addToCart(idx))
    const name = document.createElement("h3");
    name.innerHTML = itm;
    ele.appendChild(name);
    ele.appendChild(button);
    wrapper.appendChild(ele);
})

const addToCart = (idx) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(store[idx])
    localStorage.setItem("cart", JSON.stringify(cart))
    writeDisplay();
    displayCart();
}

const removeFromCart = (idx) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(idx, 1);
    localStorage.setItem("cart", JSON.stringify(cart))
    writeDisplay();
    displayCart();
}

function writeDisplay(){
    document.getElementById('display').innerHTML = "Cart: "+ JSON.parse(localStorage.getItem("cart")).length
}

function displayCart(){
    const cart = JSON.parse(localStorage.getItem("cart"));
    document.getElementById("cart").innerHTML = " ";


    cart.forEach((itm, idx) => {
    const ele = document.createElement("div");
    const button = document.createElement("button");
    button.innerHTML = "Remove from Cart";
    button.addEventListener("click", () => removeFromCart(idx))
    const name = document.createElement("h3");
    name.innerHTML = itm;
    ele.appendChild(name);
    ele.appendChild(button);
    document.getElementById("cart").appendChild(ele);
    })
}

writeDisplay()
displayCart()

// const cart = JSON.parse(localStorage.getItem("cart"));
// // console.log(JSON.parse(cart));
// cart.push("apples")

// localStorage.setItem("cart", JSON.stringify(cart))

// localStorage.removeItem("cart") // <-- removes the entire attribute, technically both the .getItem & .setItem