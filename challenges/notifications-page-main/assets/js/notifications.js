export function notifications () {

  let NotificationsNotRead = localStorage.getItem('NotificationsNotRead') || 0;

  const setAllRead = () => {
    NotificationsNotRead = 0;
    document.querySelector('.NotificationsNotRead').innerText =
      NotificationsNotRead;

    const cards = document.querySelectorAll('.card-notify');
    cards.forEach((element) => {
      element.setAttribute('data-read', true);
    });
  }

  return {setAllRead};
}

