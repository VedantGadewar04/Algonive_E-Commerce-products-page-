const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');
const wishlistBtn = document.getElementById('wishlistBtn');
const colorDots = document.querySelectorAll('.color-dot');
const selectedColor = document.getElementById('selectedColor');
const topToast = document.getElementById('topToast');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.getElementById('toastClose');
const addToCartBtn = document.getElementById('addToCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');
const feedbackBtn = document.getElementById('feedbackBtn');
const bestSellerToggle = document.getElementById('bestSellerToggle');
const bestSellerPanel = document.getElementById('bestSellerPanel');
const themeToggle = document.getElementById('themeToggle');
const moodButtons = document.querySelectorAll('.mood-btn');
const feedbackStars = document.querySelector('.rate-btn');

let toastTimer;

function showToast(message) {
  toastMessage.textContent = message;
  topToast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => topToast.classList.remove('show'), 3000);
}

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((item) => item.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.src = thumb.dataset.image;
    mainImage.alt = thumb.dataset.alt;
  });
});

wishlistBtn.addEventListener('click', () => {
  const isActive = wishlistBtn.classList.toggle('active');
  wishlistBtn.setAttribute('aria-pressed', String(isActive));
  wishlistBtn.textContent = isActive ? '♥ Wishlisted' : '♡ Wishlist';
  showToast(isActive ? 'Added to wishlist successfully.' : 'Removed from wishlist.');
});

colorDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    colorDots.forEach((item) => item.classList.remove('active'));
    dot.classList.add('active');
    selectedColor.textContent = dot.dataset.color;
  });
});

addToCartBtn.addEventListener('click', () => {
  showToast('Product added to cart successfully.');
});

buyNowBtn.addEventListener('click', () => {
  showToast('Order placed successfully.');
});

document.querySelectorAll('[data-buy]').forEach((button) => {
  button.addEventListener('click', () => {
    showToast(`${button.dataset.buy} ordered successfully.`);
  });
});

feedbackBtn.addEventListener('click', () => {
  showToast('Thanks for your feedback. Coupon unlocked: NOVA10');
});

feedbackStars.addEventListener('click', () => {
  showToast('5-star feedback received. Coupon unlocked: NOVA10');
});

bestSellerToggle.addEventListener('click', () => {
  const isOpen = bestSellerToggle.classList.toggle('active');
  bestSellerToggle.setAttribute('aria-expanded', String(isOpen));
  bestSellerPanel.hidden = !isOpen;
});

themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  showToast(`Switched to ${nextTheme} mode.`);
});

moodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    moodButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const mood = button.dataset.mood;
    const root = document.documentElement;

    if (mood === 'Calm') {
      root.style.setProperty('--primary', '#2563eb');
      root.style.setProperty('--accent', '#7c3aed');
    } else if (mood === 'Energetic') {
      root.style.setProperty('--primary', '#ea580c');
      root.style.setProperty('--accent', '#dc2626');
    } else {
      root.style.setProperty('--primary', '#0f766e');
      root.style.setProperty('--accent', '#d92d20');
    }

    showToast(`${mood} gift mood activated.`);
  });
});

toastClose.addEventListener('click', () => {
  topToast.classList.remove('show');
});