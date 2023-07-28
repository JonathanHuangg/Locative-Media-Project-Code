document.addEventListener('DOMContentLoaded', () => {

  let prompts = ["Beyond the stone, how much purple do you see?", //1
  "We cover a wide range of crimes. What's the biggest?", //2
  //3 Dead shayne
  "Striking metal, behind is back. What weapon or tool? (keep first letter uppercase)", //4
  "The plaque was very interesting! I like how it ended especially!", //5
  "The last post by the Paradox plotters. They seem to LIKE posting about their crimes." 
  ]; 
                //1     2       4     //5
  let answers = ["5", "20", "Sword", "71", "3262"];
  let links = ["https://www.google.com/maps/d/u/0/edit?mid=1Sv99-NeYGy7ukTUb5Xjg9VCevtgymyo&usp=sharing", // 2
  "https://www.google.com/maps/d/u/0/edit?mid=1HfeYvTNngEMxyvgUVXwnkXEicbbxPrI&usp=sharing", // 3
  "https://www.google.com/maps/d/u/0/edit?mid=1k-SP4Gwtn0R-1nfqyEtJRgyIygxzCoY&usp=sharing",
  "https://www.google.com/maps/d/u/0/edit?mid=1s3rG1hkxt9fxKyGGfhGQ3Tt9SlKWlnI&usp=sharing"
  ]
  let progression = 0 //Will increment as events progress


  //Set up variables for changeText
  const questionElement = document.getElementById("Question");
  const changeTextButton = document.getElementById("SubmitButton");
  const textInput = document.getElementById("AnswerBox");

  //Set up variables for changeImage
  const bombImg = document.getElementById("bomb");

  //Set up variable for changeLink
  const myLink = document.getElementById("myLink");

  //Changing question Upon Correct
  function changeText() {
    const requiredValue = answers[progression];
    const enteredValue = textInput.value.trim();  

    if (requiredValue == enteredValue) {
      myLink.style.display = 'inline';

      changeLink();
      if (progression == 4) {
        questionElement.textContent = "YOU HAVE SUCCEEDED! THANKS FOR PLAYING!";
        textInput.value = '';
      } else {
        const newText = prompts[++progression];
        questionElement.textContent = newText;
        textInput.value = '';
      }

      changeImage();

    } else if (progression == 4) {
      questionElement.textContent = "BOOOOOOOOM! YOU LOSE!!!!!!"
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

  function changeLink() {
      myLink.href = links[progression];
  }
});





