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

    const titles = [
      'Home of Original Tastes',
      'Real Venezuela, Real Coffee',
      'Taste Real Venezuela',
    ];
    const rand = Math.Floor(Math.random() * titles.length);

    thisHome.homeTitleId = document.getElementById('home-title').innerHTML =
      titles[rand];
  }
}

export default Home;
