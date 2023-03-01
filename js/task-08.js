const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    return alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
