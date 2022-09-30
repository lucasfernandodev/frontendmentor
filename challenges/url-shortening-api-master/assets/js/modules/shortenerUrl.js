import { copy } from '../utils/copy.js';
import validURL from '../utils/validUrl.js';

export default function shortenerUrl() {

  const input = document.querySelector('form input');
  const submit = document.querySelector('form button');
  const errorEl = document.querySelector('form .error');

  const result = document.querySelector('ul.result');

  const showResult = (url, shortenedURL, checkStorage = true) => {

    const resultTeplate = `
    <li class="result-item">
              <div class="col">
                <p class="link-pass">${url}</p>
              </div>
              <div class="col">
                <p class="link-short">${shortenedURL}</p>
                <button class="btn btn-copy" data-copy="${shortenedURL}">Copy</button>
              </div>
            </li>
    `;

    if (result.querySelectorAll('.result-item').length >= 3) {
      result.querySelector('.result-item').innerHTML = resultTeplate;
    } else {
      result.insertAdjacentHTML('beforeend', resultTeplate);
    }

    const btns = document.querySelectorAll('.btn-copy');

    if (btns) {
      btns.forEach(el => {


        el.addEventListener('click', e => {
          e.preventDefault();
          const copyed = copy(el.getAttribute('data-copy'));
          if (copyed) {
            btns.forEach(el => {
              el.setAttribute('data-copied', false);
              el.innerText = "Copy"
            })

            el.setAttribute('data-copied', true);
            el.innerText = "Copied!"
          }
        })
      })
    }

    if (checkStorage === true) {
      const myCollectionLink = localStorage.getItem('myCollectionLink');

      if (myCollectionLink === null) {
        localStorage.setItem('myCollectionLink', JSON.stringify([{
          url: url,
          shortenedURL: shortenedURL
        }]))
      } else {
        if (JSON.parse(myCollectionLink).length < 3) {

          const links = JSON.parse(myCollectionLink);
          links.push({
            url: url,
            shortenedURL: shortenedURL
          })

          localStorage.setItem('myCollectionLink', JSON.stringify(links))
        }

        if (JSON.parse(myCollectionLink).length === 3) {

          const links = JSON.parse(myCollectionLink);
          links[0] = {
            url: url,
            shortenedURL: shortenedURL
          }
          console.log(links)
          localStorage.setItem('myCollectionLink', JSON.stringify(links))
        }
      }
    }
  }





  submit.addEventListener('click', async (e) => {
    e.preventDefault();

    input.setAttribute('data-valid', true);
    let error = []
    const value = input.value;

    if (value.length === 0) {
      error.push({ msg: 'add url' })
    }

    if (value.length >= 120) {
      error.push({ msg: 'only urls with a maximum of 120 characters' })
    }

    if (!validURL(value)) {
      error.push({ msg: 'is not valid url' })
    }

    if (error.length !== 0) {
      input.setAttribute('data-valid', 'invalid');
      errorEl.innerText = error[0].msg
    } else {
      const url = input.value;
      try {
        const f = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const response = await f.json();
        const data = response.result;
        const shortLink = data.full_short_link2;

        showResult(url, shortLink)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

  })

  const myCollectionLink = localStorage.getItem('myCollectionLink');
  if (myCollectionLink) {
    const links = JSON.parse(myCollectionLink);

    links.map(link => {
      showResult(link.url, link.shortenedURL, false)
    })
  }
}