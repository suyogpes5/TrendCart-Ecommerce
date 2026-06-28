const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 1999,
    category: "fashion",
    image: "./assets/images/shoes.jpg"
  },
  {
    id: 2,
    name: "Luxury Watch",
    price: 2999,
    category: "electronics",
    image: "./assets/images/watch.jpg"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 1499,
    category: "electronics",
    image: "./assets/images/headphone.jpg"
  },
  {
    id: 4,
    name: "Hoodie",
    price: 999,
    category: "fashion",
    image: "./assets/images/hoodie.jpg"
  },
  {
    id: 5,
    name: "T-Shirt",
    price: 699,
    category: "fashion",
    image: "./assets/images/tshirt.jpg"
  },
  {
    id: 6,
    name: "Backpack",
    price: 899,
    category: "accessories",
    image: "./assets/images/backpack.jpg"
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 599,
    category: "accessories",
    image: "./assets/images/sunglasses.jpg"
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 1299,
    category: "electronics",
    image: "./assets/images/mouse.jpg"
  }
];


const productContainer = document.querySelector(".product-container");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");


function displayProducts(items) {
  productContainer.innerHTML = "";

  items.forEach((product) => {
    productContainer.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">

        <div class="card-content">
          <h3>${product.name}</h3>

          <div class="rating">
            ⭐⭐⭐⭐⭐
          </div>

          <p>₹${product.price}</p>

          <button onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  });
}


displayProducts(products);


searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);

});



filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const category = button.dataset.category;

        if(category === "all"){
            displayProducts(products);
            return;
        }

        const filtered = products.filter(product =>
            product.category === category
        );

        displayProducts(filtered);

    });

});





