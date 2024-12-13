// SearchBar Functionalities
const searchIconBtn = document.getElementById("search-icon-btn-l");
const searchBar = document.getElementById("search-bar");
const closeSearchBtn = document.getElementById("close-search");
const searchBoxContainer = document.querySelector(".search-box-l");
const searchInput = document.getElementById("search-input");

let timeoutId;

searchIconBtn.addEventListener("click", function () {
  // Clear the input if it was previously closed with text
  if (searchInput.value.trim() === "") {
    searchBar.style.display = "flex";
    searchInput.focus();
    startTimeout(); // Start timeout when the search bar is opened
  } else {
    // If there is text, clear it and then show the search bar
    searchInput.value = "";
    searchBar.style.display = "flex";
    searchInput.focus();
    startTimeout(); // Start timeout when the search bar is opened
  }
});

// Close the search bar when the close button is clicked
closeSearchBtn.addEventListener("click", function () {
  searchBar.style.display = "none";
  clearTimeout(timeoutId); // Clear timeout when closed manually
});

// Close the search bar when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInside = searchBoxContainer.contains(event.target);
  if (!isClickInside) {
    searchBar.style.display = "none";
    clearTimeout(timeoutId); // Clear timeout when closed manually
  }
});

// Reset the timeout whenever the user types in the input
searchInput.addEventListener("input", function () {
  clearTimeout(timeoutId); // Clear the existing timeout
  startTimeout(); // Start a new timeout
});

// Function to start the timeout
function startTimeout() {
  timeoutId = setTimeout(function () {
    if (searchInput.value.trim() === "") {
      // Check if the input is empty
      searchBar.style.display = "none"; // Close the search bar if the input is empty
    }
  }, 5000); // Set the duration (5000 ms = 5 seconds)
}

// SEARCHING
const shoes = [
  {
    ifSale: true,
    shoePicture: "/path/to/shoe1.jpg",
    brandName: "Nike",
    shoeName: "Air Max 270",
    gender: "Men",
    shoeColor: "Black",
    originalPrice: 150,
    salePrice: 120,
    size: 10,
  },
  {
    ifSale: false,
    shoePicture: "/path/to/shoe2.jpg",
    brandName: "Adidas",
    shoeName: "Ultraboost",
    gender: "Women",
    shoeColor: "White",
    originalPrice: 180,
    salePrice: 180,
    size: 8,
  },
  // Add more shoe objects as needed
];

// Function to filter shoes based on search input
function searchShoes(query) {
  // Convert the query to lowercase for case-insensitive search
  const lowerCaseQuery = query.toLowerCase();

  // Filter the shoes array based on the search query
  const filteredShoes = shoes.filter((shoe) => {
    return (
      shoe.brandName.toLowerCase().includes(lowerCaseQuery) ||
      shoe.shoeName.toLowerCase().includes(lowerCaseQuery) ||
      shoe.shoeColor.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return filteredShoes;
}

// Display the search results
function displaySearchResults(results) {
  const resultsContainer = document.getElementById("search-results"); // Make sure to create this element in your HTML
  resultsContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach((shoe) => {
    const shoeElement = document.createElement("div");
    shoeElement.classList.add("shoe-item");
    shoeElement.innerHTML = `
        <img src="${shoe.shoePicture}" alt="${shoe.shoeName}" />
        <h3>${shoe.shoeName} (${shoe.brandName})</h3>
        <p>Color: ${shoe.shoeColor}</p>
        <p>Size: ${shoe.size}</p>
        <p>Price: ${shoe.ifSale ? shoe.salePrice : shoe.originalPrice} USD</p>
      `;
    resultsContainer.appendChild(shoeElement);
  });
}

// Event listener for input in the search bar
searchInput.addEventListener("input", function () {
  clearTimeout(timeoutId); // Clear the existing timeout
  startTimeout(); // Start a new timeout

  const query = searchInput.value.trim();
  if (query) {
    const results = searchShoes(query);
    displaySearchResults(results);
  } else {
    // Clear results if the input is empty
    document.getElementById("search-results").innerHTML = "";
  }
});

// Event listener for keydown to handle Enter key
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission behavior
    const query = searchInput.value.trim();
    if (query) {
      const results = searchShoes(query);
      displaySearchResults(results);
    }
  }
});
