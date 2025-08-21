// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Revelar ao rolar (Intersection Observer)
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Filtro de projetos
const filterButtons = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.projects-grid .card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.filter;
    cards.forEach(card => {
      const match = cat === 'all' || card.dataset.category === cat;
      card.style.display = match ? 'block' : 'none';
    });
  });
});
