const loginForm = document.querySelector("#login");
// console.log(loginForm);

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(loginForm);
  // Send to backend
  // Display message
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Login Successfully!";
  console.log(messageH1);
});

// Write fullname function
function fullName(firstName, lastName) {
  // return firstName + lastName;
  return `${firstName} ${lastName}`;
}

const myName = fullName("Calvin", "Bekoe");
console.log(myName);
