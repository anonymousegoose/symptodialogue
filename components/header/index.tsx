import React from "react";

interface HeaderChatProps {
    title: string;
}

export const HeaderChat = (props: HeaderChatProps) => {
    const { title } = props || {};
  return (
    <div style={{ display: 'flex', height: 50, width: '100%', background: '#d0d0d5', alignItems: 'center', justifyContent: 'center'}}>
        <div>{title}</div>
    </div>
  );
};
