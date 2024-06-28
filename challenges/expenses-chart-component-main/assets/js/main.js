import { ChartExpenses } from './chart.js';
import { chartDatasets } from './data.js';
import { getDayName, select } from './utils.js';

const currentDay = getDayName(new Date(), 'en-US').toLowerCase()

new ChartExpenses({
  area: select('#chart-area'),
  datas: chartDatasets,
  currentDay
})