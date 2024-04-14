let userName = "";
let userState = false;

function getBotResponse(input) {
  //["hi", "hello"]
  const mainCommands = ["age", "course", "meet", "how", "ok", "name", "bye"];

  const greetings = [
    "hi",
    "hello",
    "hey",
    "hey hey",
    "whatsup",
    "hii",
    "hello hi",
    "hi hello",
  ];
  const responses = [
    "Whatsup bro<br><img src='asset/emote.gif' alt='' width='50' height='50'>",
    "Hello dear<br><img src='asset/emote.gif' alt='' width='50' height='50'>",
    "Hello, Nice to meet you...<br><img src='asset/emote.gif' alt='' width='50' height='50'>",
  ];
  const HowYouResponses = ["I am Good dear😊", "Fine😊", "Good😊"];
  const OkResponses = ["Cool😎", "Ok dear👍", "Good dear👍"];

  // Simple responses
  if (greetings.includes(input)) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else if (input.includes(mainCommands[0])) {
    return "I am 22.";
  } else if (input.includes(mainCommands[1])) {
    return "1.HND<br><br>2.SE<br><br>3.AI";
  } else if (input.includes(mainCommands[2])) {
    return "Nice to meet you too...😊";
  } else if (input.includes(mainCommands[3])) {
    return HowYouResponses[Math.floor(Math.random() * responses.length)];
  } else if (input.includes(mainCommands[4])) {
    return OkResponses[Math.floor(Math.random() * responses.length)];
  } else if (input == "❤️") {
    return "<img src='asset/heart2.gif' alt='' width='50' height='50'>";
    // name
  } else if (input.includes(mainCommands[5])) {
    userState = true;
    return "I am Eva 🤖, What is your name?";
  } else if (!mainCommands.includes(input) && userState) {
    userName = input; // Set user's name
    return "Hello " + userName + ", Nice to meet you...😊";
  } else if (input.includes(mainCommands[6])) {
    if (userName !== '' && userState) {
      userState = false;
      return `Good bye ${userName + " 👋<br>See you next time...❤️" || "there"}.`;
    }
    userName = '';
  } else {
    return "Try asking something else!";
  }
}
//return "Hello there!<br><img src='happy.gif' alt='Goodbye' width='50' height='50'>";
