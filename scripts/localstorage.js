function saveToLocalStorage() {
    localStorage.setItem("dishes", JSON.stringify(dishes));
  }

  function getFromLocalStorage() {
    let myDishes = JSON.parse(localStorage.getItem("dishes"));
  
    if (myDishes != null) {
      dishes = myDishes;
    }
  }