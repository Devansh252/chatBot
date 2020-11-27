const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "I am good, Tum apna batao yaar, buss lockdown mei bore hoota hou !",
  "Kuch nahi busss, Bore horaha, yaar",
  "I am soo Goood, due to lockdown !",
];

const weather = [
  "Ask you Google Assistant or Siri, well i preferes Google Assistant",
  "I am not answering that, check your home screen simply ! ",
  " Aur kuch Puuch bhai , yeh nahi pata buss",
];

const devansh = [
  "I guess you better know him, i don't know much about him because i was built on 27 November 2020",
  "Devansh is a humble guy !",
  "He is your friend ! and he likes to code in python!",
];

const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Voice is activated, you can use microphone");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I don't know !";
  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes("what is the weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  } else if (message.includes("who is Devansh")) {
    const finalText = devansh[Math.floor(Math.random() * devansh.length)];
    speech.text = finalText;
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
