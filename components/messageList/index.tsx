import React from "react";
import {Message} from '@/components/message'
import {ChatCompletionRequestMessage} from "openai";

interface MessageListProps {
    data: ChatCompletionRequestMessage[]
}

export const MessageList = (props: MessageListProps) => {
    const { data } = props || {};
  return (
    <div style={{ maxWidth: 800, width:'100%', display: 'flex', flexDirection: 'column', alignContent:'center', overflowY: 'auto'}}>
        {data && data?.slice(3)?.map((x) => {
            return (
                <Message role={x?.role} content={x?.content} key={1} />
            )
        })}
    </div>
  );
};
