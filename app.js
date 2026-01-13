// Service Worker regisztrálása
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function saveData() {
  const data = {
    name: document.getElementById('name').value,
    type: document.getElementById('type').value
  };

  localStorage.setItem('formData', JSON.stringify(data));
  document.getElementById('status').innerText =
    'Adatok elmentve (offline is megmarad)';
}

// betöltéskor visszatölt
window.onload = () => {
  const saved = localStorage.getItem('formData');
  if (saved) {
    const data = JSON.parse(saved);
    document.getElementById('name').value = data.name;
    document.getElementById('type').value = data.type;
  }
};
