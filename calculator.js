"use strict";
// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

let amountInput = document.getElementById("loan-amount");
let yearsInput = document.getElementById("loan-years");
let rateInput = document.getElementById("loan-rate");

/** Retrieves current form values and returns {amountInput, yearsInput, rateInput}. */

function getFormValues() {
  // console.log("amountInput:", amountInput.value, "yearsInput:", yearsInput.value, "rateInput:", rateInput.value);
  return {"amountInput": amountInput.value, "yearsInput": yearsInput.value, "rateInput": rateInput.value};
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amountInput, yearsInput, rateInput) {
  // console.log("amountInput:", amountInput.value, "yearsInput:", yearsInput.value, "rateInput:", rateInput.value);
  let monthlyPayment;
  let monthlyrate = rateInput / 12;
  let payments = yearsInput * 12;
  let numerator = amountInput * monthlyrate;
  let denominator = 1 - Math.pow((1+monthlyrate), -payments);
  monthlyPayment = (numerator / denominator).toFixed(2);
  return monthlyPayment;
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  let formValues = getFormValues();
  let calcPayment = document.getElementById("calc-monthly-payment");
  let payment = calcMonthlyPayment(formValues.amountInput, formValues.yearsInput, formValues.rateInput);
  calcPayment.innerText = payment;
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  amountInput.value = 500000;
  yearsInput.value = 30;
  rateInput.value = 0.035;
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);
