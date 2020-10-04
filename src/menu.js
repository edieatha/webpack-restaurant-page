const menu = () => {
  const section = document.createElement('section');
  section.classList.add('section');
  section.innerHTML = `
  <img src="../dist/img/menu1.png" class="img-fluid" alt="Responsive image">
  `;
  document.body.append(section);
};
export default menu;
