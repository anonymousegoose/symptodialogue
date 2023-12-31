import { HeaderChat } from '@/components/chatHeader';
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { getChat, getUserData, readUserData, writeChat, writeUserData } from '@/utils/helper';
import { useRouter } from 'next/router';
import { Chat } from '@/components/chat';


export default function History() {
  const router = useRouter();
  const {query} = router || {};
  const {username} = query || {};
  let data: any[] = [];

  const [listChat, setListChat] = useState([]);

    const fetchData = async () => {
      const chatList = await getUserData(username);
      for (let i = 0; i < chatList.length; i++) {
        data.push(await getChat(chatList[i]))        
      }
      setListChat(data);
    }
    useEffect(() => {
      fetchData();
    }, [])
  return (
    <>
      <Head>
        <title>Show User</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', justifyContent: 'space-between', alignItems:'center'}}>
            <HeaderChat title={"History"} />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%', gap: 50}}>
              {listChat.map((x,i) => {
                return(
                  <Chat score={x?.score || ''} num={i} key={i} dateTime={new Date(x?.dateTime)}/>
                );
              })}
            </div>
            <HeaderChat title="Chat with Bot" onPress={() => router.push(`/chat?username=${username}`)} color={'gray'} button/>
        </div>
    </>
  )
}
