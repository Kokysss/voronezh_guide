document.addEventListener('DOMContentLoaded', () => {

  const showMoreBtn = document.querySelector('#showMore');
  const moreText = document.querySelector('#moreText');

  if (showMoreBtn && moreText) {
    showMoreBtn.addEventListener('click', () => {
      moreText.classList.toggle('d-none');
      if (moreText.classList.contains('d-none')) {
        showMoreBtn.textContent = 'Подробнее';
      } else {
        showMoreBtn.textContent = 'Скрыть';
      }
    });
  }

  const contactForm = document.querySelector('#contactForm');
  const formMessage = document.querySelector('#formMessage');

  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = contactForm.querySelector('#name');
      const emailInput = contactForm.querySelector('#email');
      const messageInput = contactForm.querySelector('#message');

      if (!nameInput.value.trim() || !emailInput.value.includes('@') || !messageInput.value.trim()) {
        formMessage.textContent = 'Заполни все поля и проверь, чтобы email содержал @!';
        formMessage.className = 'mt-3 mb-0 text-danger fw-bold';
        return;
      }

      formMessage.textContent = `Спасибо, ${nameInput.value}! Ваше сообщение отправлено.`;
      formMessage.className = 'mt-3 mb-0 text-success fw-bold';
      contactForm.reset();
    });
  }

  const filterBtn = document.querySelector('#filterBtn');
  const placeDescriptions = document.querySelectorAll('.place-desc');

  if (filterBtn && placeDescriptions.length > 0) {
    filterBtn.addEventListener('click', () => {
      placeDescriptions.forEach(desc => {
        desc.classList.toggle('d-none');
      });

      if (filterBtn.textContent === 'Скрыть описания') {
        filterBtn.textContent = 'Показать описания';
        filterBtn.className = 'btn btn-primary';
      } else {
        filterBtn.textContent = 'Скрыть описания';
        filterBtn.className = 'btn btn-outline-primary';
      }
    });
  }
});
