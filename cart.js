const cartRootElement = document.querySelector("#cartJSA");

function renderCart() {
  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let html = "";
    html += `
        <p>
        <span class="h2">Shopping Cart </span
        ><span class="h4">(${cart.length} item in your cart)</span>
        </p>
    `;
    for (let i = 0; i < cart.length; i++) {
      let image = cart[i].image;
      let name = cart[i].name;
      let price = cart[i].price;
      price = price.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
      html += `
      <div class="card mb-4">
      <div class="card-body p-4">
        <div class="row align-items-center">
          <div class="col-md-2">
            <img
              src=${image}
              class="img-fluid"
              alt="Generic placeholder image"
            />
          </div>
          <div class="col-md-2 d-flex justify-content-center">
            <div>
              <p class="small text-muted mb-4 pb-2">Name</p>
              <p class="lead fw-normal mb-0">${name}</p>
            </div>
          </div>
          <div class="col-md-2 d-flex justify-content-center">
            <div>
              <p class="small text-muted mb-4 pb-2">Quantity</p>
              <p class="lead fw-normal mb-0">1</p>
            </div>
          </div>
          <div class="col-md-2 d-flex justify-content-center">
            <div>
              <p class="small text-muted mb-4 pb-2">Price</p>
              <p class="lead fw-normal mb-0">${price}</p>
            </div>
          </div>
          <div class="col-md-2 d-flex justify-content-center">
            <div>
              <p class="small text-muted mb-4 pb-2">Total</p>
              <p class="lead fw-normal mb-0">${price}</p>
            </div>
          </div>
          <div class="col-md-2 d-flex justify-content-center">
            <div>
              <p class="small text-muted mb-4 pb-2">Delete</p>
              <p class="lead fw-normal mb-0">
                <i
                  class="fa-solid fa-trash"
                  style="color: red; cursor: pointer"
                  onclick="deleteCart(${cart[i].id})"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      `;
    }

    html += `
            <div class="card mb-5">
        <div class="card-body p-4">
        <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
            <span class="small text-muted me-2">Order total:</span>
            <span class="lead fw-normal">${updateTongTien()}</span>
            </p>
        </div>
        </div>
        </div>

        <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-light btn-lg me-2">
        Continue shopping
        </button>
        <button type="button" class="btn btn-primary btn-lg" onclick="thanhtoan()">
        Process
        </button>
        </div>
    `;
    cartRootElement.innerHTML = html;
  } else {
    cartRootElement.innerHTML = `
        <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWj9mv6-vipwHCFMZZZ5svBnNZxSRetabRmHjONQwPBQ&s"
              />
            </div>
        `;
  }
}

function deleteCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let newCart = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      newCart.push(cart[i]);
    }
  }
  if (newCart.length == 0) {
    localStorage.removeItem("cart");
    renderCart();
  } else {
    localStorage.setItem("cart", JSON.stringify(newCart));
    renderCart();
  }
}

renderCart();

function updateTongTien() {
  let sum = 0;
  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price;
    }
    sum = sum.toLocaleString("vi", { style: "currency", currency: "VND" });
    return sum;
  }
}

function thanhtoan() {
  if (localStorage.getItem("userId")) {
    alert("Thanh toan thanh cong");
    localStorage.removeItem("cart");
    location.href = "index.html";
  } else {
    alert("Moi ban dang nhap");
    location.href = "./auth/login.html";
  }
}
