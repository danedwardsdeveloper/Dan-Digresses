function handleModals() {
  const openModalButton = document.querySelector("#sort-article-previews-btn");
  const modal = document.querySelector("#sort-article-previews-modal");
  let isOpen = false;

  openModalButton.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      const buttonRect = openModalButton.getBoundingClientRect();

      const top = buttonRect.top;
      modal.style.top = `${top}px`;

      let right = buttonRect.left;
      let width = buttonRect.width;
      modal.style.right = `${right}px`;

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

function addArticlePreviewEventListeners() {
  const previewCards = document.querySelectorAll(".article-preview-card");
  previewCards.forEach(function (previewCard) {
    previewCard.addEventListener("click", () => {
      window.location.href = "article.html";
    });
  });
}

addArticlePreviewEventListeners();

function handleHomeClicks() {
  const logo = document.querySelector(".brand-logo");
  logo.addEventListener("click", () => {
    window.location.href = "/";
  });

  const h1 = document.querySelector(".hero-banner h1");
}

handleHomeClicks();
