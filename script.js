function filterMedia(category) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function openLightbox(src, type) {
  const lightbox = document.getElementById('lightbox');
  const body = document.getElementById('lightbox-body');

  if (type === 'image') {
    body.innerHTML = `<img src="${src}" alt="Preview">`;
  } else if (type === 'video') {
    body.innerHTML = `<video src="${src}" controls autoplay loop></video>`;
  }

  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const body = document.getElementById('lightbox-body');
  lightbox.classList.remove('active');
  body.innerHTML = '';
}
