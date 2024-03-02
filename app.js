let products = {
  data: [
    {
      name: "MATRIX 1999 DECK",
      price: 1470000,
      image: "images/matrix-1999-1.jpg",
    },

    {
      name: "RAEDA DECK",
      price: 1470000,
      image: "images/Raeda-Deck.jpg",
    },

    {
      name: "MUSTY DECK",
      price: 1470000,
      image: "images/Musty-Deck.jpg",
    },

    {
      name: "TRISTIQUE DECK",
      price: 1470000,
      image: "images/Tristique-deck.jpg",
    },

    {
      name: "FIELD TRIP DECK",
      price: 1470000,
      image: "images/Fied-Trip-deck.jpg",
    },

    {
      name: "TARO RAINBOW LOGO DECK",
      price: 1470000,
      image: "images/web-5.jpg",
    },

    {
      name: "NEON RAINBOW LOGO DECK",
      price: 1470000,
      image: "images/web-1.jpg",
    },

    {
      name: "ORANAGE RAINBOW LOGO DECK",
      price: 1470000,
      image: "images/web-2.jpg",
    },

    {
      name: "BLUE RAINBOW LOGO DECK",
      price: 1470000,
      image: "images/web-3.jpg",
    },

    {
      name: "WHITE RAINBOW LOGO DECK",
      price: 1470000,
      image: "images/web-4.jpg",
    },

    {
      name: "CUTIS MODEL DECK",
      price: 1470000,
      image: "images/cutis.jpg",
    },

    {
      name: "CAM VU MODEL DECK",
      price: 1470000,
      image: "images/cam-vu.jpg",
    },

    {
      name: "SON NGUYEN MODEL DECK",
      price: 1470000,
      image: "images/son-nguyen.jpg",
    },
  ],
};

function createElement(tagName, properties) {
  const element = document.createElement(tagName);

  if (properties) {
    for (let prop in properties) {
      element[prop] = properties[prop];
    }
  }

  return element;
}

const add_to_cart = () => {
  alert("thêm giỏ hàng");
};

for (let item of products.data) {
  let card = createElement("div", {
    className: "card",
  });

  let image_container = createElement("div", {
    className: "image-container",
  });

  let image = createElement("img", {
    src: item.image,
  });

  let container = createElement("div", {
    className: "container",
  });

  let product_name = createElement("h5", {
    className: "product-name",
    innerText: item.name.toUpperCase(),
  });

  let price = createElement("h6", {
    innerHTML: "<b>Price: </b>" + item.price,
  });

  let btn = createElement("button", {
    innerText: "Thêm vào giỏ hàng",
    onclick: () => {
      add_to_cart();
    },
  });

  image_container.appendChild(image);
  container.appendChild(product_name);
  container.appendChild(price);
  container.appendChild(btn);

  card.appendChild(image_container);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
