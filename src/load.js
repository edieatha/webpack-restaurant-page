const load = (function() {
  const menu = document.createElement('menu');
  menu.classList.add('menu');
  menu.innerHTML = `<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
</ul>`;
  content.append(menu);
})();
