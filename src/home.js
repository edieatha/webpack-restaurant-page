const home = function() {
  const section = document.createElement('section');
  section.classList.add('section')
  section.innerHTML = `
  <h1>Home!</h1>
  
  `;
  document.body.append(section);
};
export {home};
