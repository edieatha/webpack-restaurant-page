const home = () => {
  const section = document.createElement('section');
  section.classList.add('section');
  section.innerHTML = `
  <img src="../dist/img/home.jpg" class="img-fluid" alt="Responsive image"> `;
  document.getElementById('content').append(section);
};
export default home;
