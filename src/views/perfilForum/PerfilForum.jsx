import React, { useCallback, useEffect, useRef, useState } from "react";
import "./PerfilForum.css";
import { useNavigate, useParams } from "react-router-dom";
import NavbarV from "../../components/Institucional/NavBarVoluntario/NavBarVoluntario";
import Footer from "../../components/Footer/Footer";
import Pessoa1 from "../../assets/people1.png";
import Whatsapp from "../../assets/whatsapp.svg";
import Selo1 from "../../assets/selo-aconchego-partilhado.svg";
import Selo2 from "../../assets/selo-nutrir-esperança.svg";
import Selo3 from "../../assets/selo-enriqueca-infancias.svg";
import Ong from "../../assets/ong.png";
import {
  getUserByid,
  selectUser,
  updateProfilePicUrl,
  updateUserName,
  uploadProfilePic,
} from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { HelpLineLoader } from "../../components";
import { getPostsByUserId, selectPosts } from "../../features/post/postSlice";
import Post from "../../components/Post/Post";

function PerfilForum() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { UserId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAbilities, setIsEditingAbilities] = useState(false);

  const logUser = useSelector(selectUser);

  const posts = useSelector(selectPosts);

  const [editFormState, setEditForm] = useState({});

  const getUser = useCallback(async () => {
    let { payload } = await dispatch(getUserByid({ id: UserId }));
    if (payload.success) {
      console.log(payload.user);
      setUser(payload.user);
      setIsLoading(false);
    } else {
      toast.error("Usuário não encontrado", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => navigate(-1),
      });
    }
  }, [dispatch, UserId, navigate]);

  const getPosts = useCallback(async () => {
    await dispatch(getPostsByUserId(UserId));
  }, [dispatch, UserId]);

  useEffect(() => {
    getUser();
    getPosts();
  }, [getUser, getPosts]);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0]; // ADDED
    const formData = new FormData();
    formData.append("file", fileUploaded);
    let { payload } = await dispatch(uploadProfilePic(formData));
    if (payload.success) {
      dispatch(updateProfilePicUrl(payload.url));
      toast.success("Foto de perfil alterada com sucesso", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => window.location.reload(),
      });
    } else {
      toast.error("Erro ao alterar imagem de perfil", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  const submitNameUpdate = async (e) => {
    const { payload } = await dispatch(
      updateUserName({
        id: user.id,
        name: editFormState.name,
      })
    );

    if (payload.success) {
      toast.success("Nome alterado com sucesso", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => window.location.reload(),
      });
    } else {
      toast.error("Erro ao alterar o nome", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  return (
    <>
      <NavbarV />
      <ToastContainer />
      <section className="font-poppins d-flex flex-center">
        {isLoading ? (
          <HelpLineLoader width={50} height={50} />
        ) : (
          <div className="perfil">
            <div className="capa-perfil">
              <div className="foto-wrapper">
                <img
                  className="foto-perfil"
                  src={user.profilePicUrl ? user.profilePicUrl : Pessoa1}
                  alt=""
                />
                <input
                  onChange={handleChange}
                  type="file"
                  accept="image/png,image/jpeg,image/gif,image/webp"
                  ref={hiddenFileInput}
                  style={{ display: "none" }}
                />
                <button onClick={handleClick}>
                  {" "}
                  <i className="bi bi-pencil-square"></i>{" "}
                </button>
              </div>
            </div>
            <div className="information-perfil-full">
              <div className="information-perfil-right">
                <div className="bio-information">
                  <div>
                    <div className="d-flex flex-gap-8 align-centerd">
                      {isEditing ? (
                        <input
                          value={editFormState.name}
                          onChange={(e) => {
                            setEditForm((editForm) => {
                              console.log(editForm);
                              return {
                                ...editForm,
                                name: e.target.value,
                              };
                            });
                          }}
                        ></input>
                      ) : (
                        <h3>{user.name}</h3>
                      )}
                      {logUser.id === user.id && !isEditing && (
                        <i
                          onClick={() => {
                            setIsEditing(true);
                            setEditForm({ name: user.name });
                          }}
                          className="bi bi-pencil-square icon-g cursor-pointer"
                        ></i>
                      )}
                      {isEditing && (
                        <button onClick={submitNameUpdate}>salvar</button>
                      )}
                    </div>

                    {/* <p> {dayjs(user.birthday).diff(dayjs(),"y")} anos</p> */}
                  </div>
                  {/* <p> {user.bio}</p> */}
                  {user.phone && (
                    <div className="bio-pessoal">
                      <img className="icon-perfil" src={Whatsapp} alt="" />
                      <p>{user.phone}</p>
                    </div>
                  )}
                  <div className="bio-pessoal">
                    <i
                      className="bi bi-at"
                      style={{ fontSize: "16px", color: "#285430" }}
                    ></i>
                    <p>{user.email}</p>
                  </div>
                </div>
                {user.type === "UserEntity" && (
                  <div className="competencias">
                    <h3>Competências</h3>
                    {!isEditingAbilities &&
                      user.abilities.map((a) => (
                        <div className="competencias-information">
                          <div className="dot"></div>
                          <p>{a}</p>
                        </div>
                      ))}
                    {logUser.id === user.id && !isEditing && (
                      <i
                        onClick={() => {
                          setIsEditingAbilities(true);
                        }}
                        className="bi bi-pencil-square icon-g cursor-pointer"
                      ></i>
                    )}
                  </div>
                )}
                <div className="publicacoes-perfil">
                  <h3>Publicações</h3>
                  {posts.map((post) => (
                    <Post
                      postId={post.id}
                      comments={[]}
                      content={post.content}
                      user={post.user}
                      key={post.id}
                      likes={post.likes}
                      liked={post.liked}
                    />
                  ))}
                </div>
              </div>
              <div className="information-perfil-left">
                <h3>Selos</h3>
                <div className="secao-selo">
                  <img className="selo-perfil" src={Selo3} alt="" />
                  <img className="selo-perfil" src={Selo1} alt="" />
                  <img className="selo-perfil" src={Selo2} alt="" />
                </div>
                <div className="secao-ong">
                  <h3>ONG's sugeridas</h3>
                  <div className="ong-sugerida-secao">
                    <div className="line-ong-sugerida">
                      <img className="img-ong-sugerida" src={Ong} alt="" />
                      <p className="nome-ong-sugerida">Bem da Madrugada</p>
                    </div>
                    <div className="line-ong-sugerida">
                      <img className="img-ong-sugerida" src={Ong} alt="" />
                      <p className="nome-ong-sugerida">Bem da Madrugada</p>
                    </div>
                    <div className="line-ong-sugerida">
                      <img className="img-ong-sugerida" src={Ong} alt="" />
                      <p className="nome-ong-sugerida">Bem da Madrugada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default PerfilForum;
