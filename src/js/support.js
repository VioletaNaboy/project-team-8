// document.addEventListener('DOMContentLoaded', renderOnPageLoaded);

import action1x from '../img/support/action@1x.png';
import action2x from '../img/support/action@2x.png';
import hope1x from '../img/support/hope@1x.png';
import hope2x from '../img/support/hope@2x.png';
import international1x from '../img/support/international@1x.png';
import international2x from '../img/support/international@2x.png';
import medecins1x from '../img/support/medecins@1x.png';
import medecins2x from '../img/support/medecins@2x.png';
import razom1x from '../img/support/razom@1x.png';
import razom2x from '../img/support/razom@2x.png';
import save1x from '../img/support/save@1x.png';
import save2x from '../img/support/save@2x.png';
import sergiy1x from '../img/support/sergiy@1x.png';
import sergiy2x from '../img/support/sergiy@2x.png';
import united1x from '../img/support/united@1x.png';
import united2x from '../img/support/united@2x.png';
import world1x from '../img/support/world@1x.png';
import world2x from '../img/support/world@2x.png';

const fundsList = document.querySelector('.support-funds-list');
const funds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: save1x,
    imgRetina: save2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope1x,
    imgRetina: hope2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united1x,
    imgRetina: united2x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: international1x,
    imgRetina: international2x,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medecins1x,
    imgRetina: medecins2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom1x,
    imgRetina: razom2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: action1x,
    imgRetina: action2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: world1x,
    imgRetina: world2x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: sergiy1x,
    imgRetina: sergiy2x,
  },
];

function renderOnPageLoaded() {
  const markup = funds
    .map(({ img, imgRetina, url, title }, index) => {
      const paddedIndex = String(index + 1).padStart(2, '0');
      return `
    <li class="fund-item">
      <span class="fund-number">${paddedIndex}</span>
      <a href="${url}" class="fund-link" target="_blank" rel="noopener noreferrer" aria-label="${title}">
        <img
          srcset="${img}, ${imgRetina} 2x"
          src="${img}"
          alt="${title}"
          loading="lazy"
          class="fund-img"
        />
      </a>
    </li>
 `;
    })
    .join('');
  fundsList.insertAdjacentHTML('beforeend', markup);
}
renderOnPageLoaded();
// export {};
