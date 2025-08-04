let checkbox = document.getElementById("checkbox").checked;

console.log(checkbox);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["myform"];
  const inputs = form.querySelectorAll("input, select");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.classList.add("focused");
    });

    input.addEventListener("blur", () => {
      input.classList.remove("focused");
    });

    input.addEventListener("input", () => {
      validateField(input);
    });

    if (input.tagName.toLowerCase() === "select") {
      input.addEventListener("change", () => {
        validateField(input);
      });
    }
  });
});

//validationSS
window.validation = function () {
  let valid = true;

  const name = document.getElementById("fname");
  const email = document.getElementById("email");
  const phone = document.getElementById("number");
  const password = document.getElementById("password");
  const experience = document.getElementById("experience");
  const salary = document.getElementById("salary");
  const checkbox = document.getElementById("checkbox");

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    phone.value.trim() === "" ||
    password.value.trim() === "" ||
    experience.value === "" ||
    salary.value.trim() === "" ||
    !checkbox.checked
  ) {
    alert("Please fill up all the fields and agree to the terms.");
    return false;
  }

  if (name.value.trim().length < 3) {
    alert("Name must be at least 3 characters long.");
    name.classList.add("invalid");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  pracSemail = /^[^\s@]+@[^\s@]+\.[\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address.");
    email.classList.add("invalid");
    valid = false;
  }
  // numver = /^ \d{11} $/;
  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phone.value)) {
    alert("Phone number must be exactly 11 digits.");
    phone.classList.add("invalid");
    valid = false;
  }

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passRegex.test(password.value)) {
    alert(
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit."
    );
    password.classList.add("invalid");
    valid = false;
  }

  if (experience.value === "") {
    alert("Please select an experience level.");
    experience.classList.add("invalid");
    valid = false;
  }

  if (salary.value === "" || Number(salary.value) <= 0) {
    alert("Expected salary must be a positive number.");
    salary.classList.add("invalid");
    valid = false;
  }

  if (!checkbox.checked) {
    alert("You must agree to the Terms & Conditions and Privacy Policy.");
    checkbox.classList.add("invalid");
    valid = false;
  }

  return valid;
};

//

function validateField(input) {
  input.classList.remove("invalid");
  input.classList.remove("valid");

  let isValid = true;

  if (input.id === "fname") {
    isValid = input.value.trim().length >= 3;
  }

  if (input.id === "email") {
    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
  }

  if (input.id === "number") {
    isValid = /^\d{11}$/.test(input.value);
  }

  if (input.id === "password") {
    isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(input.value);
  }

  if (input.id === "experience") {
    isValid = input.value !== "";
  }

  if (input.id === "salary") {
    isValid = input.value !== "" && Number(input.value) > 0;
  }

  if (isValid) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
