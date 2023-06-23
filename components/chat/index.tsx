import React from "react";

interface chatProps {
    num?: number;
    dateTime?: Date;
    messages?: string[];
    score: string;
    userId?: string;
}

export const Chat = (props: chatProps) => {
    const { dateTime, messages, score, userId, num = 0 } = props || {};
    // const realDate = () => {
    //     const year = dateTime?.getFullYear() || 0;
    //     const day = dateTime?.getDay() || 0;
    //     const month = dateTime?.getMonth() || 0;
    //     return `${month+1}/${day}/${year}`;
    // }
  return (
    <div style={{ width: '100%', height: '10px', borderTop: '1px black solid'}}>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
            <div style={{ display: 'flex', color: 'black', padding: 10}}>Patient #{num + 1}</div>
            <div style={{ display: 'flex', color: 'black', padding: 10}}>{score}/10</div>
            {/* { dateTime && <div style={{ display: 'flex', color: 'black', padding: 10, wordBreak: 'break-all'}}>{realDate()}</div>} */}
        </div>

    </div>
  );
};
