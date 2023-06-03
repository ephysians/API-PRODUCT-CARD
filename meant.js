fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const chuks_product_container = document.querySelector('.product-container');

        data.forEach(product => {
          const productElement = chuks_product_items(product);
          chuks_product_container.appendChild(productElement);
        });
      })
      .catch(error => {             // catch my errors
        console.log('Error:', error);
      });

    //   -------------------------

    function chuks_product_items(product){
      const productElement = document.createElement('div');
      productElement.className = 'product';

      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      productElement.appendChild(imageElement);

      const nameElement = document.createElement('h3');
      nameElement.textContent = product.title;
      productElement.appendChild(nameElement);

      const priceElement = document.createElement('p');
      priceElement.textContent = `$${product.price}`;
      productElement.appendChild(priceElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;
      productElement.appendChild(descriptionElement);

      return productElement;
    }