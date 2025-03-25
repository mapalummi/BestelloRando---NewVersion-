function getDishes(dishesIndex){
    return `
        <div id="dishes_box" onclick="addMenu(${[dishesIndex]})">
            <div>
              <p class="dishes_box_headline">${dishes[dishesIndex].name}</p>
              <p class="dishes_box_menu">${dishes[dishesIndex].info}</p>
              <p class="dishes_box_price">${dishes[dishesIndex].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
    `;
}


function getSideDishes(sideDishesindex){
return `<div id="dishes_box" onclick="addMenu()">
            <div>
              <p class="dishes_box_headline">${sideDishes[sideDishesindex].name}</p>
              <p class="dishes_box_price">${sideDishes[sideDishesindex].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
    `;
}


function getBasket(basketIndex){
    return `<div id="basket_order_content${[basketIndex]}" class="basket_order">
              <p class="dishes_box_headline">${basket[basketIndex].name}</p>
              <div class="order_options">
              <button onclick="decreaseAmount(${[basketIndex]})" class="minus_btn">
              <img src="./Assets/icons/icons8-minus-weiß.png" alt="">
              </button>
              <p>${basket[basketIndex].amount}</p>
              <button onclick="increaseAmount(${[basketIndex]})" class="plus_btn">
              <img src="./Assets/icons/icons8-plus-weiß.png" alt="">
              </button>
              <p>${basket[basketIndex].price.toFixed(2)} €</p>
              <button onclick="deleteFromBasket(${[basketIndex]})" class="delete_btn">
              <img src="./Assets/icons/icons8-müll-white.png" alt="">
              </button>
              </div>
              </div>
            `;
}



// TEST:
function getTestBasket(x){
  return `<div id="basket_order_content${[x]}" class="basket_order">
            <p class="dishes_box_headline">${dishes[x].name}</p>
            <div class="order_options">
            <button onclick="decreaseAmount(${[x]})" class="minus_btn">
            <img src="./Assets/icons/icons8-minus-weiß.png" alt="">
            </button>
            <p>${dishes[x].amount}</p>
            <button onclick="increaseAmount(${[x]})" class="plus_btn">
            <img src="./Assets/icons/icons8-plus-weiß.png" alt="">
            </button>
            <p>${dishes[x].newprice.toFixed(2)} €</p>
            <button onclick="deleteFromBasket(${[x]})" class="delete_btn">
            <img src="./Assets/icons/icons8-müll-white.png" alt="">
            </button>
            </div>
            </div>
          `;
}





// function getDialogBasket(basketIndex){
//   return `<div id="basket_order_content${[basketIndex]}" class="basket_order">
//             <p class="dishes_box_headline">${basket[basketIndex].name}</p>
//             <div class="order_options">
//             <button onclick="decreaseAmount(${[basketIndex]})" class="minus_btn">
//             <img src="./Assets/icons/icons8-minus-weiß.png" alt="">
//             </button>
//             <p>${basket[basketIndex].amount}</p>
//             <button onclick="increaseAmount(${[basketIndex]})" class="plus_btn">
//             <img src="./Assets/icons/icons8-plus-weiß.png" alt="">
//             </button>
//             <p>${basket[basketIndex].price.toFixed(2)} €</p>
//             <button onclick="deleteFromBasket(${[basketIndex]})" class="delete_btn">
//             <img src="./Assets/icons/icons8-müll-white.png" alt="">
//             </button>
//             </div>
//             </div>
//           `;
// }