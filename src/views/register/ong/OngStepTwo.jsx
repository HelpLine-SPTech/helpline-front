import React, { useContext } from 'react'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import { RegisterOngContext } from './RegisterOng'
import { HelpLineLoader, TextInput } from '../../../components'
import StepIndicator from '../../../components/StepIndicator/StepIndicator'
import dayjs from 'dayjs'

function OngStepTwo() {
  const FORM_STATE = useContext(RegisterOngContext)

  const initialValues = {
    socialName: FORM_STATE.ongData.socialName,
    fantasyName: FORM_STATE.ongData.fantasyName,
    foundingDate: FORM_STATE.ongData.foundingDate,
    document: FORM_STATE.ongData.document,
    phone: FORM_STATE.ongData.phone,
    mission: FORM_STATE.ongData.mission,
  }

  const schema = yup.object({
    socialName: yup.string().required("Campo obrigatório"),
    fantasyName: yup.string().required("Campo obrigatório"),
    foundingDate: yup.date().max(dayjs().toDate(), "Data inválida").required("Campo obrigatório"),
    document: yup.string().length(18, 'CNPJ inválido').matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'CNPJ inválido').required("Campo obrigatório"),
    phone: yup.string().test('is-valid-phone', 'Número de telefone inválido', value => /^\(\d{2}\) \d{4}-\d{4}$/.test(value) || /^\(\d{2}\) \d{5}-\d{4}$/.test(value)).required("Campo obrigatório"),
    mission: yup.string().required("Campo obrigatório")
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    FORM_STATE.setOngData({
      socialName: values.socialName,
      fantasyName: values.fantasyName,
      foundingDate: values.foundingDate,
      phone: values.phone,
      document: values.document,
      mission: values.mission,
    })
    FORM_STATE.next()
  }

  const handleChange = (e) => {
    if(e.target.name !== 'confirmPassword') {
      FORM_STATE.setOngData({
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
              <h2 className='font-league mb-32 bold font-32'>ONG</h2>
              <TextInput
                className={"w-lg mb-16"}
                name={"socialName"}
                label={"Razão Social"}
                placeholder={""}
                error={errors.socialName}
                touched={touched.socialName}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"fantasyName"}
                label={"Nome Fantasia"}
                placeholder={""}
                error={errors.fantasyName}
                touched={touched.fantasyName}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"foundingDate"}
                label={"Data de fundação"}
                placeholder={""}
                type={'date'}
                error={errors.foundingDate}
                touched={touched.foundingDate}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"document"}
                label={"CNPJ"}
                placeholder={"24.616.269/0001-65"}
                mask={'99.999.999/9999-99'}
                error={errors.document}
                touched={touched.document}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-16"}
                name={"phone"}
                label={"Telefone"}
                placeholder={"(11) 98446-4563"}
                mask={'(99) 99999-9999'}
                error={errors.phone}
                touched={touched.phone}
                disabled={isSubmitting}
                required
              />
              <TextInput
                className={"w-lg mb-32"}
                name={"mission"}
                label={"Missão e valores"}
                placeholder={""}
                error={errors.mission}
                touched={touched.mission}
                disabled={isSubmitting}
                required
              />
              <StepIndicator steps={FORM_STATE.steps.length} currentStep={FORM_STATE.selectedIndex} activeColor='#285430' inactiveColor='#93A997' className={'mb-16'}/>
              <div className='d-flex flex-center'>
                <button style={{margin: '0', backgroundColor: '#285430'}} type="submit" className='button-primary w-sm'  disabled={isSubmitting}>
                  { isSubmitting ? <HelpLineLoader width={20} height={20} /> : 'Próximo' }
                </button>
              </div>
            </Form>
          )}
      </Formik>
    </div>
  )
}

export default OngStepTwo