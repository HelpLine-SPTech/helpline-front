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

function ForumOng() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts)

  const [postContent, setPostContent] = useState("");

  const load = useCallback(async () => {
    const { payload } = await dispatch(getPosts());
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
              photo={post.images}
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
