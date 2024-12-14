import shoeData from "YSC/JS Scripts/shop.js";

const container = document.querySelector(".new-arrival-cards");

function display() {
  container.innerHTML = ""; // Clear the container

  // Set the starting index to 6
  const startIndex = 6;

  // Get 4 items starting from index 6
  const shoesToDisplay = shoeData.slice(startIndex, startIndex + 4);

  for (const shoe of shoesToDisplay) {
    // Use 'of' to iterate over the array
    const card = document.createElement("div");
    card.setAttribute("class", "card-desktop");

    // Destructure the shoe object for easier access to properties
    const {
      ifSale,
      shoePicture,
      brandName,
      shoeName,
      gender,
      shoeColor,
      originalPrice,
      salePrice,
    } = shoe;

    card.innerHTML = `
        <div class='top-group'>
          <div class='picture-and-sale-frame'>
          ${
            ifSale
              ? `<div class='sale-frame'><div class='sale-text'>SALE</div></div>`
              : ""
          }
            <div class='picture-frame'>
              <div class='overlap-group'>
                <div class='ellipse'></div>
                <img class='shoe-img' src='/YSC/folder-products/card-pics/${shoePicture}' />
              </div>
            </div>
          </div>
        </div>
        <div class='bottom-group'>
          <div class='text-wrapper-2' id='brand-name'>${brandName}</div>
          <div class='frame-2'>
            <div class='frame-3'>
              <div class='text-wrapper-3' id='shoe-name'>${shoeName}</div>
              <img class='element-outlined-action like-button' src='/YSC/folder-icons/heart.svg' id='like-button' />
            </div>
            <div class='text-wrapper-4' id='gender'>${gender} / <span id='shoe-color'>${shoeColor}</span></div>
          </div>
          <div class='price-frame'>
            ${
              ifSale
                ? `<div class='text-wrapper-5' id='sale-price'>₱ ${salePrice}</div>`
                : ""
            }
            <div class='text-wrapper-6' id='original-price'>₱ ${originalPrice}</div>
          </div>
        </div>
      `;
    container.appendChild(card); // Append the card to the container
  }
}

// Call the display function to render the cards
display();

console.log(shoeData.length);
