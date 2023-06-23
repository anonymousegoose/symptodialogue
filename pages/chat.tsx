import { HeaderChat } from '@/components/chatHeader';
import { Keyboard } from '@/components/keyboard';
import { MessageList } from '@/components/messageList'
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';
import { addToChat } from "@/store";
import { useRouter } from 'next/router';
import { updateChat, writeChat } from '@/utils/helper';

export const ChatBot = async (mess: ChatCompletionRequestMessage[]): ChatCompletionRequestMessage => {
  try {
    const configuration = new Configuration({
      apiKey: "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",
    })
    
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: mess,
    });

    const completion_text = completion.data.choices[0].message?.content;
    const aiMessage: ChatCompletionRequestMessage = {role: 'assistant', content: completion_text || ""}
    return aiMessage;
  } catch (e) {
    console.log(`error: ${e}`);
    return {role:'user', content: 'error'};
  }
}

// const 

export default function Chat() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {query} = router || {};
  const {username} = query || {};
  const messages: ChatCompletionRequestMessage[] = useSelector((state: any) => state.message.value);

  const fetchChat = async () => {
    if(messages?.length === 0) {
      dispatch(addToChat({ role: "system", content: "I am patient visiting a medical professional for an appointment. My goal is to act as a patient presenting with common symptoms of illness. I have been programmed with randomized personas that include various characteristics, such as age, sexual orientation, ethnicity, cultural factors, sexual behavior, geographic location, and biological factors. Remember to consider the persona you are embodying, adapting your responses to reflect the unique circumstances, experiences, and backgrounds associated with that persona."} ))
    } else if(messages?.length === 1) {
      dispatch(addToChat({ role: "user", content: "I need training and some experience talking to some patients. Can you help me by acting as a patient in our conversation? When I say hello, please state your name and describe yourself along with any symptoms you have. There will be a 20% chance of finding out the patient has an STI, but only if I can diagnose correctly."}))
    } else if(messages?.length === 2) {
      dispatch(addToChat({ role: "assistant", content: "Hello, I am here for my doctor's appointment"}))
    } else {
      if(messages?.length !== 0) {
        if(messages[messages?.length - 1]?.role === 'user') {
          const aiMessage: ChatCompletionRequestMessage = await ChatBot(messages);
          dispatch(addToChat(aiMessage))
        }
      }
    }
  }

  useEffect(() => {
    fetchChat();
  }, [messages]);


  const next = async () => {
    const sl = messages?.slice(2);
    if(sl?.length !== 0) {
      const chatid = await writeChat(username,'10', sl);
    }
  }


  return (
    <>
      <Head>
        <title>Chatbot project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', justifyContent: 'space-between', alignItems:'center'}}>
            <HeaderChat title={"SympToDialog"} onPress2={next} />
            {messages && (
                <MessageList data={messages}/>
            )}
            <Keyboard />
        </div>
    </>
  )
}
