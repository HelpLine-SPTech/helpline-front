import React, { useEffect } from 'react'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { TextInput, HelpLineLoader } from '../../components'
import { login } from '../../features/user/userSlice'
import { ToastContainer, toast } from 'react-toastify'

import logoSvg from '../../assets/logo.svg'

function LoginView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const initialValues = {
    email: "",
    password: "",
  };

  const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const handleSumit = async (values, { setSubmitting }) => {
    let { payload } = await dispatch(login({ email: values.email, password: values.password }))
    
    if(!payload.success) {
      payload.errors.forEach(e => {
        toast.error(e)
      })
    } 
    setSubmitting(false);

    navigate('/forum')
  };

  useEffect(() => {
    if(localStorage.getItem('token')) {
      navigate('/forum');
    }
  }, [navigate])

  return (
    <div className='view d-flex flex-center waves'>
      <div className='w-fit font-league'>
      <HelpLineLoader />
      <Formik
          onSubmit={handleSumit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {({ values, isSubmitting, errors, touched }) => (
            <Form className='d-flex flex-vertical flex-gap-24 shadow round pd-h-72 pd-v-40'>
              <img src={logoSvg} alt='HelpLine logo' className='m-align-center'/>
              <h1>Entrar</h1>
              <TextInput
                className={"w-lg"}
                name={"email"}
                label={"E-mail"}
                placeholder={"exemplo@email.com"}
                error={errors.email}
                touched={touched.email}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg"}
                name={"password"}
                label={"Senha"}
                placeholder={"**********"}
                error={errors.password}
                touched={touched.password}
                disabled={isSubmitting}
                required
              />
              <div className='d-flex flex-space-b flex-align-start'>
                <Link to={'/forum'} className='font-16'>Esqueci a senha</Link>
                <button type="submit" className='button-primary w-sm'  disabled={isSubmitting}>
                  { isSubmitting ? <HelpLineLoader width={20} height={20} /> : 'Entrar' }
                </button>
              </div>
              <span className='font-16'>Não possui uma conta? <Link to={'/signin'}>Cadastre-se</Link></span>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  )
}

export default LoginView