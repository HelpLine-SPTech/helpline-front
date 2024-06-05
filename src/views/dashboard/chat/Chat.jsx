import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatService from "../../../services/chatService";
import DashboardSideBar from "../../../components/Dashboard/DashboardSideBar";
import AbaConversa from "../../../components/ChatRoom/AbaConversa/AbaConversa";
import { selectMessages, selectUser } from "../../../features/user/userSlice";

import "./Chat.css";
import { store } from "../../../app/store";

export const ChatContext = React.createContext();

function Chat() {
  const chatService = ChatService.instance;
  const [selectedUser, setSelectedUser] = useState("");
  const user = useSelector(selectUser);
  const getMessages = useSelector(selectMessages);

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages(getMessages);
  } , [selectedUser, messages, getMessages])
  return (

    <>
      <ChatContext.Provider
        value={{ selectedUser, setSelectedUser }}
      >
        <div className="bg-green d-flex">
          <DashboardSideBar />
          <div
            className="dash-content d-flex"
            style={{ flexDirection: "column" }}
          >
            <div className="header-chat">
              <div className="pesquisa-chat">
                <input
                  type="text"
                  placeholder="Pesquisar"
                  className="inp-pesquisar pd-h-16"
                />
              </div>
            </div>
            <div className="chat-body">
              <AbaConversa />
              {(selectedUser) &&( 
                <div className="chat-content">
                <div className="chat-content" id="chat-messages">
                  {messages.map((m, i) => {
                    return(
                    <div key={i} className="message">
                      <div className={`message-content ${m.senderId === user.id ? 'sender' : 'reciever' }`} >
                        <div className="message-text">{m.content || m}</div>
                      </div>  
                    </div>  
                )})}
                </div>
                <form id="messageForm" name="messageForm">
                  <div className="message-input"></div>
                  <input
                    type="text"
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                  />

                  <button onClick={(e) => { e.preventDefault(); chatService.sendMessage(message, selectedUser)}}>ENVIA A MENSAGEM</button>
                </form>
              </div>
                )
              }
            </div>
          </div>
        </div>
      </ChatContext.Provider>
    </>
  );
}

export default Chat;
