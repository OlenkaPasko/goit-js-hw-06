const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const emailEl = formEl.email.value;
  const passwordEl = formEl.password.value;

  const formAllattribute = {
    emailEl,
    passwordEl,
  };
  if (email === " " || password === " ") {
    alert("Please fill in all the fields!");
  } else {
    console.log(formAllattribute);
  }

  event.currentTarget.reset();
}
