let userName = "";

function getBotResponse(input) {
  //["hi", "hello"]
  const greetings = ["hi", "hello", "hey"];
  const responses = [
    "Whatsup bro<br><img src='happy.gif' alt='Goodbye' width='50' height='50'>",
    "Hello dear<br><img src='happy.gif' alt='Goodbye' width='50' height='50'>",
  ];

  // Simple responses
  if (greetings.includes(input.toLowerCase())) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else if (input.toLowerCase().includes("name")) {
    return "I am Rubby. What is your name?";
  } else if (!userName) {
    userName = input; // Set user's name
    return "Hello " + userName;
  } else if (input.toLowerCase() === "bye") {
    return `Good bye ${userName + " ,See you next time...❤️" || "there"}.`;
  } else if (input == "❤️") {
    return "I Love You ❤️";
  } else {
    return "Try asking something else!";
  }
}
//return "Hello there!<br><img src='happy.gif' alt='Goodbye' width='50' height='50'>";
function botResponse(userInput) {
  const greetings = ["hi", "hello"];
  const responses = ["Whatsup bro", "Hello dear"];

  //else if (userInput.toLowerCase().includes("name")) {
  // response = "I am Rubby.";

  if (greetings.includes(userInput.toLowerCase())) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else if (userInput.toLowerCase().includes("how")) {
    return "I am fine." || "I am good";
  } else if (userInput.toLowerCase() === "age") {
    return "I am 22.";
  } else if (userInput.toLowerCase() === "cources") {
    return "HND, SE, AI";
  } else if (userInput.toLowerCase() === "ok") {
    return "Cool Dear.";
    //namimg
  } else if (userInput.toLowerCase().includes("name")) {
    return "I am Rubby. What is your name?";
  } else if (!userName) {
    userName = userInput; // Set user's name
    return "Hello " + userName;
  } else if (userInput.toLowerCase() === "bye") {
    return `Good bye ${userName + " ,See you next time...❤️" || "there"}.`;
  } else {
    return "Sorry, I didn't understand that";
  }
}
