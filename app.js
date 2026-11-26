(() => {
  const clock = document.querySelector('[data-clock]');
  const updateClock = () => { if (clock) clock.textContent = new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date()); };
  updateClock(); setInterval(updateClock,1000);
  const grid = document.querySelector('[data-work-grid]');
  if (!grid) return;
  const search = document.querySelector('.search-box input');
  const buttons = document.querySelectorAll('[data-view]');
  const empty = document.querySelector('.empty-state');
  const cards = [...grid.querySelectorAll('.work-card')];
  search?.addEventListener('input', () => {
    const term = search.value.trim().toLocaleLowerCase('pt-BR'); let visible = 0;
    cards.forEach(card => { const show = (card.dataset.name || card.textContent).toLocaleLowerCase('pt-BR').includes(term); card.hidden = !show; if(show) visible++; });
    if (empty) empty.hidden = visible !== 0;
  });
  buttons.forEach(button => button.addEventListener('click', () => {
    const list = button.dataset.view === 'list'; grid.classList.toggle('list-view',list);
    buttons.forEach(item => { const active = item === button; item.classList.toggle('active',active); item.setAttribute('aria-pressed',String(active)); });
  }));
})();
