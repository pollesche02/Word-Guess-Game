console.log("javascript loaded");
// Create an array of words
const words = ["superman", "spiderman", "black widow", "captain america" , "iront man" , "hulk" , "flash"];

//  object : name: image
// choose words randomly
let randNum; 
let choosenWord;
let rightword;
let wrongword;
let underscore;
let remains;

//check work above

// Create underscores based on length of word
let generateUnderscore = () => {
  for (let i = 0; i < choosenWord.length; i++) {
      if (choosenWord[i] === " "){
          underscore.push(" ")
      }
      else{
         underscore.push("_");
      }
  }
  console.log(underscore);
  return underscore;
};


// Get users guess
document.addEventListener("keypress", event => {
  let userKey = event.key.toLowerCase();
  console.log(userKey);

  // If users guess is right
  if (choosenWord.indexOf(userKey) > -1) {
    console.log(true);
    // add to right words array
    rightword.push(userKey);
    document.getElementById("right").textContent = rightword;
    for (var i = 0; i < choosenWord.length; i++) {
      if (choosenWord[i] === userKey) {
        underscore[i] = userKey;
      }
    }
    //show the info on the screen
    document.getElementById("underscore").textContent = underscore;
    if (underscore.join("") == choosenWord) {
      alert("You Win");
      document.getElementById("image").innerHTML=`<img src="./assets/images/${words[randNum]}.jpg">`
      play()
    }
  } else {
    wrongword.push(userKey);
    document.getElementById("wrong").textContent = wrongword;
    remains--;
    document.getElementById("remains").textContent = remains
    if (remains === 0) {
      alert("you loose, click to play again ");
      play()
    }
  }
});
// Check if guess is right
// If right push to right answer
// If wrong push to wrong answer

function play(){
     randNum = Math.floor(Math.random() * words.length);
     choosenWord = words[randNum];
     rightword = [];
     wrongword = [];
     underscore = [];
     remains = 10;
     document.getElementById("underscore").textContent = generateUnderscore();
     document.getElementById("underscore").textContent = underscore;
     document.getElementById("right").textContent = rightword;
     document.getElementById("wrong").textContent = wrongword;
    
     console.log(choosenWord)

}
play()