export const addEl = ({type, content = '', classNames = []}) => {
  const element = document.createElement(type);
  classNames.forEach(className => element.classList.add(className));
  if('innerText' in element){
    element.innerText = content;
  }

  return element;
}

export const select = (selector, all = false) => {
  if(!all){
    return document.querySelector(selector)
  }else{
    return document.querySelectorAll(selector)
  }
}

export function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'short' });
}