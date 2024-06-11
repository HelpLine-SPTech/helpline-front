import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBarOng from "../../components/Institucional/NavBarOng/NavBarOng"
import "./ForumOng.css";
import bemdamadrugada from "../../assets/bemdamadrugada.png"
import perfil from "../../assets/perfil.jpg"
import Post from "../../components/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, getPosts } from "../../features/post/postSlice";
import { selectUser } from "../../features/user/userSlice";

function ForumOng() {
  const dispatch = useDispatch()

  const user = useSelector(selectUser)

  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('')

  const fetchPosts = useCallback(async () => {
    const { payload } = await dispatch(getPosts())
    setPosts([
      {
        id: 1,
        user: {
          name: 'Dono post'
        },
        likes: 0,
        comments: [{
          content: 'comentário xumbado',
          user: {
            name: 'Dono comentário'
          }
        }],
        content: 'post xumbado'
      }
    ])
    console.log(payload)
  }, [setPosts])

  const onPostChange = (e) => {
    setPostContent(e.target.value)
  }

  const submitPost = async (e) => {
    const formData = new FormData()
    formData.append('content', postContent)
    formData.append('images', new Blob())
    const { payload } = await dispatch(createPosts(formData))
    console.log(payload)
  }

  useEffect(() =>  {
    fetchPosts()
  }, [fetchPosts])

  return (
    <>
      <NavBarOng />

      <div className="forum-ong">

        <div className="esquerda">

          <div className="sidebar">
            <div className="infos" >
              <img src={!user.profilePicUrl ? perfil : user.profilePicUrl} className="logo-container" alt="" />
              <h2>{user.name}</h2>

              <p>O grupo Bem da Madrugada é um Organização Não Governamental (ONG) com foco na ajuda de necessitados no momento em que encontram-se menos amparados.</p>

              <div className="mensagens" >
                <a href=""><h3>Mensagens diretas</h3></a>
                <a href=""><h3>Minhas postagens</h3></a>
              </div>

            </div>


            <div className="notifications-container">
              <h2>Notificações</h2>
              <span className="descricao-notificacoes">Campanhas em destaque</span>
            </div>
          </div>
        </div>

        <div className="direita">
          <div className="barra-post">
            <input className="input-publicacao" onChange={onPostChange} type="text" placeholder="Escreva sua publicação..." />
            <button className="search-button" onClick={submitPost}>Publicar</button>
          </div>
          {
            posts.map(post => (
              <Post
                key={post.id}
                user={post.user}
                content={post.content}
                comments={post.comments}
              />
            ))
          }
        </div>

      </div>
      <div style={{marginTop: '64px'}}>
        <Footer />
      </div>
    </>
  );
}

export default ForumOng;
