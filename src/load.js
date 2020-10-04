(() => {
  const nav = document.createElement('nav');
  nav.innerHTML = `
  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" data-content="home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-content="menu">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-content="contact">Contact</a>
  </li>
</ul>`;
  document.body.append(nav);
})();
