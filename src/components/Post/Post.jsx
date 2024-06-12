import React, { useState } from "react";
import perfil from "../../assets/perfil.jpg"
import curtida from "../../assets/curtida.png"
import comentario from "../../assets/cometario.png"
import "./Post.css";
import ComentarioModal from "../Modais/ModalComentario/ComentarioModal";

function Post({ postId, user, content, likes, comments }) {

    const [commentModalOpen, setCommentModalOpen] = useState(false);

    const openCommentModal = () => {
        setCommentModalOpen(true)
    }

    const onModalClose = () => {
        setCommentModalOpen(false)
    }

    return (
        <>
            <div className='post'>
                <div className='side-right'>
                    <div className=''>
                        <img className='foto-usuario-post' src={!user.profilePicUrl ? perfil : user.profilePicUrl} alt="foto-usuario" />
                    </div>
                </div>

                <div className='side-left'>
                    <span className='nome-usuario-post'>{user.name}</span>
                    <p className="post-paragrafo">{content}
                    </p>
                </div>
               
                <div className="comments">
                    {
                        comments.map(comment => (
                            <div className="comment">
                                <div className="img">
                                    <img className="foto-perfil-comentario" src={!comment.user.profilePicUrl ? perfil : comment.user.profilePicUrl} alt="" />
                                </div>
                                <div style={{display: 'flex', gap: '2px', flexDirection: 'column'}}>
                                    <span className="nome-usuario-comentario">{comment.user.name}</span>
                                    <span className="paragrafo-comentario">{comment.content}</span>
                                </div>
                            </div>
                        ))
                        }
                </div>
                <div class="bottom-left">
                    <button>
                        <img className='curtida' src={curtida} alt="botao-curtida" />
                    </button>
                    <button onClick={() => openCommentModal()}>
                        <img className='comentario' src={comentario} alt="botao-comentario" />
                    </button>
                </div>
            </div>
<ComentarioModal open={commentModalOpen} onClose={onModalClose}/>
        </>
    );
}
export default Post;