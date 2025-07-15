 
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        const adContainers = document.querySelectorAll('.ad-container');
        products.forEach((product, i) => {
          if (adContainers[i]) {
            adContainers[i].innerHTML = `
              <img class="ad-image" src="${product.image}" alt="${product.title}" />
              <div class="ad-text">${product.title}</div>
              <div class="ad-description">
                $${product.price} - ${product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}
              </div>
            `;
            adContainers[i].style.cursor = 'pointer';
            adContainers[i].onclick = () => window.open('https://www.amazon.in/?&tag=googhydrabk1-21', '_blank');
          }
        });
      })
      .catch(console.error);

   
    const images = [
      'https://picsum.photos/id/1018/1920/1080',
      'https://picsum.photos/id/1015/1920/1080',
      'https://picsum.photos/id/1016/1920/1080',
      'https://picsum.photos/id/1020/1920/1080'
    ];

    const headerBg = document.querySelector('.header-bg');
    let currentIndex = 0;

    function showNextImage() {
      headerBg.style.backgroundImage = `url(${images[currentIndex]})`;
      headerBg.classList.add('active');

      
      setTimeout(() => {
        headerBg.classList.remove('active');

        setTimeout(() => {
          currentIndex = (currentIndex + 1) % images.length;
          showNextImage();
        }, 1000);  
      }, 4000);  
    }

    showNextImage();
 