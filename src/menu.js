const menu = () => {
  const section = document.createElement('section');
  section.classList.add('section');
  section.innerHTML = '<h1>Menu</h1>';
  document.body.append(section);
};
export { menu };
