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