import React, { useState } from "react";
import perfil from "../../assets/perfil.jpg";
import curtida from "../../assets/curtida.png";
import curtidaFill from "../../assets/curtidaOn.png";
import "./Post.css";
import ComentarioModal from "../Modais/ModalComentario/ComentarioModal";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import {
  commentPosts,
  getPosts,
  getPostsByUserId,
  likePosts,
} from "../../features/post/postSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { subscribe } from "../../features/job/jobSlice";


function Post({
  postId,
  user,
  content,
  likes,
  comments,
  liked,
  photo,
  showLike = true,
}) {
  const { UserId } = useParams();
  const [odalOpen, setModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(liked); // Estado local para "like"
  const [likeCount, setLikeCount] = useState(likes ? likes.length : 0);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = photo;
  const dispatch = useDispatch();

  const openodal = () => {
    setModalOpen(true);
  };

  const subJob = async () => {
    const { payload } = await dispatch(subscribe({jobId: postId}))
    console.log(payload)
    if(payload.success) {
      toast.success("Inscrito com sucesso, a ong vai entrar em contato em breve", {
        position: 'top-right',
        autoClose: 1000,
        onClose: () => window.location.reload()
      })
    } else {
      if(payload.errors.filter(e => e === "ALREADY_APPLIED").length > 0) {
        toast.error("Você já se inscreveu nessa vaga", {
          position: 'top-right',
          autoClose: 1000,
        })
      } else {
        toast.error("Falha ao se inscrever na vaga, tente novamente mais tarde", {
          position: 'top-right',
          autoClose: 1000,
        })
      }
    }
  }

  const onModalClose = () => {
    setModalOpen(false);
  };

  const handleCommentSubmit = async (comment) => {
    const body = {
      id: postId,
      content: comment,
    };

    const { payload } = await dispatch(commentPosts(body));

    if (payload.success) {
      toast.success("Comentário enviado", {
        autoClose: 1000,
        position: "top-right",
      });
      setModalOpen(false);
      dispatch(getPosts());
    } else {
      toast.error("Erro ao enviar comentário", {
        autoClose: 1000,
        position: "top-right",
      });
    }
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };


  const likePost = async () => {
    try {
      // Alterna o estado do like e atualiza o contador
      setIsLiked((prev) => !prev);
      setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  
      // Faz a requisição para "likar"
      const { payload } = await dispatch(likePosts({ id: postId }));
  
      // Valida se o payload existe antes de acessar "success"
      if (payload && payload.success) {
        // Atualiza os posts globalmente se a requisição foi bem-sucedida
        if (UserId) {
          dispatch(getPostsByUserId(UserId));
        } else {
          dispatch(getPosts());
        }
      } else {
        throw new Error("Erro ao processar a requisição."); // Lança erro caso payload seja inválido
      }
    } catch (error) {
      // Reverte o estado do like e contador caso ocorra um erro
      setIsLiked((prev) => !prev);
      setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
  
      // Exibe o erro ao usuário
      toast.error(
        "Erro ao curtir o post. Verifique sua conexão e tente novamente.",
        {
          position: "top-right",
          autoClose: 2000,
        }
      );
      console.error("Erro ao curtir o post:", error); // Loga o erro para depuração
    }
  };

  return (
    <>
      <div className="post">
        <div style={{ display: "flex" }}>
          <div className="side-right">
            <div className="">
              <img
                className="foto-usuario-post"
                src={!user.profilePicUrl ? perfil : user.profilePicUrl}
                alt="foto-usuario"
              />
            </div>
          </div>
          <div className="side-left">
            <span className="nome-usuario-post">{user.name}</span>
            <p className="post-paragrafo">{content}</p>
            {images && images.length > 0 && (
    <div className="post-galeria">
      {images.map((image, index) => (
        <img
          key={index}
          className="post-imagem"
          src={image.url}
          alt=""
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "8px",
            marginTop: "15px",
          }}
          onClick={() => openImageModal(image.url)} // Abre o modal ao clicar na imagem\
        />
      ))}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeImageModal} // Fecha ao clicar fora da imagem
          contentLabel=""
          style={{
            overlay: {
              display: "flex",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              justifyContent: "center",
              alignItems: "center",
            },
            content: {
              display: "flex",
              inset: "auto",
              padding: 0,
              border: "none",
              background: "transparent",
            },
          }}
        >
          <img
            src={selectedImage}
            alt=""
            style={{
              maxWidth: "32%", // Reduz o tamanho máximo da largura
              maxHeight: "32%", // Reduz o tamanho máximo da altura
              objectFit: "contain", // Garante que a imagem será ajustada sem cortes
              borderRadius: "8px",
              margin: "auto", // Centraliza a imagem dentro do modal
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Adiciona um leve sombreado
            }}
            onClick={closeImageModal} // Fecha ao clicar na imagem
          />
        </Modal>
      )}
    </div>
  )}  
          </div>
        </div>
        {
          !showLike && (
            <div>
              <button onClick={subJob}>Inscrever-se</button>
            </div>
          )
        }
{showLike && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "League Spartan",
            }}
          >
            <button
              onClick={likePost}
              style={{ background: "none", cursor: "pointer" }}
            >
              <div style={{ width: "50px" }}>
                {isLiked ? (
                  <img src={curtidaFill} alt="Curtir preenchido" width={60} />
                ) : (
                  <img src={curtida} alt="Curtir" width={60} />
                )}
              </div>
            </button>
            <span>{likeCount}</span>
            <button onClick={() => openodal()} style={{ width: 60 }}>
              <i
                className="bi bi-chat-left-text-fill icon-xg"
                style={{ color: "#285430" }}
              ></i>
            </button>
          </div>
        )}
        {comments && comments.length > 0 && (
          <div className="comments">
            {comments.map((comment) => (
              <div className="comment" key={comment.id}>
                <div className="img">
                  <img
                    className="foto-perfil-comentario"
                    src={
                      !comment.user.profilePicUrl
                        ? perfil
                        : comment.user.profilePicUrl
                    }
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    flexDirection: "column",
                  }}
                >
                  <span className="nome-usuario-comentario">
                    {comment.user.name}
                  </span>
                  <span className="paragrafo-comentario">
                    {comment.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ComentarioModal
        open={odalOpen}
        onClose={onModalClose}
        onSubmit={handleCommentSubmit}
      />
    </>
  );
}
export default Post;
