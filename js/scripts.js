document.addEventListener("DOMContentLoaded", function() {
  let declaration = document.getElementById("declaration");
  let gettysburg = document.getElementById("gettysburg");
  let catHat = document.getElementById("cat-hat")
  let text = document.getElementById("text");
  let count = document.getElementById("count");
  let wordCounts = document.getElementById("word-counts");

  declaration.onclick = function() {
    console.log("declaration");
    text.value = "declaration";
  };
  gettysburg.onclick = function() {
    console.log("gettysburg")
    text.value = "gettysburg";
  }
  catHat.onclick = function() {
    console.log("cat-hat");
    text.value = "cat-hat";
  };

  count.onclick = function() {
    console.log("count words");
    let word = "hello"
    let count = 24;
    let wordNode = document.createElement("li");
    let wordText = document.createTextNode(word);
    let countNode = document.createElement("span");
    let countText = document.createTextNode(count);

    wordNode.appendChild(wordText);
    countNode.appendChild(countText);
    wordNode.appendChild(countNode);
    wordCounts.appendChild(wordNode);
  }
});
