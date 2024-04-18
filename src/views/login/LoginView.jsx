import React from 'react'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { TextInput } from '../../components'
import { login, selectUser } from '../../features/user/userSlice'
import { ToastContainer, toast } from 'react-toastify'

function LoginView() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const handleSumit = (values, { setSubmitting }) => {
    dispatch(login({ email: values.email, password: values.password }))

    console.log(user)

    setSubmitting(false);
  };

  return (
    <div className='view d-flex flex-center waves'>
      <div className='w-fit font-league'>
      <Formik
          onSubmit={handleSumit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {({ values, isSubmitting, errors, touched }) => (
            <Form className='d-flex flex-vertical flex-gap-24 shadow round pd-h-72 pd-v-40'>
              <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt='' className='m-align-center'/>
              <h1>Entrar</h1>
              <TextInput
                className={"w-lg"}
                name={"email"}
                label={"E-mail"}
                placeholder={"exemplo@email.com"}
                error={errors.email}
                touched={touched.email}
                required
              />
              <TextInput
                className={"w-lg"}
                name={"password"}
                label={"Senha"}
                placeholder={"**********"}
                error={errors.password}
                touched={touched.password}
                required
              />
              <div className='d-flex flex-space-b flex-align-start'>
                <a href="#" className='font-16'>Esqueci a senha</a>
                <button type="submit" className='button-primary w-sm'  disabled={isSubmitting}>
                  Entrar
                </button>
              </div>
              <span className='font-16'>Não possui uma conta? <a href='#'>Cadastre-se</a></span>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  )
}

export default LoginView