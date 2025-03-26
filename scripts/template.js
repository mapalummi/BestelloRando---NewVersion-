function getDishes(dishesIndex) {
  return `
        <div id="dishes_box">
            <div>
              <p class="dishes_box_headline">${dishes[dishesIndex].name}</p>
              <p class="dishes_box_menu">${dishes[dishesIndex].info}</p>
              <p class="dishes_box_price">${dishes[dishesIndex].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img onclick="addMenu(${[dishesIndex]})" class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
        `;
}

function getSideDishes(sideDishesindex) {
  return `<div id="dishes_box">
            <div>
              <p class="dishes_box_headline">${sideDishes[sideDishesindex].name}</p>
              <p class="dishes_box_price">${sideDishes[sideDishesindex].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img onclick="addSideMenu(${[sideDishesindex]})" class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
        `;
}

function getBasket(x) {
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

// NEU - weiter anpassen!!
// function getSecondBasket(i) {
//   return `<div id="basket_second_order_content${[i]}" class="basket_second_order">
//                 <p class="dishes_box_headline">${sideDishes[i].name}</p>
//               <div class="order_options">
//                 <button onclick="decreaseAmount(${[i]})" class="minus_btn">
//                   <img src="./Assets/icons/icons8-minus-weiß.png" alt="">
//                 </button>
//                 <p>${sideDishes[i].amount}</p>
//                   <button onclick="increaseAmount(${[i]})" class="plus_btn">
//                     <img src="./Assets/icons/icons8-plus-weiß.png" alt="">
//                   </button>
//                 <p>${sideDishes[i].newprice.toFixed(2)} €</p>
//                   <button onclick="deleteFromBasket(${[i]})" class="delete_btn">
//                     <img src="./Assets/icons/icons8-müll-white.png" alt="">
//                   </button>
//               </div>
//             </div>
//           `;
// }






function getDialogBasket(x) {
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

function getSumField(sum) {
  return `<span class="sum_row"><p>Zwischensumme:</p><p>${sum.toFixed(2)} €</p></span>
            <span class="sum_row"><p>Lieferkosten:</p><p>2,00 €</p></span>
            <span class="sum_row"><p>Gesamt:</p><p>${(sum += 2).toFixed(2)}€</p></span>
            <button onclick="deleteBasket()" class="basket_button2" role="button">Bestellen</button>
          `;
}

function getDialogSumField(sum) {
  return `<span class="sum_row"><p>Zwischensumme:</p><p>${sum.toFixed(2)} €</p></span>
            <span class="sum_row"><p>Lieferkosten:</p><p>2,00 €</p></span>
            <span class="sum_row"><p>Gesamt:</p><p>${(sum += 2).toFixed(2)}€</p></span>
            <button onclick="deleteDialogBasket()" class="basket_button2" role="button">Bestellen</button>
          `;
}

function getButtonSum(sum) {
  return `<p>Warenkorb (${(sum += 2).toFixed(2)} €)</p>
          `;
}
