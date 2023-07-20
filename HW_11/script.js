"use strict";

const dataProducts = JSON.parse(data);
console.log(dataProducts);

const productsCardsEl = document.querySelector(".products__cards");
productsCardsEl.innerHTML = getProductsList()
  .map((product) => renderProduct(product))
  .join("");

function renderProduct(data) {
  return `
  <div class="products__card">
  <div class="product__img">
      <img src="${data.img}" alt="${data.name}">
      <div class="product__add">
          <button class="btn__add data-id="${data.id}">
              <img src="img/product_add_img" alt="">
              Add to Cart
          </button>
      </div>
  </div>
  <div class="products__info">
      <h2>${data.name}</h2>
      <p> ${data.description}</p>
      <h3>${data.price} руб.</h3>
  </div>
</div>
  `;
}
