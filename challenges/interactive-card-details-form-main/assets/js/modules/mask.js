export default function maskCard() {

  const cardNunber = document.querySelector('.cardNunber');
  const dataValue1 = document.getElementById("Card_Date_1");
  const dataValue2 = document.getElementById("Card_Date_2");
  const CVC = document.getElementById("CVC");


  cardNunber.addEventListener('keydown', (event) => {

    if(event.key !== "Backspace"){
    const cardLength = cardNunber.value.length;

    if (cardLength % 5 === 0 && cardLength !== 20) {
      cardNunber.value = `${cardNunber.value} `;
    }}
  });



  dataValue1.addEventListener("input", () => {
    dataValue1.value = dataValue1.value.replace(/[^0-9]/g, '')
  })

  dataValue2.addEventListener("input", () => {
    dataValue2.value = dataValue2.value.replace(/[^0-9]/g, '')
  })

  CVC.addEventListener("input", () => {
    CVC.value = CVC.value.replace(/[^0-9]/g, '')
  })
}