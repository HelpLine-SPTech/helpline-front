import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {selectMessages, selectUser} from "../../../features/user/userSlice";

import ChatService from "../../../services/chatService";
import DashboardSideBar from "../../../components/Dashboard/DashboardSideBar";
import AbaConversa from "../../../components/ChatRoom/AbaConversa/AbaConversa";
import DefaultProfile from "../../../assets/defaultProfilePic.svg";
import "./Chat.css";

export const ChatContext = React.createContext();

function Chat() {
  const chatContainerRef = useRef();
  const chatInputRef = useRef();

  const chatService = ChatService.instance;
  const [search, setSearch] = useState('')

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedUserProfilePic, setSelectedUserProfilePic] = useState("");

  const user = useSelector(selectUser);
  const getMessages = useSelector(selectMessages);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const lastMessage = getLastMessage();

  function clearInput() {
    chatInputRef.current.value = "";
  }

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleScroll() {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }

  useEffect(() => {
    setMessages(getMessages);
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
                  onChange={onSearchChange}
                />
              </div>
               <AbaConversa search={search} /> {/*lastMessages={lastMessage} */}

            </div>
            
            <div className="chat-content">
              <div className="chat-header">
                {selectedUser && (
                  <div className="info-chat">
                    <img
                      className="foto-doador"
                      src={`${
                        selectedUserProfilePic
                          ? selectedUserProfilePic
                          : DefaultProfile
                          }`}
                          alt="Foto do doador"
                    />
                    <div className="nome-doador">{selectedUserName}</div>
                  </div>
                )}
              </div>

              <div className="chat-messages" ref={chatContainerRef}>
                {selectedUser && (
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
            {selectedUser &&(
              <div style={{ backgroundColor: "#E1E1E1", display: "flex", borderRadius: "16px 0px"}} >
                <input
                  type="text"
                  className="input-message"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  autoComplete="off"
                  ref={chatInputRef}
                  />

                <button
                  className="send-message-button"
                  onClick={(e) => {
                    e.preventDefault();
                    chatService.sendMessage(message, selectedUser);
                    clearInput();
                  }} onChange={handleScroll()}
                >
                  <i className="bi bi-send icon-g icon-white" ></i>
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      </ChatContext.Provider>
    </>
  );
}

export default Chat;
