document.addEventListener('DOMContentLoaded', () => {

  let prompts = ["Beyond the stone, how much purple do you see?", //1
  "We cover a wide range of crimes. What's the biggest?", //2
  //3 Dead shayne
  "Striking metal, behind is back. What weapon or tool? (keep first letter uppercase)", //4
  "The plaque was very interesting! I like how it ended especially!", //5
  "You did it! Now go defuse the bomb!" 
  ]; 
                //1     2       4     //5
  let answers = ["5", "20", "Sword", "71"];
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





