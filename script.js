const products = [
    {
      id: 1,
      name: "Samsung Galaxy A52",
      price: 220,
      location: "Lagos, Nigeria",
      image: "https://via.placeholder.com/400x400?text=Samsung+Galaxy+A52"
    },
    {
      id: 2,
      name: "Nike Air Max",
      price: 150,
      location: "Abuja, Nigeria",
      image: "https://via.placeholder.com/400x400?text=Nike+Air+Max"
    },
    {
      id: 3,
      name: "HP Laptop 15.6”",
      price: 430,
      location: "Port Harcourt, Nigeria",
      image: "https://via.placeholder.com/400x400?text=HP+Laptop+15.6"
    }
  ];
  
  function renderProducts(productArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    productArray.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-details">
          <h3>${product.name}</h3>
          <p class="price">$${product.price}</p>
          <p class="location">${product.location}</p>
        </div>
      `;
      productList.appendChild(div);
    });
  }
  
  document.getElementById("search").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.location.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });
  
  renderProducts(products);
  