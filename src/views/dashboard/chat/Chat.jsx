import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatService from "../../../services/chatService";
import DashboardSideBar from "../../../components/Dashboard/DashboardSideBar";
import AbaConversa from "../../../components/ChatRoom/AbaConversa/AbaConversa";
import {
  selectMessages,
  selectUser,
  selectNotifications,
} from "../../../features/user/userSlice";
import DefaultProfile from "../../../assets/defaultProfilePic.svg";
import sendInput from "../../../assets/sendInput.svg";
import "./Chat.css";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";

export const ChatContext = React.createContext();

function Chat() {
  const chatContainerRef = useRef();
  const chatInputRef = useRef();

  const chatService = ChatService.instance;
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedUserProfilePic, setSelectedUserProfilePic] = useState("");

  const user = useSelector(selectUser);
  const getMessages = useSelector(selectMessages);
  const notifications = useSelector(selectNotifications);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function clearInput() {
    chatInputRef.current.value = "";
  }

  useEffect(() => {
    setMessages(getMessages);
    const element = chatContainerRef.current;
    element && element.scrollTo(0, element.scrollHeight);
  }, [selectedUser, messages, getMessages]);

  return (
    <>
      <ChatContext.Provider
        value={{
          selectedUser,
          setSelectedUser,
          setSelectedUserName,
          setSelectedUserProfilePic,
        }}
      >
        <div className="bg-green d-flex">
          <DashboardSideBar />
          <div className="dash-content d-flex">
            <div className="sidebar-chat">
            <div className="pesquisa-chat">
                 <input
                   type="text"
                   placeholder="Pesquisar"
                   className="inp-pesquisar pd-h-16"
                 />
            </div>
              <AbaConversa />
              </div>
        
            <div className="chat-content">
              <div className="chat-header">
                {selectedUser && (
                  <div className="info-chat">
                    <img className="foto-doador" src={`${ selectedUserProfilePic ? selectedUserProfilePic : DefaultProfile
                      }`}
                      alt="Foto do doador"
                    />
                    <div className="nome-doador">{selectedUserName}</div>
                  </div>
                )}
              </div>

              <div className="chat-messages" ref={chatContainerRef}>
                {selectedUser&&(
                  <div>
                  {messages.map((m, i) => {
                    return (
                      <div key={i} className="message">
                        <div
                          className={`message-content font-poppins ${
                            m.senderId === user.id ? "sender" : "receiver"
                          }`}
                        >
                          <div className="message-text">{m.content || m}</div>
                          <div className="message-time">
                            {chatService.getHours(m.timestamp)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                )}
              </div>
              <div style={{backgroundColor: "red", display: "flex"}}>
              <input
                type="text"
                className="input-message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                ref={chatInputRef}
              />


                   <button
                     className="send-message-button"
                     onClick={(e) => {
                       e.preventDefault();
                       chatService.sendMessage(message, selectedUser);
                       clearInput();
                     }}
                   >
                     Enviar mensagem
                   </button>
                   </div>
          </div>
          </div>
        </div>
      </ChatContext.Provider>
    </>
  );
}

export default Chat;
