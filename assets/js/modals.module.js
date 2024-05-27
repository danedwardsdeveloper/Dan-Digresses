function handleModals() {
  const openModalButton = document.querySelector("#sort-article-previews-btn");
  const modal = document.querySelector("#sort-article-previews-modal");
  let isOpen = false;

  openModalButton.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      const buttonRect = openModalButton.getBoundingClientRect();
      const modalRect = modal.getBoundingClientRect();
      console.log(modalRect);
      const top = buttonRect.top;
      modal.style.top = `${top}px`;

      let right = buttonRect.right;
      modal.style.left = `${right}px`;

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

handleModals();
