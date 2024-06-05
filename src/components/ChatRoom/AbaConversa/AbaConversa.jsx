import React, { useEffect, useState, useContext} from "react";
import { ChatContext } from "../../../views/dashboard/chat/Chat";
import api from "../../../api/helplineApi";
import ChatService from "../../../services/chatService";

function AbaConversa() {
  const [users, setUsers] = useState([])
  const { setSelectedUser, selectedUser } = useContext(ChatContext);
  const chatService = ChatService.instance;

  
  async function getUsersRecords() {
    const response = await api.get("/users");
    const data = response.data;
    setUsers(data.users);
  }
  

  useEffect(() => {
    getUsersRecords();
    // chatService.connect();
    if(selectedUser){
      chatService.fetchMessages(selectedUser);
    }
  }, [selectedUser]);

  return (
    <>
      <div className="aba-conversas">
        {
          users.map((user, i) => (
            <div key={i} className={`chat-card ${user.id === selectedUser && 'selected'}`} onClick={() => setSelectedUser(user.id)}>
              <img className="foto-doador" src={user.photo} alt="Foto do doador" />
              <div className="valores">
                <span className="nome-doador">{user.name}</span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
export default AbaConversa;
