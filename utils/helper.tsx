import { ChatCompletionRequestMessage } from "openai";
import { db } from "../config";
import { ref, set, onValue, get, query, orderByChild, equalTo  } from "firebase/database";

export const writeUserData = (username: string, password: string) => {
  set(ref(db, "users/" + username), {
    password: password,
    chat: [3156, 1343],
  });
};

export const readUserData = async () => {
    const users = query(ref(db, 'users/'), );
    const snapshot = await get(users);
    const data = await snapshot.val();
    return data;
  }

export const writeChat = async (userId: string, score: string, messages: ChatCompletionRequestMessage[]) => {
  const todayDate = new Date();
  const chatId = Math.floor(Math.random() * 5000)
  set(ref(db, "chat/" + chatId), {
    // chatId: chatId,
    userId: userId,
    score: score,
    dateTime: todayDate.toString(),
    messages: messages
  })
}

export const creatChat = async (userId: string, score: string, messages: ChatCompletionRequestMessage[]) => {
  const users = query(ref(db, 'chat/'), );
  const snapshot = await get(users);
  const data = await snapshot.val();
  return data;
}

export const getChat = async (chatid: string) => {
  const chat = ref(db, `chat/`);
  const snapshot = await get(chat);
  if(snapshot.exists()) {
    const chat = snapshot?.val()
    return chat;
  }
  return {};
}

export const getUserData = async (username: string) => {
  const users = ref(db, `users/${username}`);
  const snapshot = await get(users);
  if(snapshot.exists()) {
    const obj = snapshot?.val()
    const chat = obj?.chat || [];
    return chat;
  }
  return [];
}

export const login = async (username: string, password: string) => {
    const users = ref(db, `users/${username}`);
    const snapshot = await get(users);
    if(snapshot.exists()) {
      const obj = snapshot?.val()
      const pass = obj?.password || "";
      if(pass === password) {
        return true;
      }
    }
    return false;
  }
