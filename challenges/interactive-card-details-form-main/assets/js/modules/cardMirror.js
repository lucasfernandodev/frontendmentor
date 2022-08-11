export default function cardMirror(){
  const inputs = document.querySelectorAll("input");
  const groupNumbers = document.querySelectorAll(".groupNumber");
  const cardNumerPlaceholder = document.querySelector(".cardNumberPlaceholder")

  inputs.forEach(input => {
    input.addEventListener("input", (evt) => {

     


      if(input.id === "Cardholder_Name"){
        const cardItem = document.querySelector("[data-item=cardName]");

        if(input.value.length < 1){
          cardItem.innerHTML = "e.g. Jane Appleseed"
        }else{
          cardItem.innerHTML = input.value
        }

        
      }

      if(input.id === "Card_Number"){

       cardNumerPlaceholder.setAttribute("data-key", input.value);

       const cardNumerSplit = cardNumerPlaceholder.getAttribute("data-key").slice(1).split(" ");

       groupNumbers[0].innerHTML = cardNumerSplit[0] ? cardNumerSplit[0] :  "0000"
       groupNumbers[1].innerHTML = cardNumerSplit[1] ? cardNumerSplit[1] :  "0000"
       groupNumbers[2].innerHTML = cardNumerSplit[2] ? cardNumerSplit[2] :  "0000"
       groupNumbers[3].innerHTML = cardNumerSplit[3] ? cardNumerSplit[3] :  "0000"
      }


      if(input.id === "Card_Date_1"){
        const cardItem = document.querySelector("[data-item=date1]");
        cardItem.innerHTML = input.value
      }


      if(input.id === "Card_Date_2"){
        const cardItem = document.querySelector("[data-item=date2]");
        cardItem.innerHTML = input.value
      }

      if(input.id === "CVC"){
        const cardItem = document.querySelector("[data-item=cvc]");
        cardItem.innerHTML = input.value
      }
    })
  })
}