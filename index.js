const data = [
  {
    id: 1,
    name: "MATRIX 1999 DECK",
    price: 1470000,
    image: "images/matrix-1999-1.jpg",
  },

  {
    id: 2,
    name: "RAEDA DECK",
    price: 1470000,
    image: "images/Raeda-Deck.jpg",
  },

  {
    id: 3,
    name: "MUSTY DECK",
    price: 1470000,
    image: "images/Musty-Deck.jpg",
  },

  {
    id: 4,
    name: "TRISTIQUE DECK",
    price: 1470000,
    image: "images/Tristique-deck.jpg",
  },

  {
    id: 5,
    name: "FIELD TRIP DECK",
    price: 1470000,
    image: "images/Fied-Trip-deck.jpg",
  },

  {
    id: 6,
    name: "TARO RAINBOW LOGO DECK",
    price: 1470000,
    image: "images/web-5.jpg",
  },

  {
    id: 7,
    name: "NEON RAINBOW LOGO DECK",
    price: 1470000,
    image: "images/web-1.jpg",
  },

  {
    id: 8,
    name: "ORANAGE RAINBOW LOGO DECK",
    price: 1470000,
    image: "images/web-2.jpg",
  },

  {
    id: 9,
    name: "BLUE RAINBOW LOGO DECK",
    price: 1470000,
    image: "images/web-3.jpg",
  },

  {
    id: 10,
    name: "WHITE RAINBOW LOGO DECK",
    price: 1470000,
    image: "images/web-4.jpg",
  },

  {
    id: 11,
    name: "CUTIS MODEL DECK",
    price: 1470000,
    image: "images/cutis.jpg",
  },

  {
    id: 12,
    name: "CAM VU MODEL DECK",
    price: 1470000,
    image: "images/cam-vu.jpg",
  },

  {
    id: 13,
    name: "SON NGUYEN MODEL DECK",
    price: 1470000,
    image: "images/son-nguyen.jpg",
  },
];
const productElement = document.querySelector("#products");
let html = "";
for (let i = 0; i < data.length; i++) {
  let image = data[i].image;
  let name = data[i].name;
  let price = data[i].price;
  price = price.toLocaleString("vi", { style: "currency", currency: "VND" });
  html += `
  <div class="card">
  <div class="image-container">
    <img src=${image} />
  </div>
  <div class="container">
    <h5 class="product-name">${name}</h5>
    <h6>
      <b>Price: </b>
      ${price}
    </h6>
    <button id=${data[i].id} onclick="addCart(${data[i].id})">Thêm vào giỏ hàng</button>
  </div>
</div>
  `;
}
productElement.innerHTML = html;
function addCart(id) {}

function findProduct(id) {}

function updateQuantity() {}

updateQuantity();
checkLogin();

function checkLogin() {
  if (localStorage.getItem("userId")) {
    document.querySelector(".wrapperControl").innerHTML = `
           <div class="loginWrapper">
              <span>ngoc@gmail.com</span>
              <i class="fa-solid fa-user" id="users"></i>
              <ul>
                <li>Thông tin tài khoản</li>
                <li onclick="logout()">Đăng xuất</li>
              </ul>
            </div>
    `;
  } else {
    document.querySelector(".wrapperControl").innerHTML = `
    <a href="auth/login.html" class="loginWrapper">
        <i class="fa-solid fa-user" id="users"></i>
      </a>
    
    `;
  }
}

function logout() {
  localStorage.removeItem("userId");
  checkLogin();
}
