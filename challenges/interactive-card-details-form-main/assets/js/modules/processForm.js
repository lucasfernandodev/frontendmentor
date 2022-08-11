import validString from "../utils/validString.js";
import isNumber from '../utils/isNumber.js';
export default function processform(inputs = []){

  const errors = [];

  inputs.forEach(input => {
    const inputId = input.id;
    const dataError = {
      element: null,
      message: "",
    }

    if(inputId === "Cardholder_Name"){
      if(!validString(input.value) || input.value.length === 0){
        dataError.element = input;
        dataError.message = "Input invalid";

        errors.push(dataError)
      }
    }

    if(inputId === "Card_Number"){
      if(!isNumber(input.value) || input.value.replaceAll(" ", "").length !== 16){
        dataError.element = input;
        dataError.message = "Wrong format, numbers only";

        errors.push(dataError);
        console.log(input.value.replaceAll(" ", ""))
      }
    }

    if(inputId === "Card_Date_1"){
      if(input.value.length === 0 || parseInt(input.value) > 31){
        dataError.element = input;
        dataError.message = "Date invalid";

        errors.push(dataError)
      }
    }

    if(inputId === "Card_Date_2"){
      if(input.value.length === 0 || parseInt(input.value) > 12){
        dataError.element = input;
        dataError.message = "Date invalid";

        errors.push(dataError)
      }
    }


    if(inputId === "CVC"){
      if(input.value.length === 0 || parseInt(input.value.length) > 3 || input.value === '000'){
        dataError.element = input;
        dataError.message = "cvc invalid";

        errors.push(dataError)
      }
    }

  })

  return errors;
}