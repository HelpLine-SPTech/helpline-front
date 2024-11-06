import React, { useContext } from 'react'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import { RegisterUserContext } from './RegisterUser'
import { HelpLineLoader, TextInput } from '../../../components'
import StepIndicator from '../../../components/StepIndicator/StepIndicator'

function UserStepOne() {
  const FORM_STATE = useContext(RegisterUserContext)

  const initialValues = {
    email: FORM_STATE.loginInfo.email,
    password: FORM_STATE.loginInfo.password,
    confirmPassword: FORM_STATE.loginInfo.password
  }

  const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup.mixed().oneOf([yup.ref('password'), null], 'A confirmação de senha não confere').required('Campo obrigatório'),
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    FORM_STATE.setLoginInfo({
      email: values.email,
      password: values.password
    })
    FORM_STATE.next()
  }

  const handleChange = (e) => {
    if(e.target.name !== 'confirmPassword') {
      FORM_STATE.setLoginInfo({
        ...FORM_STATE.loginInfo,
        [`${e.target.name}`]: e.target.value  
      })
    }
  }



  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}>
          {({ values, isSubmitting, errors, touched }) => (
            <Form onChangeCapture={handleChange}>
              <h2 className='font-league mb-32 bold font-32'>Informações de login</h2>
              <TextInput
                className={"w-lg mb-16"}
                name={"email"}
                label={"E-mail"}
                placeholder={"exemplo@email.com"}
                error={errors.email}
                touched={touched.email}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"password"}
                label={"Senha"}
                placeholder={"**********"}
                type={'password'}
                error={errors.password}
                touched={touched.password}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-32"}
                name={"confirmPassword"}
                label={"Confirmar senha"}
                placeholder={"**********"}
                type={'password'}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
                disabled={isSubmitting}
                required
              />
              <StepIndicator steps={FORM_STATE.steps.length} currentStep={FORM_STATE.selectedIndex} activeColor='#F19150' inactiveColor='#FFB786' className={'mb-16'}/>
              <div className='d-flex flex-center'>
                <button style={{margin: '0'}} type="submit" className='button-primary w-sm'  disabled={isSubmitting}>
                  { isSubmitting ? <HelpLineLoader width={20} height={20} /> : 'Próximo' }
                </button>
              </div>
            </Form>
          )}
      </Formik>
    </div>
  )
}

export default UserStepOne