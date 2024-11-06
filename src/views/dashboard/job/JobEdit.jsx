import React, { useCallback, useEffect, useState } from "react";
import * as yup from "yup";
import dayjs from "dayjs";
import {
  Checkbox,
  DashboardSideBar,
  HelpLineLoader,
  ItemsInput,
  TextArea,
  TextInput,
} from "../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getById, updateJob } from "../../../features/job/jobSlice";
import { openCepApi } from "../../../api/openCepApi";
import { selectUser } from "../../../features/user/userSlice";
import { Form, Formik } from "formik";

function JobEdit() {
  const DEFAULT_REQUIRED_ERROR = "Campo obrigatório";

  const [abilities, setAbilities] = useState([]);
  const user = useSelector(selectUser);
  const { jobId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    amount: 0,
    abilities: [],
    date: undefined,
    useOngAddress: false,
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const getJob = useCallback(
    async (id) => {
      const { payload } = await dispatch(getById(id));
      setInitialValues({
        title: payload.job.title,
        description: payload.job.description,
        amount: payload.job.amount,
        abilities: "",
        date: payload.job.date,
        useOngAddress: false,
        zipCode: payload.job.address.zipCode,
        street: payload.job.address.street,
        number: payload.job.address.number,
        complement: payload.job.address.complement,
        neighborhood: payload.job.address.neighborhood,
        city: payload.job.address.city,
        state: payload.job.address.state,
      });
      setAbilities(payload.job.abilities);
      setIsLoading(false);
    },
    [dispatch]
  );

  const [useOngAddress, setUseOngAddress] = useState(false);

  const schema = yup.object({
    title: yup.string().required(DEFAULT_REQUIRED_ERROR),
    description: yup.string().required(DEFAULT_REQUIRED_ERROR),
    amount: yup
      .number()
      .required(DEFAULT_REQUIRED_ERROR)
      .min(1, "Quantidade inválida"),
    abilities: yup.mixed().test("checkifAny", DEFAULT_REQUIRED_ERROR, () => {
      return new Promise((resolve, reject) => {
        if (abilities.length <= 0) {
          resolve(false);
        } else resolve(true);
      });
    }),
    date: yup
      .date()
      .required(DEFAULT_REQUIRED_ERROR)
      .min(dayjs(), "Data deve ser uma data futura"),
    useOngAddress: yup.boolean(),
    zipCode: yup.string().when("useOngAddress", {
      is: false,
      then: () => yup.string().required(DEFAULT_REQUIRED_ERROR),
    }),
    street: yup.string().when("useOngAddress", {
      is: false,
      then: () => yup.string().required(DEFAULT_REQUIRED_ERROR),
    }),
    number: yup.string().when("useOngAddress", {
      is: false,
      then: () => yup.string().required(DEFAULT_REQUIRED_ERROR),
    }),
    complement: yup.string(""),
    neighborhood: yup.string().when("useOngAddress", {
      is: false,
      then: () => yup.string().required(DEFAULT_REQUIRED_ERROR),
    }),
    city: yup.string().when("useOngAddress", {
      is: false,
      then: () => yup.string().required(DEFAULT_REQUIRED_ERROR),
    }),
    state: yup.string().when("useOngAddress", {
      is: false,
      then: () => yup.string().required(DEFAULT_REQUIRED_ERROR),
    }),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    const body = {
      jobId: jobId,
      title: values.title,
      description: values.description,
      amount: values.amount,
      abilities: abilities,
      date: dayjs(values.date).toISOString(),
      address: {
        zipCode: values.zipCode,
        street: values.street,
        number: values.number,
        complement: values.complement,
        neighborhood: values.neighborhood,
        city: values.city,
        state: values.state,
      },
    };

    const { payload } = await dispatch(updateJob(body));
    if (payload.success) {
      toast.success("Vaga atualizada com sucesso!", {
        position: "top-right",
        autoClose: 1000,
        pauseOnHover: false,
        onClose: () => navigate(-1),
      });
    }
  };

  const handleAddItem = (value, setFieldValue) => {
    if (value.trim()) {
      setAbilities([...abilities, value.trim()]);
      setFieldValue("abilities", "");
    }
  };

  const handleRemoveItem = (index) => {
    setAbilities(abilities.filter((_, i) => i !== index));
  };

  const onAddressOptionChange = (value, setFieldValue) => {
    setUseOngAddress(value);
    setFieldValue("useOngAddress", value);
    if (value) {
      setFieldValue("zipCode", user.address.zipCode);
      setFieldValue("number", user.address.number);
      setFieldValue("complement", user.address.complement);
      setFieldValue("street", user.address.street);
      setFieldValue("city", user.address.city);
      setFieldValue("state", user.address.state);
      setFieldValue("neighborhood", user.address.neighborhood);
    } else {
      resetAddress(setFieldValue);
    }
  };

  const resetAddress = (setFieldValue) => {
    setFieldValue("zipCode", "");
    setFieldValue("number", "");
    setFieldValue("complement", "");
    setFieldValue("street", "");
    setFieldValue("city", "");
    setFieldValue("state", "");
    setFieldValue("neighborhood", "");
  };

  const getAddressFromZipCode = async (
    event,
    setFieldValue,
    errors,
    setErrors
  ) => {
    debugger;
    const zipCode = event.target.value;
    setFieldValue("zipCode", zipCode);
    if (zipCode.length !== 9 && zipCode.length !== 8) return;

    openCepApi
      .get(`${zipCode.replace("-", "")}`)
      .then((res) => {
        setFieldValue("street", res.data.logradouro);
        setFieldValue("state", res.data.uf);
        setFieldValue("city", res.data.localidade);
        setFieldValue("neighborhood", res.data.bairro);
      })
      .catch(async (err) => {
        if (err.response.status === 404) {
          await setErrors({
            ...errors,
            zipCode: "CEP inválido",
          });
        }
      });
  };

  useEffect(() => {
    getJob(jobId);
  }, [jobId, getJob]);

  return (
    <div className="bg-green d-flex">
      <ToastContainer />
      <DashboardSideBar />
      <div className="dash-content" style={{ position: "relative" }}>
        <header className="d-flex flex-space-b pd-32 text-white">
          <h1 className="font-league text-green1">Cadastrar Vaga</h1>
          <img
            src={
              user.profilePicUrl
                ? user.profilePicUrl
                : undefined
            }
            alt={`Imagem de perfil de ${user.name}`}
            style={{
              width: "75px",
              height: "75px",
              borderRadius: 40,
              border: "5px solid #285430",
              background: "#285430",
            }}
          />
        </header>
        <div>
          {isLoading ? (
            <div className="absolute-center">
              <HelpLineLoader color="#285430" width={100} height={100} />
            </div>
          ) : (
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={schema}
            >
              {({
                isSubmitting,
                errors,
                touched,
                setFieldValue,
                setErrors,
              }) => (
                <Form
                  className="d-flex gap-16 pd-h-32"
                  style={{ flexWrap: "wrap" }}
                >
                  <div className="flex-1">
                    <h2 className={"mb-16 font-league"}>Vaga</h2>
                    <TextInput
                      className={"mb-16"}
                      name={"title"}
                      label={"Titulo"}
                      placeholder={"Vaga para auxiliar de cozinha voluntário"}
                      error={errors.title}
                      touched={touched.title}
                      disabled={isSubmitting}
                      required
                      flex1
                    />
                    <TextArea
                      className={"mb-16"}
                      name={"description"}
                      label={"Descrição"}
                      placeholder={""}
                      error={errors.description}
                      touched={touched.description}
                      disabled={isSubmitting}
                      required
                      flex1
                    />
                    <div className="d-flex gap-16 mb-16" style={{ flex: "1" }}>
                      <TextInput
                        name={"date"}
                        label={"Data"}
                        type={"datetime-local"}
                        placeholder={""}
                        error={errors.title}
                        touched={touched.title}
                        disabled={isSubmitting}
                        required
                        flex1
                      />
                      <TextInput
                        name={"amount"}
                        label={"Quantidade de vagas"}
                        type={"number"}
                        placeholder={""}
                        error={errors.amount}
                        touched={touched.amount}
                        disabled={isSubmitting}
                        required
                        flex1
                      />
                    </div>
                    <ItemsInput
                      name={"abilities"}
                      label={"Habilidades necessárias para a vaga"}
                      placeholder={""}
                      error={errors.abilities}
                      touched={touched.abilities}
                      disabled={isSubmitting}
                      items={abilities}
                      handleAddItem={handleAddItem}
                      handleRemoveItem={handleRemoveItem}
                      required
                      flex1
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className={"mb-16 font-league"}>Endereço</h2>
                    <Checkbox
                      name={"useOngAddress"}
                      label={"Utilizar o endereço da ONG?"}
                      onChange={(e) => onAddressOptionChange(e, setFieldValue)}
                      checked={useOngAddress}
                    />
                    <TextInput
                      className={"mb-16"}
                      name={"zipCode"}
                      label={"CEP"}
                      mask={"99999-999"}
                      placeholder={"1414-001"}
                      disabled={isSubmitting}
                      onChange={async (e) =>
                        await getAddressFromZipCode(
                          e,
                          setFieldValue,
                          errors,
                          setErrors
                        )
                      }
                      required={!useOngAddress}
                      flex1
                    />
                    <TextInput
                      className={"mb-16"}
                      name={"street"}
                      label={"Logradouro"}
                      placeholder={"Rua Haddock Lobo"}
                      disabled
                      required={!useOngAddress}
                      flex1
                    />
                    <div
                      className={"mb-16 d-flex flex-1"}
                      style={{ gap: "16px" }}
                    >
                      <TextInput
                        name={"number"}
                        label={"Número"}
                        placeholder={"2746"}
                        disabled={isSubmitting}
                        required={!useOngAddress}
                        flex1
                      />
                      <TextInput
                        name={"complement"}
                        label={"Complemento"}
                        placeholder={"32b"}
                        disabled={isSubmitting}
                        flex1
                      />
                    </div>
                    <TextInput
                      className={"mb-16"}
                      name={"city"}
                      label={"Cidade"}
                      placeholder={"São Paulo"}
                      disabled
                      required={!useOngAddress}
                      flex1
                    />
                    <TextInput
                      className={"mb-16"}
                      name={"state"}
                      label={"Estado"}
                      placeholder={"SP"}
                      disabled
                      required={!useOngAddress}
                      flex1
                    />
                    <TextInput
                      className={"mb-16"}
                      name={"neighborhood"}
                      label={"Bairro"}
                      placeholder={"Jardim Paulista"}
                      disabled
                      required={!useOngAddress}
                      flex1
                    />
                    <button className="button-primary pd-h-16" type="submit">
                      Atualizar Vaga
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobEdit;
