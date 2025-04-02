function saveToLocalStorage() {
    localStorage.setItem("dishes", JSON.stringify(dishes));
  }

  function getFromLocalStorage() {
    let myDishes = JSON.parse(localStorage.getItem("dishes"));
  
    if (myDishes != null) {
      dishes = myDishes;
    }
  }



  // Neue Funktionen:
  function saveStateTolocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  function getStateFromLocalStorage(key){
    return localStorage.getItem(key);
  }