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

// Warenkorb rendern:
function renderBasket() {
  let basketField = document.getElementById("render_basket_order");
  basketField.innerHTML = "";

  let dialogBasket = document.getElementById("dialog_content");
  dialogBasket.innerHTML = "";

  for (let x = 0; x < dishes.length; x++) {
    if (dishes[x].amount > 0) {
      basketField.innerHTML += getBasket(x);
      dialogBasket.innerHTML += getDialogBasket(x);
    }
  }
    getSum(); 
}

// Gesamtsumme Warenkorb:
function getSum(){
  let sum = 0;

    for (let i = 0; i < dishes.length; i++) {
      if (dishes[i].amount > 0) {
          sum += dishes[i].newprice;
      }
    }

document.getElementById("sum_container").innerHTML = getSumField(sum);
document.getElementById("dialog_sum_content").innerHTML = getDialogSumField(sum);
}

// Gericht hinzufügen:
function addMenu(dishesIndex) {
  dishes[dishesIndex].amount++;
  dishes[dishesIndex].newprice = dishes[dishesIndex].amount * dishes[dishesIndex].price;

  renderBasket()
  renderSumField()
  renderDialogSumField()
  renderInfoField()
}

// Anzahl reduzieren:
function decreaseAmount(x) {
  if (dishes[x].amount > 1) {
    dishes[x].amount--;
    dishes[x].newprice = dishes[x].amount * dishes[x].price;
  }

  renderBasket();
}

// Anzahl erhöhen:
function increaseAmount(x) {
  dishes[x].amount++;
  dishes[x].newprice = dishes[x].amount * dishes[x].price;

  renderBasket();
}

// Gericht aus Warenkorb löschen:
function deleteFromBasket(x) {
  dishes[x].amount = 0;

  renderBasket()
  renderSumField()
  renderDialogSumField()
  renderInfoField()
}

// Warenkorb komplett leeren:
function deleteBasket(){
for (let deleteIndex = 0; deleteIndex < dishes.length; deleteIndex++) {

  if (dishes[deleteIndex].amount > 0) {
    dishes[deleteIndex].amount = 0;
    }
  }
renderBasket()
renderSumField()
renderDialogSumField()
renderInfoField()
}


// Funktioniert:
function deleteDialogBasket(){
  for (let deleteIndex = 0; deleteIndex < dishes.length; deleteIndex++) {

    if (dishes[deleteIndex].amount > 0) {
      dishes[deleteIndex].amount = 0;
      }
    }
    renderBasket()
    renderInfoField()
    renderSumField()
    renderDialogSumField()
    closeDialog()
}

function renderSumField() {
  let hiddenSum = document.getElementById("render_basket_order").innerHTML;

  if (hiddenSum !== "") {
    document.getElementById("sum_container").classList.remove("d_none");
  } else {
    document.getElementById("sum_container").classList.add("d_none");
  }
}

function renderDialogSumField(){
  let hiddenDialogSum = document.getElementById("dialog_content").innerHTML;

  if (hiddenDialogSum !== "") {
    document.getElementById("dialog_sum_content").classList.remove("d_none");
  } else {
    document.getElementById("dialog_sum_content").classList.add("d_none");
  }
}

function renderInfoField() {
  let hiddenInfo = document.getElementById("render_basket_order").innerHTML;

  if (hiddenInfo == "") {
    document.getElementById("hidden_info_container").classList.remove("d_none");
  } else {
    document.getElementById("hidden_info_container").classList.add("d_none");
  }
}

function showDialog() {
  document.getElementById("body_overlay").classList.remove("d_none");
  document.getElementById("basket_overlay").classList.remove("d_none");
}

function closeDialog() {
  document.getElementById("body_overlay").classList.add("d_none");
}