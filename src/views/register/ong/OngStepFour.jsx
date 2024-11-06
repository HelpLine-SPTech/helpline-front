import React, { useContext } from 'react'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import { RegisterOngContext } from './RegisterOng'
import { HelpLineLoader, TextInput } from '../../../components'
import StepIndicator from '../../../components/StepIndicator/StepIndicator'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function OngStepFour() {

  const navigate = useNavigate()

  const FORM_STATE = useContext(RegisterOngContext)

  const initialValues = {
    name: FORM_STATE.contactInfo.name,
    lastName: FORM_STATE.contactInfo.lastName,
    birthDate: FORM_STATE.contactInfo.birthDate,
    phone: FORM_STATE.contactInfo.name.phone,
    document: FORM_STATE.contactInfo.document
  }

  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório"),
    birthDate: yup.date("Data inválida").max(dayjs().toDate(), "Data inválida").required('Campo obrigatório'),
    phone: yup.string().required('Campo obrigatório'),
    document: yup.string().length(14, "Documento inválido").required("Campo obrigatório")
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    FORM_STATE.setContactInfo({
      name: values.name,
      lastName: values.lastName,
      birthDate: values.birthDate,
      phone: values.phone,
      document: values.document
    })

    FORM_STATE
      .submit()
      .then(res => {
        if(res.savedUser) {
          toast.success('Cadastrado com sucesso!', {
            position: "top-right"
          });
          setTimeout(() => navigate('/'), 1000)
        } else {
          toast.error('Erro ao cadastrar')
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}>
          {({ values, isSubmitting, errors, touched }) => (
            <Form>
              <h2 className='font-league mb-32 bold font-32'>Informações do Responsável</h2>
              <TextInput
                className={"w-lg mb-16"}
                name={"name"}
                label={"Nome"}
                placeholder={"Renan"}
                error={errors.name}
                touched={touched.name}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"lastName"}
                label={"Sobrenome"}
                placeholder={"Silva"}
                error={errors.lastName}
                touched={touched.lastName}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"birthDate"}
                label={"Data de nascimento"}
                placeholder={""}
                type={'date'}
                error={errors.birthDate}
                touched={touched.birthDate}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"phone"}
                label={"Numero de celular"}
                placeholder={"(11) 01234-1234"}
                mask={'(99) 99999-9999'}
                error={errors.phone}
                touched={touched.phone}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-32"}
                name={"document"}
                label={"CPF"}
                mask={'999.999.999-99'}
                placeholder={"000.000.000-00"}
                error={errors.document}
                touched={touched.document}
                disabled={isSubmitting}
                required
              />
              <StepIndicator steps={FORM_STATE.steps.length} currentStep={FORM_STATE.selectedIndex} activeColor='#285430' inactiveColor='#93A997' className={'mb-16'}/>
              <div className='d-flex flex-center'>
                <button style={{margin: '0', backgroundColor: '#285430'}} type="submit" className='button-primary w-sm'  disabled={isSubmitting}>
                  { isSubmitting ? <HelpLineLoader width={20} height={20} /> : 'Cadastrar' }
                </button>
              </div>
            </Form>
          )}
      </Formik>
    </div>
  )
}

export default OngStepFour