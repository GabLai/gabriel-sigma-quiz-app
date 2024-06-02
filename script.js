function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "paris") {
    document.getElementById("result").innerHTML = "Correct!";
  } else{
    document.getElementById("result").innerHTML = "Incorrect!"
  }
}

function checkAnswer2() {
  const answer = document.getElementById("answer-input-2").value;
  if (answer.toLowerCase() == "yes") {
    document.getElementById("result2").innerHTML = "Maw you too!🫣";
  } else {
    document.getElementById("result2").innerHTML = "Okay! Both of us are handsome!🥹"
  }
}

function checkAnswer3() {
  const answer = document.getElementById("answer-input-3").value;
  if (answer.toLowerCase() == "yes") {
    document.getElementById("result3").innerHTML = "You are right!😎";
  } else {
    document.getElementById("result3").innerHTML = "Coding too bored?😡"
  }
}