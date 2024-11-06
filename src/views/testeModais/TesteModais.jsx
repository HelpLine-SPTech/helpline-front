import React, { useState } from "react";
import ComentarioModal from "../../components/Modais/ModalComentario/ComentarioModal";
import EditarVaga from "../../components/Modais/ModalEditarVaga/EditarVaga";
import ModalConfirmacao from "../../components/Modais/ModalConfirmacao/ModalConfirmacao";

function TesteModais() {
  const [showModals, setShowModals] = useState({
    comentario: false,
    editar: false,
    confirmarExcluir: false,
    confirmarEditar: false,
    removerVaga: false,
    editarVaga: false,
    enviarInscricao: false,
    adicionarVaga: false,
  });

  const handleOpenModals = () => {
    setShowModals({
      comentario: true,
      editar: true,
      confirmarExcluir: true,
      confirmarEditar: true,
      removerVaga: true,
      editarVaga: true,
      enviarInscricao: true,
      adicionarVaga: true,
    });
  };

  const handleCloseModal = (modalName) => {
    setShowModals((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return (
    <>
      <button id="open-modals" onClick={handleOpenModals}>Abrir Modais</button>

      <ModalConfirmacao
        tipo="excluir"
        titulo="Tem certeza que deseja excluir a vaga?"
        texto="A vaga será removida do seu perfil."
        open={showModals.confirmarExcluir}
        onClose={() => handleCloseModal("confirmarExcluir")}
      />

      <ModalConfirmacao
        tipo="editar"
        titulo="Tem certeza que deseja editar a vaga?"
        texto="A vaga será editada no seu perfil."
        open={showModals.confirmarEditar}
        onClose={() => handleCloseModal("confirmarEditar")}
      />

      <ComentarioModal
        open={showModals.comentario}
        onClose={() => handleCloseModal("comentario")}
      />

      <EditarVaga
        tipo="remover"
        titulo="Vaga removida com sucesso!"
        texto="A vaga será removida do seu perfil."
        open={showModals.removerVaga}
        onClose={() => handleCloseModal("removerVaga")}
      />

      <EditarVaga
        tipo="editar"
        titulo="Vaga editada com sucesso!"
        texto="A vaga aparecerá editada em seu perfil."
        open={showModals.editarVaga}
        onClose={() => handleCloseModal("editarVaga")}
      />

      <EditarVaga
        tipo="enviar"
        titulo="Sua inscrição foi enviada!"
        texto="Aguarde a ONG entrar em contato."
        open={showModals.enviarInscricao}
        onClose={() => handleCloseModal("enviarInscricao")}
      />

      <EditarVaga
        tipo="adicionar"
        titulo="Vaga adicionada com sucesso!"
        texto="A vaga aparecerá em seu perfil."
        open={showModals.adicionarVaga}
        onClose={() => handleCloseModal("adicionarVaga")}
      />
    </>
  );
}

export default TesteModais;
