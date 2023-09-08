import { openai } from './init-openai'
// const userMessage: OpenAI.Chat.ChatCompletionMessage

// Old
// const chatCompletion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{role: "user", content: "Hello world"}],
// });
// console.log(chatCompletion.data.choices[0].message);

// 创建聊天
const createChatCompletion = async () => {
  // --- Old --- 
  // const chatCompletion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [{role: "user", content: "Hello world"}],
  // });
  // console.log(chatCompletion.data.choices[0].message);

  // --- New ---
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ "role": "user", "content": "Hello!" }],
  });
  console.log(chatCompletion.choices[0].message);
}

// 创建流式聊天(新)
const createStreamChatCompletion = async () => {
  const streamChatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ "role": "user", "content": "Hello!" }],
    stream: true,
  });
  for await (const part of streamChatCompletion) {
    console.log(part.choices[0].delta);
  }
}

// 创建完成
const CreatingCompletion = async () => {
  // --- Old --- 
  // const completion = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "This story begins",
  //   max_tokens: 30,
  // });
  // console.log(completion.data.choices[0].text);
  // --- New ---
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "This story begins",
    max_tokens: 30,
  });
  console.log(completion.choices[0].text);
}

// 创建流式完成(新)
const CreatingSteamCompletion = async () => {
  const stream = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "This story begins",
    max_tokens: 30,
    stream: true,
  });
  for await (const part of stream) {
    console.log(part.choices[0]);
  }
}

// 创建转录
const createTranscription = () => {
  // --- Old ---
  // const response = await openai.createTranscription(
  //   fs.createReadStream("audio.mp3"),
  //   "whisper-1"
  // );

  // --- New ---
  // const response = await openai.audio.transcriptions.create({
  //   model: 'whisper-1',
  //   file: fs.createReadStream('audio.mp3'),
  // });
}

export {
  createChatCompletion,
  createStreamChatCompletion,
  CreatingCompletion,
  CreatingSteamCompletion
}