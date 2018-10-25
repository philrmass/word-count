//??? try this
/*
// module.mjs
export function hello() {
  return "Hello";
}
// main.mjs
import { hello } from 'module'; // or './module'
let val = hello();  // val is "Hello";
*/


//function setFileText(filePath) {
//  console.log("set ", filePath);
  /*

  var client = new XMLHttpRequest();
  client.onload = setWordsText;
  client.open("GET", "file://" + filePath);
  client.send();
  */
  /*
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("words-text").innerHTML =
      this.getAllResponseHeaders();
    }
  };
  xhttp.open("GET", "file://cat.txt", true);
  xhttp.send();
  */
//}

function addWordCount(parent, word, count) {
    let wordNode = document.createElement("li");
    let wordText = document.createTextNode(word);
    let countNode = document.createElement("span");
    let countText = document.createTextNode(count);

    wordNode.appendChild(wordText);
    countNode.appendChild(countText);
    wordNode.appendChild(countNode);
    parent.appendChild(wordNode);
}


function setWordsText() {
  let wordsText = document.getElementById("words-text");
  console.log("handler got it");
}

document.addEventListener("DOMContentLoaded", function() {
  let declaration = document.getElementById("declaration");
  let gettysburg = document.getElementById("gettysburg");
  let catHat = document.getElementById("cat-hat");
  let wordsText = document.getElementById("words-text");
  let count = document.getElementById("count");
  let wordCounts = document.getElementById("word-counts");

  declaration.onclick = function() {
    //??? import function, get string from it
    wordsTxt.value = "declaration";
  };
  gettysburg.onclick = function() {
    wordsText.value = "gettysburg";
  }
  catHat.onclick = function() {
    wordsTxt.value = "cat-hat";
  };

  count.onclick = function() {
    addWordCount(wordCounts, "hello", 24);
  }
});
