const shoeData = [
  {
    ifSale: true,
    shoePicture: "Air Jordan 1 Low Quai 54 Off-NoirSummit White .png",
    brandName: "Nike",
    shoeName: "Air Jordan 1 Low Quai 54",
    gender: "Men's",
    shoeColor: "Summit White",
    originalPrice: "7,895",
    salePrice: "5,529",
    size: [5, 7, 8, 10],
  },
  {
    ifSale: false,
    shoePicture: "Air Jordan 1 Low White Royal Blue.png",
    brandName: "Nike",
    shoeName: "Air Jordan 1 Low",
    gender: "Men's",
    shoeColor: "Alternate Royal Blue",
    originalPrice: "7,895",
    salePrice: "",
    size: [6, 7.5, 9, 10.5],
  },
  {
    ifSale: false,
    shoePicture: "air jordan 1 mid se asw black white.png",
    brandName: "Nike",
    shoeName: "Air Jordan 1 Mid SE ASW",
    gender: "Men's",
    shoeColor: "Black White",
    originalPrice: "11,385",
    salePrice: "",
    size: [8, 8.5, 9, 12],
  },
  {
    ifSale: false,
    shoePicture: "air jordan 1 retro black green glow wolf grey.png",
    brandName: "Nike",
    shoeName: "Air Jordan 1 Retro",
    gender: "Men's",
    shoeColor: "Black Green Glow Wolf Grey",
    originalPrice: "9,895",
    salePrice: "",
    size: [4.5, 7, 7.5, 9],
  },
  {
    ifSale: false,
    shoePicture: "SailKhakiWhiteCacao Wow.png",
    brandName: "Nike",
    shoeName: "Cortez",
    gender: "Women's",
    shoeColor: "Sail Cacao Wow",
    originalPrice: "6,500",
    salePrice: "",
    size: [7, 8, 9, 10.5],
  },
  {
    ifSale: true,
    shoePicture: "Nike Dunk Low Next Nature Brown Barouqe.png",
    brandName: "Nike",
    shoeName: "Dunk Low Next Nature",
    gender: "Men's",
    shoeColor: "Brown Baroque",
    originalPrice: "7,399",
    salePrice: "4,395",
    size: [7, 8, 8.5, 14],
  },
  {
    ifSale: false,
    shoePicture: "nike dunk low retro white court purple.png",
    brandName: "Nike",
    shoeName: "Dunk Low Retro",
    gender: "Men's",
    shoeColor: "White Court Purple",
    originalPrice: "12,000",
    salePrice: "",
    size: [8, 9, 10, 10.5],
  },
  {
    ifSale: true,
    shoePicture: "Women Nike Dunk Low Retro Gorge Green Midnight Navy(1).png",
    brandName: "Nike",
    shoeName: "Dunk Low Retro",
    gender: "Women's",
    shoeColor: "Gorge Green Midnight Navy",
    originalPrice: "10,299",
    salePrice: "7,399",
    size: [7.5, 8, 9, 11],
  },
  {
    ifSale: true,
    shoePicture: "Women Nike Dunk Low Rose Whisper.png",
    brandName: "Nike",
    shoeName: "Dunk Low",
    gender: "Women's",
    shoeColor: "Rose Whisper",
    originalPrice: "10,799",
    salePrice: "7,399",
    size: [11, 12, 13, 15],
  },
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
    brandName: "New Balance",
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
    brandName: "Onitsuka Tiger",
    shoeName: "Tokuten",
    gender: "Men's",
    shoeColor: "Sail Cacao Wow",
    originalPrice: "10,799",
    salePrice: "",
    size: [8.5, 9, 10, 11.5],
  },
];

function setActive(button) {
  const buttons = document.querySelectorAll(".div-wrapper");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

const cardsContainer = document.querySelector(".items-frame");

// let shoeData = [ifSale, shoePicture, brandName, shoeName, gender, shoeColor, originalPrice, salePrice, size];
let shoeCards = [];

function display() {
  cardsContainer.innerHTML = "";
  for (shoe in shoeData) {
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
    cardsContainer.appendChild(card);
  }
}

const likeButton = card.querySelector(".like-button");
likeButton.addEventListener("click", () => {
  if (likeButton.src.includes("/YSC/folder-icons/heart.svg")) {
    likeButton.src = "/YSC/folder-icons/heart-fill.svg";
  } else {
    likeButton.src = "/YSC/folder-icons/heart.svg";
  }
});

cardsContainer.appendChild(card);

console.log(shoeCards);
