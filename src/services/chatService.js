import { addMessage, selectUser, setMessage } from "../features/user/userSlice";
import api from "../api/helplineApi";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { store } from "../app/store";

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
    const socket = new SockJS("http://localhost:8080/ws");
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => this.onConnected(this.onMessageReceived), this.onError);
  }

  onConnected() {
    console.log("Connected");
    const user = store.getState().user.user;
    this.stompClient.subscribe(`/user/${user.id}/queue/messages`, this.onMessageReceived);
    this.stompClient.subscribe(`/user/topic/public`, this.onMessageReceived);
  }


  onMessageReceived(payload) {
    debugger
    console.log('Message received', payload);
    const message = JSON.parse(payload.body);
    store.dispatch(addMessage(message.content));
  }

  async fetchMessages(selectedUser) {
    debugger
    const user = store.getState().user.user;
    const userChatResponse =  await api.get(`messages/${user.id}/${selectedUser}`);
    console.log(userChatResponse.data);
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

  onError(error) {
    console.log(error);
  }
}

export default ChatService;