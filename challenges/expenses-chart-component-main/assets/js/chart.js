import { addEl } from "./utils.js";

export class ChartExpenses {
  addBar = (day, amount, currentDay, delay) => {
    const barWrapper = addEl({ type: 'div', classNames: ['barWrapper'] })
    const bar = addEl({ type: 'div', classNames: ['bar'] });
    const barLabel = addEl({ type: 'span', classNames: ['bar-label'], content: day })

    bar.setAttribute('data-value', '$' + amount)
    bar.style.setProperty('--current-height', amount + '%')
    bar.style.animationDelay = ((delay + 1) * 2) + 'ms'

    if (day === currentDay) {
      bar.setAttribute('data-current-day', 'true')
    }

    barWrapper.appendChild(bar)
    barWrapper.appendChild(barLabel);
    return barWrapper;
  }

  constructor({ area = null, datas = [], currentDay }) {

    if (area) {
      const bars = datas.map(({ day, amount }, index) => {
        return this.addBar(day, amount, currentDay, index)
      });
      area.append(...bars)
    }
  }
}