const elgatoKeyLight = document.querySelector("#elgatoKeyLight");
const elgatoKeyLightModal = document.querySelector("#elgatoKeyLightModal");
const closeButton = document.querySelector(".close");

const showModal = (event) => {
  elgatoKeyLightModal.classList.add("show");
};
const closeModal = (event) => {
  elgatoKeyLightModal.classList.remove("show");
};

elgatoKeyLight.addEventListener("click", showModal);
closeButton.addEventListener("click", closeModal);
