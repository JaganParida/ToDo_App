let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  ul.appendChild(item);
  item.innerText = inp.value;
  inp.value = "";

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  item.appendChild(delbtn);
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("delete");
  } else {
    console.log("don't delete");
  }
});

const micButton = document.querySelector("i");
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

micButton.addEventListener("click", () => {
  if (recognition.listening) {
    recognition.stop();
  } else {
    recognition.start();
    micButton.style.color = "blue";
  }
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  inp.value += transcript;
};

// Your function to process the recognized text
function yourFunction(text) {
  // Implement your desired logic here
  console.log("Recognized text:", text);
}
