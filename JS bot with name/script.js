const messagesDiv = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
let userName = "";

function botResponse(userInput) {
  const greetings = ["hi", "hello"];
  const responses = ["hi hello", "hello dear"];

  if (greetings.includes(userInput.toLowerCase())) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else if (userInput.toLowerCase() === "what is your name") {
    return "I am rubby. What is your name.";
  } else if (userInput.toLowerCase().startsWith("my name is ")) {
    userName = userInput.slice(11);
    return "Cool.";
  } else if (userInput.toLowerCase() === "how are you") {
    return "I am fine." && "I am good";
  } else if (userInput.toLowerCase() === "bye") {
    return `Goodbye ${userName || "there"}.`;
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
