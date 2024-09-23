import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBarOng from "../../components/Institucional/NavBarOng/NavBarOng";
import "./ForumOng.css";
import perfil from "../../assets/perfil.jpg";
import Post from "../../components/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, getPosts, selectPosts } from "../../features/post/postSlice";
import { selectUser } from "../../features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function ForumOng() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts)

  const [postContent, setPostContent] = useState("");

  const load = useCallback(async () => {
    await dispatch(getPosts());
  }, [dispatch]);

  const onPostChange = (e) => {
    setPostContent(e.target.value);
  };

  const submitPost = async (e) => {
    const formData = new FormData();
    formData.append("content", postContent);
    formData.append("images", new Blob());
    const { payload } = await dispatch(createPosts(formData));

    if(payload.success) {
      toast.success('Sucesso', {
        autoClose: 1000,
        position: 'top-right',
        onClose: () => window.location.reload()
      })
    }
  };

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <NavBarOng />
      <ToastContainer />
      <div className="forum-ong">
        <div className="esquerda">
          <div className="sidebar">
            <div className="infos">
              <img
                src={!user.profilePicUrl ? perfil : user.profilePicUrl}
                className="logo-container"
                alt=""
              />
              <h2>{user.name}</h2>

              <p>
                {user.bio}
              </p>

              <div className="mensagens">
                <Link to="">
                  <h3>Mensagens diretas</h3>
                </Link>
                <Link to="">
                  <h3>Minhas postagens</h3>
                </Link>
              </div>
            </div>

            <div className="notifications-container">
              <h2>Notificações</h2>
              <span className="descricao-notificacoes">
                Campanhas em destaque
              </span>
            </div>
          </div>
        </div>

        <div className="direita">
          <div className="barra-post">
            <input
              className="input-publicacao"
              onChange={onPostChange}
              type="text"
              placeholder="Escreva sua publicação..."
            />
            <button className="search-button" onClick={submitPost}>
              Publicar
            </button>
          </div>
          {posts && posts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              user={post.user}
              likes={post.likes}
              content={post.content}
              comments={post.comments}
              liked={post.liked}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "64px" }}>
        <Footer />
      </div>
    </>
  );
}

export default ForumOng;
