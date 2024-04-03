const messagesDiv = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
let userName = "";

function botResponse(userInput) {
  const greetings = ["hi", "hello"];
  const responses = ["Whatsup bro", "Hello dear"];

  if (greetings.includes(userInput.toLowerCase())) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else if (userInput.toLowerCase() === "how are you") {
    return "I am fine." || "I am good";
  } else if (userInput.toLowerCase() === "age") {
    return "I am 22.";
  } else if (userInput.toLowerCase() === "ok") {
    return "Cool Dear.";
    //namimg
  } else if (userInput.toLowerCase() === "what is your name") {
    return "I am Rubby. What is your name?";
  } else if (!userName) {
    userName = userInput; // Set user's name
    return "Hello " + userName;
  } else if (userInput.toLowerCase() === "bye") {
    return `Good bye ${userName + " See you next time" || "there"}.`;
  } else {
    return "Sorry, I didn't understand that";
  }
}

function sendMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("user-message");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messagesDiv.appendChild(messageDiv);
}

function handleUserInput() {
  const userInputText = userInput.value.trim();
  if (userInputText !== "") {
    sendMessage(userInputText, "User");
    userInput.value = "";
    setTimeout(() => {
      const botMessage = botResponse(userInputText);
      sendMessage(botMessage, "Bot");
    }, 500);
  }
}

sendButton.addEventListener("click", handleUserInput);

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});

handleUserInput(); // Greet the user initially
