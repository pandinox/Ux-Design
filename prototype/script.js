const screens = document.querySelectorAll('.screen');
const toast = document.getElementById('toast');

function goTo(id) {
  screens.forEach(screen => screen.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

document.addEventListener('click', (event) => {
  const clickable = event.target.closest('[data-go], [data-toast]');
  if (!clickable) return;

  const message = clickable.dataset.toast;
  const target = clickable.dataset.go;

  if (message) showToast(message);
  if (target) setTimeout(() => goTo(target), message ? 450 : 0);
});
