const contact = () => {
  const section = document.createElement('section');
  section.classList.add('section');
  section.innerHTML = `
<img src="../dist/img/contact.jpg" class="img-fluid" alt="Responsive image"> 
  `;
  document.getElementById('content').append(section);
};
export default contact;
