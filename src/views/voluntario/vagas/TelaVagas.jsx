import React, { useCallback, useEffect, useState } from "react";
import "./TelaVagas.css";
import { Link } from "react-router-dom";
import NavbarV from "../../../components/Institucional/NavBarVoluntario/NavBarVoluntario";
import Footer from "../../../components/Footer/Footer";
import Post from "../../../components/Post/Post";
import PerfilUsuario from "../../../components/Forum/PerfilUsuario/PerfilUsuario";
import BarraPesquisa from "../../../components/Forum/BarraPesquisa/BarraPesquisa";
import { useDispatch } from "react-redux";
import { getAll } from "../../../features/job/jobSlice";
import { ToastContainer } from "react-toastify";

function TelaVagas() {
  const dispatch = useDispatch()
  
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const load = useCallback(async () => {
    const { payload } = await dispatch(getAll())
    if(payload.success) {
      setJobs(payload.jobs)
      setIsLoading(false)
    }

  }, [dispatch])

  useEffect(() => {
    load()
  }, [load])
  
  return (
    <>
      <NavbarV />
      <ToastContainer />
      <section className="font-poppins d-flex flex-center">
        <div className="container-principal">
          <div className="container-right">
            <PerfilUsuario />
          </div>
          <div className="container-left">
            {/* <div className="barra-pesquisa">
              <BarraPesquisa />
            </div> */}
            <div className="publicacoes">
              {
                !isLoading && (
                  jobs.map(job => (
                    <Post 
                      postId={job.id}
                      user={job.user}
                      comments={[{content: 'Vagas: ' + job.subscriptions + '/' + job.amount, user: job.user}]}
                      content={job.description}
                      showLike={false}
                    />
                  ))
                )
              }
              {/* <Post />
              <Post />
              <Post /> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TelaVagas;
