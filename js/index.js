// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGP) => {
    if (state.greenPeppers) {
      oneGP.style.visibility = "visible";
    } else {
      oneGP.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">
  let sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.className = "sauce";
  } else {
    sauce.className = "sauce sauce-white";
  }
  //console.log(sauce);
  //state.whiteSauce = !state.whiteSauce
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.className = "crust";
  } else {
    crust.className = "crust crust-gluten-free";
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.onclick = function (e) {
      if (e.target.className.includes("active")) {
        e.target.className = e.target.className.replace("active", "");
      } else {
        e.target.className += "active";
      }
    };
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //console.log('render price',state)

  console.log(document.querySelector(".panel .price"));
}

let newPricesHTML = `
      <h2>Your pizza's price</h2>

      <b>$15 cheese pizza</b>
      <strong>$21</strong>`;

document.querySelector(`.panel.price`).innerHTML = newPricesHTML;

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderGreenPeppers();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
});
