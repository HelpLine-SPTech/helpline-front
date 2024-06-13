import React, { useState } from "react";
import perfil from "../../assets/perfil.jpg";
import curtida from "../../assets/curtida.png";
import curtidaFill from "../../assets/curtidaOn.png";
import comentario from "../../assets/cometario.png";
import "./Post.css";
import ComentarioModal from "../Modais/ModalComentario/ComentarioModal";
import { useDispatch } from "react-redux";
import {
  commentPosts,
  getPosts,
  getPostsByUserId,
  likePosts,
} from "../../features/post/postSlice";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { subscribe } from "../../features/job/jobSlice";

function Post({
  postId,
  user,
  content,
  likes,
  comments,
  liked,
  showLike = true,
}) {
  const { UserId } = useParams();
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openCommentModal = () => {
    setCommentModalOpen(true);
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
      if(payload.errors.filter(e => e == "ALREADY_APPLIED").length > 0) {
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
    setCommentModalOpen(false);
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
      setCommentModalOpen(false);
      dispatch(getPosts());
    } else {
      toast.error("Erro ao enviar comentário", {
        autoClose: 1000,
        position: "top-right",
      });
    }
  };

  const likePost = async () => {
    const { payload } = await dispatch(likePosts({ id: postId }));
    if (UserId) {
      dispatch(getPostsByUserId(UserId));
    } else {
      dispatch(getPosts());
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
                {liked ? (
                  // <i
                  //   className="bi bi-hand-thumbs-up-fill icon-xg"
                  //   style={{ color: "#285430" }}
                  // ></i>
                  <img src={curtidaFill} alt="" width={60} />
                ) : (
                  // <i className="bi bi-hand-thumbs-up icon-xg"></i>
                  <img src={curtida} alt="" width={60} />
                )}
              </div>
            </button>
            <span>{likes ? likes.length : 0}</span>
            <button onClick={() => openCommentModal()} style={{ width: 60 }}>
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
        open={commentModalOpen}
        onClose={onModalClose}
        onSubmit={handleCommentSubmit}
      />
    </>
  );
}
export default Post;
