import React from "react";

interface HeaderChatProps {
    title: string;
    onPress?: () => void;
    onPress2?: () => void;
    color?: string;
    button?: boolean;
}

export const HeaderChat = (props: HeaderChatProps) => {
    const { title, onPress, color = '#d0d0d5', onPress2, button = false } = props || {};
  return (
    <div style={{ display: 'flex', height: 50, width: '100%', background: color, alignItems: 'center', justifyContent: 'center', borderRadius: button ? 40 : 0, margin: button ? 20 : 0}} onClick={() => onPress ? onPress() : null}>
        <div>{title}</div>
        {onPress2 ? (<div style={{ marginLeft: 10, border: '1px solid black', borderRadius: 40, padding: 10}} onClick={() => onPress2()}>save chat</div>) : null}
    </div>
  );
};
