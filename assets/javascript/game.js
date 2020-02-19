console.log("javascript loaded");
// Create an array of words
const words = ["superman", "spiderman", "black widow", "captain america"];

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