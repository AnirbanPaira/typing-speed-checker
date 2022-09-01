const setOfWords = [
  "The virus that causes COVID-19 is in a family of viruses called Coronaviridae.",
  "Antibiotics do not work against viruses.",
  "Some people who become ill with COVID-19 can also develop a bacterial infection as a complication.",
  "In this case, antibiotics may be recommended by a health care provider.",
];

const msg = document.getElementById("msg");
const mywords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endtime;

const playGame = () => {
  mywords.value = "";
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  //   console.log(randomNumber);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};
const endplay = () => {
  let date = new Date();
  endtime = date.getTime();
  let totalTime = (endtime - startTime) / 1000;
  console.log(totalTime);

  let totalStr = mywords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.floor((wordCount / totalTime) * 60);

  let finalMsd = "You typed total at " + speed + " words per minutes";
  msg.innerText = finalMsd;
  finalMsd += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsd;
};

const compareWords = (str1, str2) => {
  let word1 = str1.split(" ");
  let word2 = str2.split(" ");
  let cnt = 0;

  word1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });
  let errrorWords = word1.length - cnt;
  return (
    cnt +
    "correct out of" +
    word1.length +
    "words and the total number of errors are" +
    errrorWords +
    " . "
  );
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};
btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    mywords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    mywords.disabled = true;
    btn.innerText = "Start";
    endplay();
  }
});
