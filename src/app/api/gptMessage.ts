/**
 * 使用 OpenAI SDK 或向 OpenAI API 发送 HTTP 请求，为我们与 AI 的“会话”生成新消息。在本教程中我们将直接调用 API。
 */
import { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'

type ChatCompletionMessage = OpenAI.Chat.ChatCompletionMessage

const createGptMessage = async (
  messages: Array<ChatCompletionMessage>,
) => {
  const apiKey = process.env.OPENAI_API_KEY
  const url = 'https://api.openai.com/v1/chat/completions'

  const body = JSON.stringify({
    model: 'gpt-3.5-turbo',
    stream: false,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    })
    const data = await response.json()
    console.log('gpt', data);

  } catch (error: any) {
    console.log('gpt-error', error.message);

  }
}

// const sendGptMessage = async (messages: any[]) => {
//   try {
//     const response = await fetch('/api/createMessage', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ messages }),
//     })

//     return await response.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

export default { createGptMessage }