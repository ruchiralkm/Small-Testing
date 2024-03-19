import java.util.Scanner;

public class Bot {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String userInput;

        System.out.println("Hello! I'm your simple chatbot. How can I assist you today?");

        do {
            // Read user input
            System.out.print("You: ");
            userInput = scanner.nextLine();

            // Respond based on user input
            String botResponse = getBotResponse(userInput);
            System.out.println("Bot: " + botResponse);

        } while (!userInput.equalsIgnoreCase("bye"));

        System.out.println("Bot: Goodbye! Have a great day.");
        scanner.close();
    }

    // Method to provide responses based on user input
    private static String getBotResponse(String userInput) {
        String response;
        switch (userInput.toLowerCase()) {
            case "hi":
            case "hello":
                response = "Hi there! How can I help you?";
                break;
            case "how are you":
                response = "I'm just a simple chatbot, but thanks for asking!";
                break;
            case "bye":
                response = "Goodbye!";
                break;
            default:
                response = "I'm sorry, I didn't understand that. Can you please repeat?";
        }
        return response;
    }
}
