import './load';
import home from './home';
import menu from './menu';
import contact from './contact';

const nav = document.querySelector('nav');

const content = (event) => {
  const link = event.target.closest('a');
  const section = document.querySelector('section');

  if (!link.dataset.content) return;

  const selected = (tab) => {
    const selectedTab = nav.querySelector('.active');

    if (selectedTab) {
      selectedTab.classList.remove('active');
    }
    tab.classList.add('active');
  };

  if (section) {
    section.remove();
    selected();
  }

  if (link.dataset.content === 'home') {
    home();
  } else if (link.dataset.content === 'menu') {
    menu();
  } else if (link.dataset.content === 'contact') {
    contact();
  }
};

nav.addEventListener('click', content);
nav.querySelector('.nav-link[data-content="home"]').click();
