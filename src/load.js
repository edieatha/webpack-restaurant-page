(() => {
  const nav = document.createElement('nav');
  nav.innerHTML = `
  <nav class="navbar">
  <img src="../dist/img/logo.png" width="188" height="85" ></img>
  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#" data-content="home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-content="menu" style="color: rgb(245, 134, 52);">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-content="contact"  style="color: rgb(245, 134, 52);">Contact</a>
  </li>
</ul>
</nav>`;
  document.body.append(nav);
})();
