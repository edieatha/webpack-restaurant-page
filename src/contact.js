const contact = () => {
  const section = document.createElement('section');
  section.classList.add('section');
  section.innerHTML = `
<img src="../dist/img/contact.png" class="img-fluid" alt="Responsive image"> 
  `;
  document.body.append(section);
};
export default { contact };
