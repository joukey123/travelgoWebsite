//로그인 인사

const username = document.querySelector("#username");
const span = document.querySelector(".login-header span");

const login = () => {
  span.innerText = username.value + "님. " + "안녕하세요";
  span.classList.remove("hidden");
};
