import { select } from '../settings.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.getElements();
    thisHome.randomTitle();
  }

  getElements() {
    const thisHome = this;

    thisHome.dom = {
      homeTitle: document.querySelector(select.home.homeTitle),
    };
  }

  /* random text for home title */
  randomTitle() {
    const thisHome = this;

    thisHome.titles = [
      'Home of Original Tastes',
      'Real Venezuela, Real Coffee',
      'Taste Real Venezuela',
    ];

    thisHome.randTitle =
      thisHome.titles[Math.floor(Math.random() * thisHome.titles.length)];
    thisHome.dom.homeTitle.innerHTML = thisHome.randTitle;
  }
}

export default Home;
