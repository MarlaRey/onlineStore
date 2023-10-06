// Opret en funktion til at bygge knapper baseret på kategorier
  
  export function buildCategoryButtons(categories) {
    const categoriesNav = document.getElementById('categoriesNav');
  
    categories.forEach((categoryName) => {
      const button = document.createElement('button');
      button.textContent = categoryName;
  
      // Opret en string template for knappen med en onclick-hændelsesattribut
      const buttonTemplate = `
        <button onclick="window._myEventListners.handleCategoryClick('${categoryName}')">
          ${categoryName}
        
        </button>
      `;
  
      // Tilføj knappen ved at indsætte HTML fra string-templaten
      categoriesNav.innerHTML += buttonTemplate;
    });
  }



  
export function buildArticles(products) {
    // find DOM element
    let myApp = document.getElementById('productDisplay');
  
    // clear DOM element
    myApp.innerHTML = '';
  
    let myUserHtml = '';
  
    // Tilføj overskrift
    myUserHtml += '<h2>Featured Products</h2>';
  
    // Løkke gennem hvert produkt i products-arrayet
    products.forEach((product) => {
      const { id, title, thumbnail, price } = product; // Få data fra produktet
  
      // Opret HTML for hvert produkt og tilføj det til myUserHtml
      myUserHtml += `
        <article class="productCard">
          <h3>${title}</h3>
          <img src="${thumbnail}" alt="" onclick="window._myEventListners.handleThumbnailClick('${id}')"> <!-- Tilføj onclick-hændelse for thumbnail -->
          <p>Nice Price: ${price} kr.</p>
        </article>
      `;
    });
  
    // Opdater myApp med det genererede HTML
    myApp.innerHTML = myUserHtml;
  }
  
  export function buildProductView(product, categoryName) {
    console.log(categoryName);
    // find DOM element
    let myApp = document.getElementById('productDisplay');
  
    // clear DOM element
    myApp.innerHTML = '';
  
    // Opret elementer til at vise produktet
    const productContainer = document.createElement('div');
  
    // Opret HTML for produktet ved hjælp af en templatestring
    productContainer.innerHTML = `
      <h3>${product.title}</h3>
      ${product.images.slice(0, 2).map((image, index) => `
        <img src="${image}" alt="Image ${index + 1}">
      `).join('')}
      <p>${product.description}</p>
      <p>Price: ${product.price} kr.</p>
      <button onclick="window._myEventListners.handleCategoryClick('${categoryName}')">
          ${categoryName}
        
        </button>

    `;
    
    // Tilføj produktcontaineren til myApp
    myApp.appendChild(productContainer);
    
}






  