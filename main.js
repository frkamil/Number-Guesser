document.getElementById("btn").addEventListener("click", madlib);
document.getElementById("btn2").addEventListener("click", correctAns);
document.getElementById("btn3").addEventListener("click", wrongAns);

function madlib() {
  // INPUT
  let o1 = document.getElementById("1").value;
  let o2 = document.getElementById("2").value;
  let o3 = document.getElementById("3").value;
  let o4 = document.getElementById("4").value;
  let o5 = document.getElementById("5").value;
  let o6 = document.getElementById("6").value;
  let o7 = document.getElementById("7").value;
  let o8 = document.getElementById("8").value;
  let o9 = document.getElementById("9").value;
  let o10 = document.getElementById("10").value;
  let o11 = document.getElementById("11").value;
  let number = document.getElementById("Number").value;
  let msg = `${number}`;
  if (
    number &&
    o1 &&
    o2 &&
    o3 &&
    o4 &&
    o5 &&
    o6 &&
    o7 &&
    o8 &&
    o9 &&
    o10 &&
    o11
  ) {
    document.getElementById("output").innerHTML = msg;
  } else {
    alert("Please fill out all fields of information!");
  }
}

function correctAns() {
  prompt(
    "Yay! I'm so glad I guessed correctly! Did you enjoy this experience?"
  );
  prompt("Is there any way I can improve?");
  alert("Thank you for your feedback.");
}

function wrongAns() {
  prompt("Oh no! I'm sorry. Is there any way I can improve?");
  alert("Thank you for your feedback.");
}
