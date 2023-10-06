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
  
  
export function buildProductView(product) {
    // find DOM element
    let myApp = document.getElementById('productDisplay');
  
    // clear DOM element
    myApp.innerHTML = '';
  
    // Opret elementer til at vise produktet
    const productContainer = document.createElement('div');
  
    // Titel
    const title = document.createElement('h3');
    title.textContent = product.title;
  
  
    // Beskrivelse
    const description = document.createElement('p');
    description.textContent = product.description;
  
    // Pris
    const price = document.createElement('p');
    price.textContent = `Price: ${product.price} kr.`;
  
    // Tilbageknap
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
      // Implementer logik for at gå tilbage her
    });
  
    // Tilføj elementer til produktcontaineren
    productContainer.appendChild(title);
        // Hent de første tre billeder fra arrayet (hvis de er tilgængelige)
        const images = product.images || []; // Antag, at billederne er i et felt kaldet "images"
        for (let i = 0; i < Math.min(images.length, 4); i++) {
          const image = document.createElement('img');
          image.src = images[i];
          image.alt = `Image ${i + 1}`;
          productContainer.appendChild(image);
        }
    productContainer.appendChild(description);
    productContainer.appendChild(price);
    productContainer.appendChild(backButton);
  
    // Tilføj produktcontaineren til myApp
    myApp.appendChild(productContainer);
  }
  