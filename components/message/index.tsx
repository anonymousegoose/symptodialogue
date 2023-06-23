import { ChatCompletionRequestMessage } from "openai";
import React from "react";

export const Message = (props: ChatCompletionRequestMessage) => {
    const { role, content } = props || {};
    const color = role === 'assistant' ? '#e7e9ee' : 'blue';
    const textColor = role === 'assistant' ? 'black' : 'white';
    // const color = 'green';
    const alignment = role === 'assistant' ? 'flex-start' : 'flex-end';
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: 20, justifyContent: alignment }}>
        {/* {role === 'assistant' && (
            <div style={{ display: 'flex', height: 50, width: 50, borderRadius: 100, background: '#d0d0d5', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ fontSize: 30 }}>B</div>
            </div>
        )} */}
        <div style={{ display: 'flex', flex: 1, borderRadius: 10, background: color, alignItems: 'center' , maxWidth: '75%'}}>
            <div style={{ display: 'flex', color: textColor, padding: 10, wordBreak: 'break-word'}}>{content}</div>
        </div>
        {/* {role === 'user' && (
            <div style={{ display: 'flex', height: 50, width: 50, borderRadius: 100, background: '#d0d0d5', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ fontSize: 30 }}>M</div>
            </div>
        )} */}
    </div>
  );
};
