import { env } from 'process'
import './index.scss'
import { createChatCompletion } from '@/src/utils/openai/create-openai-completion'

const ChatGptPage: React.FC = () => {
  const chatList: string[] = [
    'new chat 1','new chat 2',
  ]

  const sendMsg = () => {
    createChatCompletion()
    console.log(process.env.OPENAI_API_KEY);
    
  }
  return (
    <div className="page">
      <div className="page-box">
        <div className="box-left">
          {chatList.map((chat,idx) => (
            <div className='left-contain' key={idx}>{ chat }</div>
          ))}
        </div>
        <div className="box-right">
          <div className="right-answer"></div>
          <div className="right-question">
            <button onClick={()=>sendMsg()}>发送消息</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatGptPage