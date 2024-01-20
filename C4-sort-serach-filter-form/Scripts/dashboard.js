let LSData = JSON.parse(localStorage.getItem("products-list")) || [];
let tbody = document.querySelector("tbody");
let filterDOM = document.getElementById("filter");
let searchDOM = document.getElementById("search");
let sortDOM = document.getElementById("sort");

function renderDOM(data) {
  tbody.innerHTML = null;
  data.forEach(function (el) {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = el.name;

    let price = document.createElement("td");
    price.innerText = el.price;

    let category = document.createElement("td");
    category.innerText = el.category;

    let listed = document.createElement("td");
    listed.innerText = el.listed;

    let brand = document.createElement("td");
    brand.innerText = el.brand;

    let reviews = document.createElement("td");
    reviews.innerText = el.reviews;

    let sell = document.createElement("td");
    sell.innerText = "Sell";
    sell.addEventListener("click", function () {
      let SellLS = JSON.parse(localStorage.getItem("sell-list")) || [];
      SellLS.push(el);
      localStorage.setItem("sell-list", JSON.stringify(SellLS));

      LSData = LSData.filter(function (element) {
        if (element.id != el.id) {
          return true;
        } else {
          return false;
        }
      });
      renderDOM(LSData);
      localStorage.setItem("products-list", JSON.stringify(LSData));
    });

    let returnEl = document.createElement("td");
    returnEl.innerText = "Return";

    tr.append(name, price, category, listed, brand, reviews, sell, returnEl);
    tbody.append(tr);
  });
}

renderDOM(LSData);

// filterDOM.addEventListener("change", function () {
//   let filtered = selectFilter(filterDOM.value, LSData);
//   renderDOM(filtered);
// });

filterDOM.addEventListener("change", function () {
  let filtered;
  if (filterDOM.value === "") {
    filtered = LSData;
  } else {
    filtered = LSData.filter(function (el) {
      if (el.category === filterDOM.value) {
        return true;
      } else {
        return false;
      }
    });
  }
  let searched = filtered.filter(function (el) {
    return el.name.toUpperCase().includes(searchDOM.value.toUpperCase());
  });
  renderDOM(searched);
});

searchDOM.addEventListener("input", function () {
  let filtered;
  if (filterDOM.value === "") {
    filtered = LSData;
  } else {
    filtered = LSData.filter(function (el) {
      if (el.category === filterDOM.value) {
        return true;
      } else {
        return false;
      }
    });
  }
  let searched = filtered.filter(function (el) {
    return el.name.toUpperCase().includes(searchDOM.value.toUpperCase());
  });
  renderDOM(searched);
});

sortDOM.addEventListener("change", function () {
  if (sortDOM.value === "") {
    renderDOM(LSData);
  } else {
    let LSDataCopy = LSData.map(function (el) {
      return el;
    });
    let sorted = LSDataCopy.sort(function (el1, el2) {
      if (sortDOM.value === "High-Low") {
        return el2.price - el1.price;
      } else if (sortDOM.value === "Low-High") {
        return el1.price - el2.price;
      }
    });
    renderDOM(sorted);
  }
});

function selectFilter(word, data) {
  if (word === "") {
    return data;
  } else {
    let filtered = data.filter(function (el) {
      if (el.category === word) {
        return true;
      } else {
        return false;
      }
    });
    return filtered;
  }
}

// "Electronics" -> 1. Sourav 2. I-phone 3. I-pod

// i -> i-phone , i-pod , i-mac(Grocery)(Search from whole data)

// i -> i-phone , i-pod

// i-mac(id:51) -> take data from LS("sell-list")
// data.push(i-mac)
// localStorage.setItem(data);

// LSData.filter()-> if(current id === deleting id ){
// return false;
//}

// localStorage / DOM
