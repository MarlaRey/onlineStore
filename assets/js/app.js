import { getProductCategories, getProductsByCategory, getProductById } from "./modules/model/dummyjasonLib.js";
import { buildCategoryButtons, buildArticles, buildProductView } from "./modules/view/viewCode.js";

// Definer dine callback-funktioner i samme omfang som handleCategoryClick
window._myEventListners = {
  handleCategoryClick,handleThumbnailClick
};

initApp();

// Initier appen
function initApp() {
    // Hent produktkategorier og byg knapperne
    getProductCategories()
      .then((categories) => {
        buildCategoryButtons(categories);
        if (categories.length > 0) {
          // Kald handleCategoryClick med den første kategori
          handleCategoryClick(categories[0]);
        }
      })
      .catch((error) => {
        console.error('Fejl ved indlæsning af kategorier:', error);
      });
  }
  

// Funktionen, der håndterer klik på kategoriknappen
function handleCategoryClick(categoryName) {
  getProductsByCategory(categoryName)
    .then((products) => {
      // Nu har du dataobjekterne i 'products' arrayet
      // Kald buildArticles funktionen med de hentede data
      buildArticles(products);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


//Det er dette issue du er kommet til:
  // Funktion til at håndtere klik på thumbnail
  function handleThumbnailClick(productId) {
    getProductById(productId)
    
      .then((product) => {
        // Produktet er nu tilgængeligt, gør noget med det, f.eks. vis det i en modal eller en detaljeret visning
   
        buildProductView(product);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }