export default function makeElement(
  tag = 'div',
  className = undefined,
  properties = {}
) {
  const el = document.createElement(tag);
  el.className = className;

  const propertiesLabel = Object.keys(properties);

  for (let label of propertiesLabel) {
    const propertyValue = properties[label];
    el.setAttribute(label, propertyValue);
  }

  return el;
}