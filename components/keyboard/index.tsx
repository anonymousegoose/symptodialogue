import React from "react";
import { useDispatch } from "react-redux";
import { addToChat } from "@/store";

export const Keyboard = () => {

    const addText = () => {
        if(inputValue) {
            dispatch(addToChat({role:'user', content: inputValue}));
            setInputValue("");
        }
    }
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{ display: 'flex', background: 'green', height: 100, width: '100%'}}>
        <input 
            type="text" 
            name="name" 
            value={inputValue} 
            onChange={a => setInputValue(a.target.value)} 
            placeholder='Write your message here' 
            style={{ height: '100%', width: '70%', fontSize: 18, textIndent: 10}} 
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    addText();
                }
            }}
        />
        <button 
            style={{display: 'flex', height: '100%', width: '30%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#147efb'}}
            onClick={addText}
            >Send
        </button>
</div>
  );
};
