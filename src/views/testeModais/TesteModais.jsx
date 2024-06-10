import React from "react";
import ComentarioModal from "../../components/Modais/ModalComentario/ComentarioModal";
import EditarVaga from "../../components/Modais/ModalEditarVaga/EditarVaga";
import ModalConfirmacao from "../../components/Modais/ModalConfirmacao/ModalConfirmacao";

function TesteModais() {
  return (
    <>
 
      <ModalConfirmacao
        tipo= "excluir"
        titulo="Tem certeza que deseja excluir a vaga?"
        texto="A vaga será removida do seu perfil."
      />

      <ModalConfirmacao
        tipo= "editar"
        titulo="Tem certeza que deseja editar a vaga?"
        texto="A vaga será editada no seu perfil."
      />

      <ComentarioModal />

      <EditarVaga
        tipo="remover"
        titulo="Vaga removida com sucesso!"
        texto= "A vaga será removida do seu perfil."
      />

      <EditarVaga
      tipo="editar"
      titulo="Vaga editada com sucesso!"
      texto="A vaga aparecerá editada em seu perfil."
      />

      <EditarVaga
      tipo="enviar"
      titulo="Sua inscrição foi enviada!"
      texto="Aguarde a ONG entrar em contato."
      />

      <EditarVaga
      tipo="adicionar"
      titulo="Vaga adicionada com sucesso!"
      texto="A vaga aparecerá em seu perfil."
      />

    </>
  );
}

export default TesteModais;
