import OpenAI from 'openai';

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  apiKey: 'u9LnHLzR7SuHbFVccNCTT3BlbkFJZN2v27LEZwEHVDjrNPx8',
  dangerouslyAllowBrowser: true
});

// const userMessage: OpenAI.Chat.ChatCompletionMessage

export {
  openai
}
