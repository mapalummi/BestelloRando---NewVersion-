function init() {
  renderInfoField();
  renderMainDishes();
  renderSideDishes();
  
}

// Gerichte rendern:
function renderMainDishes() {
  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
    document.getElementById("render_dishes").innerHTML += getDishes(dishesIndex);
  }
}

function renderSideDishes() {
  for (let sideDishesindex = 0; sideDishesindex < sideDishes.length; sideDishesindex++) {
    document.getElementById("render_side_dishes").innerHTML += getSideDishes(sideDishesindex);
  }
}

// Warenkörbe rendern:
function renderBasket() {
  document.getElementById("render_basket_order").innerHTML = "";
  document.getElementById("basket_dialog").innerHTML = "";

  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    document.getElementById("render_basket_order").innerHTML += getBasket(basketIndex);
    // document.getElementById("basket_dialog").innerHTML += getDialogBasket(basketIndex);
  }
}







// Menü hinzufügen zum Warenkorb
function addMenu(dishesIndex) {

     if (basket == "") {
      basket.push(dishes[dishesIndex])
      console.log('Wird zum 1. mal hinzugefügt');
      console.log(basket);
       
   } else {
      basket[dishesIndex].amount++
       console.log('Amount wird erhöht');
       console.log(basket);   
   }
     renderBasket();
   }
 





function renderOrderSumField() {
  let hiddenSum = document.getElementById("render_basket_order").innerHTML;

  if (hiddenSum !== "") {
    document.getElementById("sum_container").classList.remove("d_none");
  } else {
    document.getElementById("sum_container").classList.add("d_none");
  }
}

function renderInfoField() {
  let hiddenInfo = document.getElementById("render_basket_order").innerHTML;

  if (hiddenInfo !== "") {
    document.getElementById("hidden_info_container").classList.add("d_none");
  } else {
    document.getElementById("hidden_info_container").classList.remove("d_none");
  }
}

function showDialog() {
  document.getElementById("body_overlay").classList.remove("d_none");
  document.getElementById("basket_overlay").classList.remove("d_none");
}

function closeDialog(){
  document.getElementById("body_overlay").classList.add("d_none");
}