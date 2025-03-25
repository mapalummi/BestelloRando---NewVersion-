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


// TEST:
function renderTestBasket() {
  document.getElementById("render_basket_order").innerHTML = "";

  
  for (let x = 0; x < dishes.length; x++) {
    if (dishes[x].amount > 0) {
      document.getElementById("render_basket_order").innerHTML += getTestBasket(x);
    }
  }
}


function addMenu(dishesIndex) {
  dishes[dishesIndex].amount++
  dishes[dishesIndex].newprice = dishes[dishesIndex].amount * dishes[dishesIndex].price;

  renderTestBasket();
}


function decreaseAmount(x) {
  if (dishes[x].amount > 1) {
    dishes[x].amount--
    dishes[x].newprice = dishes[x].amount * dishes[x].price;
  }
  
  renderTestBasket();
}


function increaseAmount(x) {
  dishes[x].amount++
  dishes[x].newprice = dishes[x].amount * dishes[x].price;
   
  renderTestBasket();
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

function closeDialog() {
  document.getElementById("body_overlay").classList.add("d_none");
}







// function addMenu(dishesIndex) {
//   let index = dishes.indexOf(dishes[dishesIndex]);
//   console.log(index);
  
//   dishes[dishesIndex].amount++
//   console.log(dishes);
  

//   if (basket == "" || index === -1) {
//     basket.push(dishes[dishesIndex]);
//     console.log("Wird neu hinzugefügt");
//     console.log(basket);
    
//   } else {

//     basket[index].amount++
//     console.log("Amount wird erhöht");
//     console.log(basket);
//   }

//   renderBasket();
// }