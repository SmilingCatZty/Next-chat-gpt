import './index.scss'
import { createChatCompletion } from '@/src/utils/openai/create-openai-completion'
import { Avatar, Input } from 'antd';
import { UserOutlined, ChromeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { MessageInfoModel } from '@/src/models/message.model'

const { TextArea } = Input;

const ChatGptPage: React.FC = () => {
  const [sceneList, setSceneList] = useState<string[]>([
    'new chat 1', 'new chat 2',
  ])

  const [messageList, setMessageList] = useState<MessageInfoModel[]>([
    { _id: '000', user_text: '你好啊1', gpt_response: '你好,我是gpt1', user: 'zty' },
    { _id: '001', user_text: '你好啊2', gpt_response: '你好,我是gpt2', user: 'zty' },
    { _id: '002', user_text: '你好啊3', gpt_response: '你好,我是gpt3', user: 'zty' },
    { _id: '003', user_text: '你好啊4', gpt_response: '你好,我是gpt4', user: 'zty' },
    { _id: '002', user_text: '你好啊5', gpt_response: '你好,我是gpt5', user: 'zty' },
    { _id: '003', user_text: '你好啊6', gpt_response: '你好,我是gpt6', user: 'zty' }
  ])

  const [value, setValue] = useState('');


  const sendMsg = () => {
    createChatCompletion()
    console.log(process.env.OPENAI_API_KEY);
  }
  return (
    <div className="page">
      <div className="page-box">
        {/* 左侧场景、个人信息栏 */}
        <div className="box-left">
          {sceneList.map((scene, idx) => (
            <div className='left-contain' key={idx}>{scene}</div>
          ))}
        </div>
        {/* 右侧聊天栏 */}
        <div className="box-right">
          {/* 右侧回答区间 */}
          <div className="right-answer">
            <div className='answer-box'>
              {messageList.map((message, idx) => {
                return (
                  <div className='box-msg' key={idx}>
                    <div className='msg-user'>
                      <div className='user-avatar'>
                        <Avatar size={40} icon={<UserOutlined />} />
                      </div>
                      <div className='user-text'>{message.user_text}</div>
                    </div>
                    <div className='msg-gpt'>
                      <div className='gpt-text'>{message.gpt_response}</div>
                      <div className='gpt-avatar'>
                        <Avatar size={40} icon={<ChromeOutlined />} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 右侧提问区间 */}
          <div className="right-question">
            <div className='question-box'>
              <div className='question-input'>
                <TextArea
                  value={value}
                  bordered={false}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 2, maxRows: 5 }}
                />
              </div>
              <div className='question-send'>
                <div className='test'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatGptPage