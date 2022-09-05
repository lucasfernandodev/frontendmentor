import { data } from "../../data.js";

  const socialDashboard = document.querySelector('.section-dashboard');
  const socialOverview = document.querySelector('.section-overview .overview');

  const statusImagePath = {
    incresize: './assets/images/icon-up.svg',
    descresize: './assets/images/icon-down.svg',
  }

  function renderCard(social, social_name){

  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-id', social_name);

  const socialAccount = document.createElement('div');
  socialAccount.className = 'account';

  const accountImage = document.createElement('img');
  accountImage.src = social.logo;
  accountImage.alt = '@lucasfernando.dev';

  const accountText = document.createElement('span');
  accountText.innerText = '@lucasfernando.dev';

  socialAccount.appendChild(accountImage);
  socialAccount.appendChild(accountText);

  const likes = document.createElement('h3');
  likes.className = 'followersValue'
  likes.innerText = social.value;

  const followersText = document.createElement("span");
  followersText.classList = 'followersTitle'
  followersText.innerText = 'followers';

  const staticContainer = document.createElement('span');
  staticContainer.classList = 'staticContainer';
  staticContainer.setAttribute("data-status", social.status)

  const statusImage = document.createElement('img');
  statusImage.src = statusImagePath[social.status];

  const statusText = document.createElement('span');
  statusText.innerText = `${social.variant} Today`

  staticContainer.appendChild(statusImage)
  staticContainer.appendChild(statusText)

  card.appendChild(socialAccount);
  card.appendChild(likes);
  card.appendChild(followersText);
  card.appendChild(staticContainer);

  socialDashboard.append(card);
  }
Object.keys(data).forEach(name => {
  const social = data[name];
  const social_name = name;
  const overview = social.overview;
  renderCard(social, social_name);

  function renderCardOverview(data){
    const name = data.overviewName.replaceAll("_", " ");
    const logo = data.logo;
    const status = data.status;
    const value = data.value;
    const variant = data.variant;
 
    const card = document.createElement("div");
    card.className = 'card-overview';

    const cardHead = document.createElement("div");
    cardHead.className = "card-head";

    const title = document.createElement('h4');
    title.className = 'title';
    title.innerText = name;

    const icon = document.createElement("img");
    icon.src = logo;
    icon.alt = name;

    cardHead.appendChild(title);
    cardHead.appendChild(icon);

    const cardMain = document.createElement("div");
    cardMain.className = 'card-main';

    const valueText = document.createElement("span");
    valueText.className = 'value';
    valueText.innerText = value;

    const staticPropertie = document.createElement("div");
    staticPropertie.className = 'staticPropertie';
    staticPropertie.setAttribute("data-status", status);
    const staticIcon = document.createElement('img');
    staticIcon.src = statusImagePath[status];
    const staticText = document.createElement('span');
    staticText.innerText = variant;

    staticPropertie.appendChild(staticIcon);
    staticPropertie.appendChild(staticText);

    
    cardMain.appendChild(valueText);
    cardMain.appendChild(staticPropertie);

    card.appendChild(cardHead)
    card.appendChild(cardMain)

    socialOverview.appendChild(card)
  }

  Object.keys(overview).forEach(overviewName => {
    const overviewItem = overview[overviewName];
    renderCardOverview({overviewName, logo: social.logo,...overviewItem})
  })

})

