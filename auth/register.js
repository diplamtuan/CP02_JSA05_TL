const register_form = document.getElementById("register_form");
register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;
  let password = document.getElementById("password").value;

  if (email.length == 0 || phone_number.length == 0 || password.length == 0) {
    alert("Email, số điện thoại, password không được để trống !!!");
  } else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      users.push({
        email: email,
        phone_number: phone_number,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      let users = [];
      users.push({
        email: email,
        phone_number: phone_number,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
    alert("Đăng ký thành công");
  }
});
