export default function isNumber(value){
  let data = value.replaceAll(" ", '');
  data = data.replace(/[0-9]/g, '');
  return data.length > 0 ? false : true;
}