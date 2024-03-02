const login_form = document.getElementById("login_form");
login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (localStorage.users) {
    let users = JSON.parse(localStorage.users);
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        alert("Đăng nhập thành công");
        location = "../index.html";
        localStorage.setItem("userId", i);
        return;
      }
    }
    alert("Sai mật khẩu hoặc email");
  } else {
    alert("Chưa có thông tin đăng ký, vui lòng đăng ký trước");
  }
});
