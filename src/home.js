const home = () => {
  const section = document.createElement('section');
  section.classList.add('section');
  section.innerHTML = `
  <img src="../dist/img/home.png" class="img-fluid" alt="Responsive image"> `;
  document.body.append(section);
};
export default { home };
