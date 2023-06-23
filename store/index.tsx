import { PayloadAction, configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { ChatCompletionRequestMessage } from 'openai'

interface myState {
   value: ChatCompletionRequestMessage[]
}

const initialState = {
   value: [],
} as myState

export const counterSlice = createSlice({
   name:"message",
   initialState,
   reducers:{
      addToChat: (state, action: PayloadAction<ChatCompletionRequestMessage>) => {
         state.value.push(action.payload)
      }
   }
})

// config the store 
const store = configureStore({
   reducer: {
      message: counterSlice.reducer,
   },
})

// export default the store 
export default store

export const { addToChat } = counterSlice.actions;
