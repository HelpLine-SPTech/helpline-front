import { addMessage, addNotification, setMessage} from "../features/user/userSlice";
import { Stomp, StompConfig } from "@stomp/stompjs";
import { store } from "../app/store";

import Logo from "../assets/logo.svg";
import api from "../api/helplineApi";
import SockJS from "sockjs-client";
import dayjs from "dayjs";

class ChatService{
  static _instance;
  static stompClient;

  static get instance(){
    if(!this._instance){
      this._instance = new ChatService();
    }
    return this._instance;
  }

  connect() {
    const socket = new SockJS(`${process.env.REACT_APP_API_BASE_ENDPOINT}/ws`);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => this.onConnected(this.onMessageReceived), this.onError);
    console.log("Connected");
  }

  onConnected() {
    console.log("Connected");
    const user = store.getState().user.user;
    this.stompClient.subscribe(`/user/${user.id}/queue/messages`, this.onMessageReceived);
  }

  onMessageReceived(payload) {
    console.log('Message received', payload);
    const message = JSON.parse(payload.body);
    store.dispatch(addMessage(message.content));

    const notificationBody ={
      body: message.content,
      icon: Logo,
    }
    const notification = new Notification("Você tem uma nova mensagem!", notificationBody);
  }

  async fetchMessages(selectedUser) {
    const user = store.getState().user.user;
    await new Promise(resolve => setTimeout(resolve, 5000));
    const userChatResponse =  await api.get(`messages/${user.id}/${selectedUser}`);
    await store.dispatch(setMessage(userChatResponse.data));
    return userChatResponse;
  }

  sendMessage(content, recipientId){
    const user = store.getState().user.user;
    if (content && this.stompClient) {
      const chatMessage = {
        senderId: user.id,
        recipientId: recipientId,
        content: content,
        timestamp: new Date(),
      };
      this.stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
      return this.fetchMessages(recipientId);
    }
  }

  getHours(timestamp) {
    const date = dayjs(timestamp).format('HH:mm');
    return date;
  }

  onError(error) {
    console.log(error);
  }
}

export default ChatService;