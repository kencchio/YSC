const shoeData = [
  {
    ifSale: false,
    shoePicture: "nike dunk low sp university red.png",
    brandName: "Nike",
    shoeName: "Dunk Low SP",
    gender: "Men's",
    shoeColor: "White and University Red",
    originalPrice: "5,495",
    salePrice: "",
    size: [6, 7, 8, 9],
  },
  {
    ifSale: false,
    shoePicture: "Nike Mens Air Zoom Gt Cut Academy Ep.png",
    brandName: "Nike",
    shoeName: "G.T. Cut Academy",
    gender: "Men's",
    shoeColor: "White Sport Red Obsidian",
    originalPrice: "4,995",
    salePrice: "",
    size: [4, 8, 9, 10],
  },
  {
    ifSale: false,
    shoePicture: "new balance mr530ka steel grey.png",
    brandName: "NewBalance",
    shoeName: "530",
    gender: "Unisex",
    shoeColor: "Steel Grey",
    originalPrice: "6,295",
    salePrice: "",
    size: [9, 10, 11, 13],
  },
  {
    ifSale: false,
    shoePicture: "Onitsuka Tiger Tokuten White Moss Green (1).png",
    brandName: "OnitsukaTiger",
    shoeName: "Tokuten",
    gender: "Men's",
    shoeColor: "White Moss Green",
    originalPrice: "10,799",
    salePrice: "",
    size: [8.5, 9, 10, 11.5],
  },
];

const container = document.querySelector(".new-arrival-cards");

function display() {
  // Clear the container before displaying new cards
  container.innerHTML = "";

  // Iterate over each shoe in shoeData
  shoeData.forEach((shoe) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card-desktop");

    card.innerHTML = `
        <div class='top-group'>
          <div class='picture-and-sale-frame'>
          ${
            shoe.ifSale
              ? `<div class='sale-frame'><div class='sale-text'>SALE</div></div>`
              : ""
          }
            <div class='picture-frame'>
              <div class='overlap-group'>
                <div class='ellipse'></div>
                <img class='shoe-img' src='/YSC/folder-products/card-pics/${
                  shoe.shoePicture
                }' />
              </div>
            </div>
          </div>
        </div>
        <div class='bottom-group'>
          <div class='text-wrapper-2' id='brand-name'>${shoe.brandName}</div>
          <div class='frame-2'>
            <div class='frame-3'>
              <div class='text-wrapper-3' id='shoe-name'>${shoe.shoeName}</div>
              <img class='element-outlined-action like-button' src='/YSC/folder-icons/heart.svg' id='like-button' />
            </div>
            <div class='text-wrapper-4' id='gender'>${
              shoe.gender
            } / <span id='shoe-color'>${shoe.shoeColor}</span></div>
          </div>
          <div class='price-frame'>
            ${
              shoe.ifSale
                ? `<div class='text-wrapper-5' id='sale-price'>₱ ${shoe.salePrice}</div>`
                : ""
            }
            <div class='text-wrapper-6' id='original-price'>₱ ${
              shoe.originalPrice
            }</div>
          </div>
        </div>
      `;

    container.appendChild(card); // Append the card to the container

    // Add event listener for the like button
    const likeButton = card.querySelector(".like-button");
    likeButton.addEventListener("click", () => {
      if (likeButton.src.includes("/YSC/folder-icons/heart.svg")) {
        likeButton.src = "/YSC/folder-icons/heart-fill.svg";
      } else {
        likeButton.src = "/YSC/folder-icons/heart.svg";
      }
    });
  });
}

// Call the display function to render the cards
display();
