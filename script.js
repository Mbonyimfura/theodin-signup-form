const form = document.querySelector(".form-container");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const telephone = document.getElementById("telephone");
const signupForm = document.querySelector(".sigup-content");

const inputs = [
  firstName,
  lastName,
  email,
  telephone,
  password,
  confirmPassword,
];

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.remove("error");
    input.parentElement.classList.remove("success");
  });

  input.addEventListener("blur", () => {
    const value = input.value.trim();
    const name = input.id.replace("-", " ");

    if (value === "") {
      setErrorFor(input, `${name} can not be empty`);
    } else if (input === email && !isEmail(value)) {
      setErrorFor(input, "Not a valid email");
    } else if (input === telephone && !isTelephone(value)) {
      setErrorFor(input, "Not valid telephone number");
    } else {
      setSuccessFor(input);
    }

    if (password.value.trim() !== confirmPassword.value.trim()) {
      setErrorFor(confirmPassword, "Password do not match");
    }
  });
});

const checkInputs = () => {
  inputs.forEach((input) => {
    const value = input.value.trim();
    const name = input.id.replace("-", " ");

    if (value === "") {
      setErrorFor(input, `${name} can not be empty`);
    } else if (input === email && !isEmail(value)) {
      setErrorFor(input, "Not a valid email");
    } else if (input === telephone && !isTelephone(value)) {
      setErrorFor(input, "Not valid telephone number");
    } else {
      setSuccessFor(input);
    }

    if (password.value.trim() !== confirmPassword.value.trim()) {
      setErrorFor(confirmPassword, "Password do not match");
    }
  });
};

const setErrorFor = (input, message) => {
  console.log(input);
  const formInput = input.parentElement;
  const small = formInput.querySelector("small");
  formInput.className = "form-input error";
  console.log(formInput);

  small.innerText = message;
  console.log(small.innerHTML);
};
const setSuccessFor = (input) => {
  const formInput = input.parentElement;
  formInput.className = "form-input success";
};
const isEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
const isTelephone = (telephone) => {
  return /^\d{3}-\d{3}-\d{4}$/.test(telephone);
};
const resetForm = () => {
  const successInputs = form.querySelectorAll(".form-input.success");
  successInputs.forEach((successInput) => {
    successInput.classList.remove("success");
  });

  const errorInputs = form.querySelectorAll(".form-input.error");
  if (errorInputs.length === 0) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    telephone.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
};

signupForm.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
  resetForm();
});
