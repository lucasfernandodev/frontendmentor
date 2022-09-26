import {data} from './data.js';
import makeElement from './makeElement.js';
import { notifications } from './notifications.js';

let NotificationsNotRead = localStorage.getItem('NotificationsNotRead') || 0;


data.map((item) => {

  NotificationsNotRead = parseInt(NotificationsNotRead);

  if (item.read === false) {
    NotificationsNotRead++;
  }

  document.querySelector('.NotificationsNotRead').innerText =
    NotificationsNotRead;

  const onboard = document.querySelector('.onboard-notify');

  const card = makeElement('li', 'card-notify', {
    'data-read': item.read,
  });

  const cardHeader = makeElement('div', 'card-header');
  cardHeader.appendChild(
    makeElement('img', 'card-img', {
      alt: item.name,
      src: item.perfil_image,
    })
  );

  const cardMain = makeElement('div', 'card-main');

  const cardInfo = makeElement('div', 'card-info');

  const cardTitle = makeElement('div', 'card-title');

  const userName = makeElement('a', 'user-name', { href: '#' });
  userName.innerText = item.name;

  const userType = makeElement('span', 'user-type');
  userType.innerText = item.type;

  cardTitle.append(userName, userType);



  if (item.type === 'followed you') {
  }

  if (item.type === 'has joined your group') {
    const targetSource = makeElement('a', 'source-link', {
      href: '#',
    });
    targetSource.innerText = item.target;
    cardTitle.appendChild(targetSource);
  }

  if (item.type === 'left the group' || item.type === 'reacted to your recent post') {
    const targetSource = makeElement('a', 'source-link', {
      href: '#',
    });
    item.type !== 'left the group' && targetSource.classList.add('source-post')
    targetSource.innerText = item.target;
    cardTitle.appendChild(targetSource);
  }

  if (item.type === 'commented on your picture') {
    const targetSource = makeElement('img', 'source-image', {
      src: item.target,
      alt: `${item.name} ${item.type} commented on your picture`,
    });
    cardMain.classList.add('row');
    cardMain.appendChild(targetSource);
  }

  if (item.type === 'sent you a private message') {
    const targetSource = makeElement('p', 'source-message');
    targetSource.innerText = item.target;

    cardMain.appendChild(targetSource);
  }

  const userTimeAgo = makeElement('span', 'timeAgo-notify');
  userTimeAgo.innerText = item.time_ago;

  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(userTimeAgo);
  cardMain.insertAdjacentElement('afterbegin', cardInfo);
  card.append(cardHeader, cardMain);

  onboard.insertAdjacentElement('beforebegin', card);
});

const notify = notifications();
document.querySelector('.button-MarkAllAsRead').addEventListener('click', () => {
  notify.setAllRead()
})
