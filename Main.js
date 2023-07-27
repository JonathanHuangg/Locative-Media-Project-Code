document.addEventListener('DOMContentLoaded', () => {
  /*
  let prompts = ["Beyond the stone, how much purple do you see?", //1
  "We cover a wide range of crimes. What's the biggest?", //2
  //3 Dead shayne
  "Striking metal, behind is back. What weapon or tool? (keep it lowercase)"]; //4
  //1  2   4
  let answers = ["5", "20", "sword"];
  let progression = 0 //Will increment as events progress
  */

  let prompts = [
  "Which group deserves the top grade with the best project?", //2
  //3 Dead shayne
  "Which group has the best website?",
  "Congrats, you passed!", "Who is Nitsche's favorite student?"]; //4
  //1  2   4
  let answers = ["This one", "This one", "Jonathan"];
  let progression = 0 //Will increment as events progress


  //Set up variables for changeText
  const questionElement = document.getElementById("Question");
  const changeTextButton = document.getElementById("SubmitButton");
  const textInput = document.getElementById("AnswerBox");

  //Set up variables for changeImage
  const bombImg = document.getElementById("bomb");

  //Changing question Upon Correct
  function changeText() {
    const requiredValue = answers[progression];
    const enteredValue = textInput.value.trim();    

    if (requiredValue == enteredValue) {
      const newText = prompts[++progression];
      questionElement.textContent = newText;
      textInput.value = '';
      changeImage();
    }
  }

  changeTextButton.addEventListener("click", changeText);


  function changeImage() {
    const oldSrc = bombImg.src;
    bombImg.src = "/Images/Nuke.png";

    setTimeout(function () {
      bombImg.src = oldSrc;
    }, 1500)
  };
});





