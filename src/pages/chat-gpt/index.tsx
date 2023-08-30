import './index.scss'

const ChatGptPage: React.FC = () => {
  const chatList: string[] = [
    'new chat 1','new chat 2',
  ]
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
          <div className="right-question"></div>
        </div>
      </div>
    </div>
  )
}

export default ChatGptPage