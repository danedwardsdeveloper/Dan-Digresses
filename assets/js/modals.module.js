function handleModals(openButtonSelector, modalSelector) {
  const openModalButton = document.querySelector(openButtonSelector);
  const modal = document.querySelector(modalSelector);

  let isOpen = false;

  openModalButton.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      const buttonRect = openModalButton.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const top = buttonRect.bottom + 15;
      let left = buttonRect.left;

      if (left + modal.offsetWidth > window.innerWidth) {
        left = window.innerWidth - modal.offsetWidth;
      }

      modal.style.top = `${top}px`;
      modal.style.left = `${left}px`;
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

export default handleModals;
