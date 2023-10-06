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
  

  
