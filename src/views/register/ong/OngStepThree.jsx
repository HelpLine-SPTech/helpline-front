import React, { useContext } from 'react'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import { RegisterOngContext } from './RegisterOng'
import { HelpLineLoader, TextInput } from '../../../components'
import StepIndicator from '../../../components/StepIndicator/StepIndicator'
import { openCepApi } from '../../../api/openCepApi'

function OngStepThree() {

  const FORM_STATE = useContext(RegisterOngContext)

  const initialValues = {
    zipCode: FORM_STATE.address.zipCode,
    street: FORM_STATE.address.street,
    number: FORM_STATE.address.number,
    complement: FORM_STATE.address.complement,
    neighborhood: FORM_STATE.address.neighborhood,
    state: FORM_STATE.address.state
  }

  const schema = yup.object({
    zipCode: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    complement: yup.string('stringerr'),
    neighborhood: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)
    FORM_STATE.setAddress({
      zipCode: values.zipCode,
      street: values.street,
      number: values.number,
      complement: values.complement,
      neighborhood: values.neighborhood,
      state: values.state
    })
    setSubmitting(false)

    FORM_STATE.next()
  }

  const getAddressFromZipCode = async (event, setFieldValue, errors, setErrors) => {
    const zipCode = event.target.value
    setFieldValue('zipCode', zipCode)
    if(zipCode.length !== 9) return

    openCepApi
      .get(`${zipCode.replace("-", "")}`)
      .then(res => {
        setFieldValue('street', res.data.logradouro)
        setFieldValue('state', res.data.uf)
        setFieldValue('city', res.data.localidade)
        setFieldValue('neighborhood', res.data.bairro)
      })
      .catch(async err => {
        if(err.response.status === 404) {
          await setErrors({
            ...errors,
            zipCode: 'CEP inválido'
          })
        }
      })
  }

  return (
      
      <div style={{overflow: 'hidden'}}>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={schema}>
            {({ values, isSubmitting, setFieldValue, errors, setErrors}) => (
              <Form>
                <h2 className='font-league mb-32 bold font-32'>Endereço</h2>
                <TextInput
                  className={"w-lg mb-16"}
                  name={"zipCode"}
                  label={"CEP"}
                  mask={'99999-999'}
                  placeholder={"1414-001"}
                  disabled={isSubmitting}
                  onChange={async (e) => await getAddressFromZipCode(e, setFieldValue, errors, setErrors)}
                  required
                />
                <TextInput
                  className={"w-lg mb-16"}
                  name={"street"}
                  label={"Logradouro"}
                  placeholder={"Rua Haddock Lobo"}
                  disabled
                  required
                />
                <div className={"w-lg mb-16 d-flex"} style={{ gap: '16px'}}>
                  <TextInput
                    className={'flex-1'}
                    name={"number"}
                    label={"Número"}
                    placeholder={"2746"}
                    disabled={isSubmitting}
                    required
                    />
                  <TextInput
                    className={'flex-1'}
                    name={"complement"}
                    label={"Complemento"}
                    placeholder={"32b"}
                    disabled={isSubmitting}
                  />
                </div>
                <TextInput
                  className={"w-lg mb-16"}
                  name={"state"}
                  label={"Estado"}
                  placeholder={"SP"}
                  disabled
                  required
                />
                <TextInput
                  className={"w-lg mb-16"}
                  name={"neighborhood"}
                  label={"Bairro"}
                  placeholder={"Jardim Paulista"}
                  disabled
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

export default OngStepThree