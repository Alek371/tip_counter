const errorTip = document.querySelector(".bill_bar");
const tip_amount = document.querySelector(".bill_amount");
const buttonTipPercent = document.getElementsByClassName("button_tip_percent");
const custome = document.querySelector(".tip_custome");
const persons_amount = document.querySelector(".people_count");
const titAmount = document.querySelector(".amount_tip");
const billTotal = document.querySelector(".amount_total");
const reset = document.querySelector(".reset");
const errorText = document.querySelector(".error-text");
const errorBorderPe = document.querySelector(".people_bar");

console.log(buttonTipPercent);

function checkBill() {
  if (tip_amount.value != 0) {
    errorTip.classList.remove("error_container");
    errorTip.classList.add("correct");
    tip_amount.classList.add("opacity");
  } else {
    errorTip.classList.add("error_container");
    errorTip.classList.remove("correct");
    tip_amount.classList.remove("opacity");
  }
}

function checkPeople() {
  if (persons_amount.value == 0) {
    errorText.classList.remove("hidden");
    errorBorderPe.classList.add("error_container");
    errorBorderPe.classList.remove("correct");
    persons_amount.classList.remove("opacity");
  } else {
    errorText.classList.add("hidden");
    errorBorderPe.classList.remove("error_container");
    errorBorderPe.classList.add("correct");
    persons_amount.classList.add("opacity");
  }
}

custome.addEventListener("input", CheckTip);

function CheckTip() {
  if (custome.value > 100) {
    custome.value = 100;
  }
}
custome.addEventListener("input", Count);

persons_amount.addEventListener("input", checkPeople);

tip_amount.addEventListener("input", checkBill);

for (let i = 0; i < buttonTipPercent.length; i++) {
  buttonTipPercent[i].addEventListener("click", Count);
}

function Count(e) {
  if (e.target.id === "custom" && e.target.value === "") {
    return;
  }
  var tip = e.target.value;
  if (persons_amount.value == "0" || tip_amount.value == "0") {
    alert("The filed are con't be 0");
  } else if (
    tip !== "" &&
    persons_amount.value !== "" &&
    tip_amount.value !== ""
  ) {
    var tipAmount = parseFloat(tip_amount.value);
    var tipPercent = parseInt(tip);
    var personAmount = parseInt(persons_amount.value);
    var TipCount;
    var TipCountPerPerson = 0;
    var TotalBillCount;
    var TotalBillCountPerPerson = 0;
    TipCount = tipAmount * (tipPercent / 100);
    TipCountPerPerson = TipCount / personAmount;
    TotalBillCount = TipCount + tipAmount;
    TotalBillCountPerPerson = TotalBillCount / personAmount;
    titAmount.innerHTML = "$" + TipCountPerPerson.toFixed(2);
    billTotal.innerHTML = "$" + TotalBillCountPerPerson.toFixed(2);
    reset.classList.add("active");
  }
}

reset.addEventListener("click", () => {
  tip_amount.value = "";
  custome.value = "";
  persons_amount.value = "";
  titAmount.innerText = "$0.00";
  billTotal.innerText = "$0.00";
  reset.classList.remove("active");
});
