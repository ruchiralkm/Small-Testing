function getBotResponse(input) {
  // Simple responses
  if (input == "hello") {
    return "Hello there!\n\nwhatsup";
  } else if (input == "goodbye") {
    return "<img src='happy.gif' alt='Goodbye' width='50' height='50'>";
  } else if (input == "❤️") {
    return "I Love You ❤️";
  } else {
    return "Try asking something else!";
  }
}
