import axios from "axios";

const openAIKey = ""; // Replace with your actual OpenAI API key

export const getOpenAIResponse = async (input: string): Promise<string> => {
  const url = "https://api.openai.com/v1/completions";
  const maxTokens = 1000; // Adjust the response length as needed

  try {
    const response = await axios.post(
      url,
      {
        prompt: `Summarrize the story called ${input}`,
        max_tokens: maxTokens,
        model: "text-davinci-003",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIKey}`,
        },
      }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim();
    }
  } catch (error) {
    console.error("Error making OpenAI API request:", error);
  }

  return "";
};
