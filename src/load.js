(() => {
  const nav = document.createElement('nav');
  nav.innerHTML = `
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Edie's Restaurant</span>
  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
</ul> 
</nav>`;
  document.body.append(nav);
})();
