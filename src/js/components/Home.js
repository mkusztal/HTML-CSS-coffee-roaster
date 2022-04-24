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

    thisHome.randTitle = thisHome.getRandomTitle(0, thisHome.titles.length);
    thisHome.dom.homeTitle.innerHTML = thisHome.randTitle;

    console.log('titles', thisHome.homeTitleRand);
  }

  getRandomTitle(min, max) {
    console.log(min, max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default Home;
