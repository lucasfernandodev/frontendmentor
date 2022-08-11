export default function validString(value){
  let regex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
  const data = value.replace(/^[0-9]/g, '');
  const result = data.split(/ +/).every(parte => regex.test(parte));

  return result;
}