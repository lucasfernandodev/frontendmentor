export default function slider(data) {

  let currentPosition = 0;
  const items = Object.keys(data);
  const ItensLength = items.length - 1;

  const _slider = document.getElementById('slider');
  const sliderImage = _slider.querySelector('.slider-image');
  const sliderDescription = _slider.querySelector('.user-description');

  const userName = _slider.querySelector('.user-name');
  const userJob = _slider.querySelector('.user-job');

  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  prev.addEventListener('click', () => {
    if ((currentPosition - 1) >= 0) {
      currentPosition = currentPosition - 1;
      render(data[items[currentPosition]])
    }
  })

  next.addEventListener('click', () => {
    if ((currentPosition + 1) <= ItensLength) {
      currentPosition = currentPosition + 1;
      render(data[items[currentPosition]])
    }
  })

  function render(data) {

    if (!_slider.querySelector('.slider-image-show')) {
      const image = document.createElement("img");
      image.className = 'slider-image-show';
      image.alt = data.name;
      image.src = data.image;
      sliderImage.appendChild(image)
    }

    const image = _slider.querySelector('.slider-image-show');
    if (image !== null) {
      image.alt = data.name;
      image.src = data.image;

      sliderDescription.innerText = data.description;
      userName.innerText = data.name;
      userJob.innerText = data.job;
    }
  }

  render(data[items[currentPosition]])

}