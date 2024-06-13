import React from "react";
import "./PerfilUsuario.css";
import perfil from '../../../assets/perfil.jpg'
import imgPessoa from "../../../assets/people1.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function PerfilUsuario() {
  const user = useSelector(selectUser);

  const navigate = useNavigate()

  return (
    <>
      <div className="full-div">
        <div className="perfil-usuario">
          <div>
            <img className="moldura-foto" src={!user.profilePicUrl ? perfil : user.profilePicUrl} alt="" />
          </div>
          <div className="bio-usuario">
            <h4>{user.name}</h4>
            <p>{user.bio}</p>
          </div>
          <button className="button-perfil" onClick={() => navigate('/dashboard/chat')}>Mensagens diretas</button>
          <button className="button-perfil" onClick={() => navigate(`/perfil/${user.id}`)}>Minhas Postagens</button>
        </div>
      </div>
    </>
  );
}

export default PerfilUsuario;
