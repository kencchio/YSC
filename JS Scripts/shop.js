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
    size: [11, 12, 13, 15],
  },
  {
    ifSale: false,
    shoePicture: "SailKhakiWhiteCacao Wow.png",
    brandName: "Nike",
    shoeName: "Cortez Sail Cacao Wow",
    gender: "Women's",
    shoeColor: "Khaki White",
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
    size: [4.5, 7, 7.5, 9],
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

const cardsContainer = document.querySelector(".items-frame");

// Function to set active category button
function setActive(button) {
  const buttons = document.querySelectorAll(".div-wrapper");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  // Get the category from the button's text
  const category = button.querySelector(".text-wrapper").innerText;

  // Call displayCards with the selected category and the currently selected brand
  displayCards(category, getSelectedBrand(), getSelectedSize());
}

// Function to get the selected brand
function getSelectedBrand() {
  const brandOptions = document.querySelectorAll('input[name="brand-options"]');
  for (const option of brandOptions) {
    if (option.checked) {
      return option.id.replace("-option", "").toLowerCase(); // Return the brand name in lowercase
    }
  }
  return "allbrand"; // Default to "all" if none selected
}

// Function to get the selected size
function getSelectedSize() {
  const sizeOptions = document.querySelectorAll('input[name="size-options"]');
  for (const option of sizeOptions) {
    if (option.checked) {
      return option.id.replace("-option", "").toLowerCase(); // Return the size name in lowercase
    }
  }
  return "allsize"; // Default to "all" if none selected
}

// Function to get the selected colors
function getSelectedColors() {
  const colorOptions = document.querySelectorAll('input[type="checkbox"]');
  const selectedColors = [];
  colorOptions.forEach((option) => {
    if (option.checked) {
      selectedColors.push(option.id.replace("color-", "").toLowerCase()); // Get the color name without "color-" prefix
    }
  });
  return selectedColors.length > 0 ? selectedColors : ["allcolor"]; // Return selected colors or "allcolor" if none selected
}

// Function to get the selected price range
function getSelectedPriceRange() {
  const priceOptions = document.querySelectorAll('input[name="price-options"]');
  for (const option of priceOptions) {
    if (option.checked) {
      return option.id; // Return the id of the selected price option
    }
  }
  return "allprice"; // Default to "all" if none selected
}

// Function to display cards based on category and brand
function displayCards(category, brand, size, colors, priceRange) {
  cardsContainer.innerHTML = ""; // Clear the container first

  // Filter the shoeData based on the selected category and brand
  const filteredShoes = shoeData.filter((shoe) => {
    const matchesCategory = category === "ALL" || (category === "MEN’S" && (shoe.gender === "Men's" || shoe.gender === "Unisex")) || (category === "WOMEN’S" && (shoe.gender === "Women's" || shoe.gender === "Unisex")) || (category === "KIDS’" && shoe.gender === "Kid's");

    const matchesBrand = brand === "allbrand" || shoe.brandName.toLowerCase() === brand;

    const matchesSize = size === "allsize" || shoe.size.includes(parseFloat(size.replace("us", "")));

    const matchesColor = colors.includes("allcolor") || colors.some((color) => shoe.shoeColor.toLowerCase().includes(color));

    const price = parseFloat(shoe.originalPrice.replace(/,/g, "")); // Convert price to a number

    let matchesPrice = true; // Default to true
    switch (priceRange) {
      case "lt5k-option":
        matchesPrice = price < 5000;
        break;
      case "5k8k-option":
        matchesPrice = price >= 5001 && price <= 8000;
        break;
      case "8k12k-option":
        matchesPrice = price >= 8001 && price <= 12000;
        break;
      case "gt12k-option":
        matchesPrice = price > 12000;
        break;
      default:
        matchesPrice = true; // If "allprice", include all
    }

    return matchesCategory && matchesBrand && matchesSize && matchesColor && matchesPrice; // Return true if both conditions are met
  });

  // Create and append the filtered cards
  filteredShoes.forEach((shoe) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card-desktop");

    card.innerHTML = `
      <div class='top-group'>
        <div class='picture-and-sale-frame'>
        ${shoe.ifSale ? `<div class='sale-frame'><div class='sale-text'>SALE</div></div>` : ""}
          <div class='picture-frame'>
            <div class='overlap-group'>
              <div class='ellipse'></div>
              <img class='shoe-img' src='/YSC/folder-products/card-pics/${shoe.shoePicture}' />
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
          <div class='text-wrapper-4' id='gender'>${shoe.gender} / <span id='shoe-color'>${shoe.shoeColor}</span></div>
        </div>
        <div class='price-frame'>
          ${shoe.ifSale ? `<div class='text-wrapper-5' id='sale-price'>₱ ${shoe.salePrice}</div>` : ""}
          ${shoe.ifSale ? `<div class='text-wrapper-6' id='original-price-st'>₱ ${shoe.originalPrice}</div>` : `<div class='text-wrapper-6' id='original-price'>₱ ${shoe.originalPrice}</div>`}
        </div>
      </div>
    `;

    cardsContainer.appendChild(card);

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

// Add event listeners to brand radio buttons
const brandOptions = document.querySelectorAll('input[name="brand-options"]');
brandOptions.forEach((option) => {
  option.addEventListener("change", () => {
    // Get the currently active category
    const activeCategoryButton = document.querySelector(".div-wrapper.active");
    const category = activeCategoryButton.querySelector(".text-wrapper").innerText;

    // Call displayCards with the selected category and the selected brand
    displayCards(category, getSelectedBrand(), getSelectedSize(), getSelectedColors(), getSelectedPriceRange());
  });
});

// Add event listeners to size radio buttons
const sizeOptions = document.querySelectorAll('input[name="size-options"]');
sizeOptions.forEach((option) => {
  option.addEventListener("change", () => {
    // Get the currently active category
    const activeCategoryButton = document.querySelector(".div-wrapper.active");
    const category = activeCategoryButton.querySelector(".text-wrapper").innerText;

    // Call displayCards with the selected category, brand, and size
    displayCards(category, getSelectedBrand(), getSelectedSize(), getSelectedColors(), getSelectedPriceRange());
  });
});

// Add event listeners to color checkboxes
const colorOptions = document.querySelectorAll('input[type="checkbox"]');
colorOptions.forEach((option) => {
  option.addEventListener("change", () => {
    // Get the currently active category
    const activeCategoryButton = document.querySelector(".div-wrapper.active");
    const category = activeCategoryButton.querySelector(".text-wrapper").innerText;

    // Call displayCards with the selected category, brand, size, and colors
    displayCards(category, getSelectedBrand(), getSelectedSize(), getSelectedColors(), getSelectedPriceRange());
  });
});

// Add event listeners to price radio buttons
const priceOptions = document.querySelectorAll('input[name="price-options"]');
priceOptions.forEach((option) => {
  option.addEventListener("change", () => {
    // Get the currently active category
    const activeCategoryButton = document.querySelector(".div-wrapper.active");
    const category = activeCategoryButton.querySelector(".text-wrapper").innerText;

    // Call displayCards with the selected category, brand, size, colors, and price range
    displayCards(category, getSelectedBrand(), getSelectedSize(), getSelectedColors(), getSelectedPriceRange());
  });
});

// Initial display of all cards
displayCards("ALL", "allbrand", "allsize", ["allcolor"], "allprice");