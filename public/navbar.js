(function(callback) { callback.call(document, new Event('DOMContentLoaded')); })( () => {
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');
  if (!toggle || !menu) return;
  const mobile = window.matchMedia('(max-width: 768px)');
  const setOpen = (open, restoreFocus = false) => {
    menu.classList.toggle('active', open);
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.inert = mobile.matches && !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('active')));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (!menu.classList.contains('active')) return;
    if (event.key === 'Escape') setOpen(false, true);
    if (event.key === 'Tab') {
      const controls = [toggle, ...menu.querySelectorAll('a')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  mobile.addEventListener('change', () => setOpen(false));
  setOpen(false);
});
