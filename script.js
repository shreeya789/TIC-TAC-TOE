const fields = document.getElementsByClassName("field"); //array

let turn = true;

function setX(element) {
  element.style.background = "yellow";
  element.textContent = "X";
}
function setO(element) {
  element.style.background = "royalblue";
  element.textContent = "O";
}
for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", () => {
    if (turn == true) {
      if (fields[i].textContent == "O") {
        setO(fields[i]);
      } else {
        setX(fields[i]);
      }
      turn = false;
      checkWinner();
    } else if (turn == false) {
      if (fields[i].textContent == "X") {
        setX(fields[i]);
      } else {
        setO(fields[i]);
      }
      turn = true;
      checkWinner();
    }
  });
}

function Xwin(index1, index2, index3) {
  if (
    fields[index1].textContent == "X" &&
    fields[index2].textContent == "X" &&
    fields[index3].textContent == "X"
  ) {
    return true;
  } else {
    return false;
  }
}
function Owin(index1, index2, index3) {
  if (
    fields[index1].textContent == "O" &&
    fields[index2].textContent == "O" &&
    fields[index3].textContent == "O"
  ) {
    return true;
  } else {
    return false;
  }
}

function checkWinner() {
  if (
    Xwin(0, 1, 2) ||
    Xwin(3, 4, 5) ||
    Xwin(6, 7, 8) ||
    Xwin(0, 3, 6) ||
    Xwin(1, 4, 7) ||
    Xwin(2, 5, 8) ||
    Xwin(0, 4, 8) ||
    Xwin(2, 4, 6)
  ) {
    const result = document.getElementById("result");
    result.textContent = "X WINS !!";
    result.style.color = "crimson";
  } else if (
    Owin(0, 1, 2) ||
    Owin(3, 4, 5) ||
    Owin(6, 7, 8) ||
    Owin(0, 3, 6) ||
    Owin(1, 4, 7) ||
    Owin(2, 5, 8) ||
    Owin(0, 4, 8) ||
    Owin(2, 4, 6)
  ) {
    const result = document.getElementById("result");
    result.textContent = "O WINS !!";
    result.style.color = "royalblue";
  }
}
