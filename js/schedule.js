// Setup hours: 05 to 23
const hours = Array.from({ length: 19 }, (_, i) => (i + 5).toString().padStart(2, '0'));

// Generate top hour labels
const header = document.getElementById('hour-header');
hours.forEach(hour => {
  const div = document.createElement('div');
  div.classList.add('hour-label');
  div.textContent = `${hour}:00`;
  header.appendChild(div);
});

// Generate blocks for each aircraft row
document.querySelectorAll('.hour-blocks').forEach(container => {
  hours.forEach(hour => {
    const div = document.createElement('div');
    div.classList.add('hour-block');
    div.dataset.hour = hour;

    div.addEventListener('click', () => {
      div.classList.toggle('reserved');
      div.textContent = div.classList.contains('reserved') ? 'Reserved' : '';
    });

    container.appendChild(div);
  });
});
