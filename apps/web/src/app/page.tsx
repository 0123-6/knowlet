"use client"

import {useChat} from "@ai-sdk/react";
import {useState} from "react";

export default function Home() {

  const [chatList, setChatList] = useState<any[]>([])
  const [question, setQuestion] = useState<string>('')
  const changeQuestion = (value: string) => {
    setQuestion(value)
  }

  const chat = useChat({})

  const clickButton = async () => {
    await chat.sendMessage({
      text: question,
    })
    setQuestion('')
  }

  return (
    <div className={'w-dvw h-dvh flex flex-col'}>
      <div className={'w-full h-100 bg-red-500'}>
        {
          chatList.length
        }
      </div>
      <div className={'w-full h-20 flex items-center'}>
        <input
          value={question}
          onChange={event => changeQuestion(event.target.value)}
        />
        <button onClick={clickButton}>发送</button>
      </div>
      <div>
        <span>{JSON.stringify(chat.messages)}</span>
      </div>
    </div>
  );
}
