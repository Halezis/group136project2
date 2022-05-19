//targeting the hamburger and nav
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-list");

//showing nav list when hamburger is toggled
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// changing hamburger to X when clicked
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

//Show and hide password when eye is toggled
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

//show and hide confirm password
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");
togglePassword2.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);

  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

//html form validation

// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const password1 = document.getElementById("password1");
// const password2 = document.getElementById("password2");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkInputs();
// });

// //to get the values from the inputs
// function checkInputs() {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const phoneValue = phone.value.trim();
//   const password1Value = password1.value.trim();
//   const password2Value = password2.value.trim();

//   if (usernameValue === "") {
//     //show error message
//     setErrorFor(username, "Username cannot be blank");
//   }

//   function setErrorFor(input, message) {
//     const formControl = input.parentElement; //.form-control
//     const small = formControl.querySelector("small");

//     //add error message inside small
//     small.innerText = message;
//   }
// }
