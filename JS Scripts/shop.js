function setActive(button) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".div-wrapper");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to the clicked button
  button.classList.add("active");
}

const cardsContainer = document.querySelector(".items-frame");

let info1 = [];

// let shoeData = [ifSale, shoePicture, brandName, shoeName, gender, shoeColor, originalPrice, salePrice, size];
// let shoeCard = [];

function createCard(ifSale, shoePicture, brandName, shoeName, gender, shoeColor, originalPrice, salePrice, size) {
  const card = document.createElement("div");
  card.setAttribute("class", "card-desktop");

  card.innerHTML = `
    <div class='top-group'>
      <div class='picture-and-sale-frame'>
      ${ifSale ? `<div class='sale-frame'><div class='sale-text'>SALE</div></div>` : ""}
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
        ${ifSale ? `<div class='text-wrapper-5' id='sale-price'>₱ ${salePrice}</div>` : ""}
        ${ifSale ? `<div class='text-wrapper-6' id='original-price-st'>₱ ${originalPrice}</div>` : `<div class='text-wrapper-6' id='original-price'>₱ ${originalPrice}</div>`}
      </div>
    </div>
  `;

  const likeButton = card.querySelector(".like-button");
  likeButton.addEventListener("click", () => {
    if (likeButton.src.includes("/YSC/folder-icons/heart.svg")) {
      likeButton.src = "/YSC/folder-icons/heart-fill.svg";
    } else {
      likeButton.src = "/YSC/folder-icons/heart.svg";
    }
  });

  // shoeCard.push();
  cardsContainer.appendChild(card);
}

createCard(true, "Air Jordan 1 Low Quai 54 Off-NoirSummit White .png", "Nike", "Air Jordan 1 Low Quai 54", "Men's", "Summit White", "7,895", "5,529", [5, 7, 8, 10]);
createCard(false, "Air Jordan 1 Low White Royal Blue.png", "Nike", "Air Jordan 1 Low", "Men's", "Alternate Royal Blue", "7,895", "", [6, 7.5, 9, 10.5]);
createCard(false, "air jordan 1 mid se asw black white.png", "Nike", "Air Jordan 1 Mid SE ASW", "Men's", "Black White", "11,385", "", [8, 8.5, 9, 12]);
createCard(false, "air jordan 1 retro black green glow wolf grey.png", "Nike", "Air Jordan 1 Retro", "Men's", "Black Green Glow Wolf Grey", "9,895", "", [4.5, 7, 7.5, 9]);
createCard(false, "SailKhakiWhiteCacao Wow.png", "Nike", "Cortez", "Women's", "Sail Cacao Wow", "6,500", "", [7, 8, 9, 10.5]);
createCard(true, "Nike Dunk Low Next Nature Brown Barouqe.png", "Nike", "Dunk Low Next Nature", "Men's", "Brown Baroque", "7,399", "4,395", [7, 8, 8.5, 14]);
createCard(false, "nike dunk low retro white court purple.png", "Nike", "Dunk Low Retro", "Men's", "White Court Purple", "12,000", "", [8, 9, 10, 10.5]);
createCard(true, "Women Nike Dunk Low Retro Gorge Green Midnight Navy(1).png", "Nike", "Dunk Low Retro", "Women's", "Gorge Green Midnight Navy", "10,299", "7,399", [7.5, 8, 9, 11]);
createCard(true, "Women Nike Dunk Low Rose Whisper.png", "Nike", "Dunk Low", "Women's", "Rose Whisper", "10,799", "7,399", [11, 12, 13, 15]);
createCard(false, "nike dunk low sp university red.png", "Nike", "Dunk Low SP", "Men's", "White and University Red", "5,495", "", [6, 7, 8, 9]);
createCard(false, "Nike Mens Air Zoom Gt Cut Academy Ep.png", "Nike", "G.T. Cut Academy", "Men's", "White Sport Red Obsidian", "4,995", "", [4, 8, 9, 10]);
createCard(false, "new balance mr530ka steel grey.png", "New Balance", "530", "Unisex", "Steel Grey", "6,295", "", [9, 10, 11, 13]);
createCard(false, "Onitsuka Tiger Tokuten White Moss Green (1).png", "Onitsuka Tiger", "Tokuten", "Men's", "Sail Cacao Wow", "10,799", "", [8.5, 9, 10, 11.5]);
