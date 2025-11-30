document.getElementById('search-input').addEventListener('input', function(event) {
  let searchQuery = event.target.value.toLowerCase();  // Get the search query in lowercase
  let productCards = document.querySelectorAll('.product-card');  // Select all product cards

  productCards.forEach(function(card) {
      let productName = card.querySelector('h3').textContent.toLowerCase();  // Get product name
      
      if (searchQuery === "" || productName.includes(searchQuery)) {
          card.style.display = 'block'; // Show matching product
          found = true;
      } else {
          card.style.display = 'none'; // Hide non-matching product
      }
  });
});

  // If no products match, show alert
 // if (!found) {
      //alert("No products found!");
  //}
//});
