import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  DashboardSideBar,
  TextArea,
  TextInput,
  HelpLineLoader,
} from "../../../components";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user/userSlice";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addCampaign } from "../../../features/campaign/campaignSlice";

function CampaignAdd() {
  const DEFAULT_REQUIRED_ERROR = "Campo obrigatório";

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const initalValues = {
    title: "",
    description: "",
    type: ""
  };

  const schema = yup.object({
    title: yup.string().required(DEFAULT_REQUIRED_ERROR),
    description: yup.string().required(DEFAULT_REQUIRED_ERROR),
    type: yup.string()
  });

  const handleSubmit = async (values) => {
    console.log(values)
    setIsLoading(true);
    const body = {
      title: values.title,
      description: values.description,
      type: values.type == "MONETARY" ? "MONETARY" : "OBJECT_DONATION",
      badgeType: values.type,
      amount: 0,
      quantity: 0
    };

    console.log(body)

    const { payload } = await dispatch(addCampaign(body));
    if (payload.success) {
      toast.success("Campanha criada com sucesso!", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => navigate(-1),
      });
    }
  };


  return (
    <div className="bg-green d-flex">
      <ToastContainer />
      <DashboardSideBar />
      <div className="dash-content">
        <header className="d-flex flex-space-b pd-32 text-white">
          <h1 className="font-league text-green1">Cadastrar Campanha</h1>
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
              initialValues={initalValues}
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
                    <label htmlFor={"type"} className="d-ib font-league bold font-20">
                      Tipo da campanha
                      <span className="font-red">{" *"}</span>
                    </label>
                    <Field
                      as="select"
                      className="font-league pd-h-16 pd-v-12 d-block font-16 round bg-gray medium placeholder mb-16"
                      name="type"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value={"MONETARY"}>Arrecadação monetária</option>
                      <option value={"FOOD"}>Arrecadação de alimento</option>
                      <option value={"TOY"}>Arrecadação de brinquedos</option>
                      <option value={"CLOTHING"}>Arrecadação de roupas</option>
                    </Field>
                    {errors.type && (
                      <div className="error-text">{errors.type}</div>
                    )}
                    <button className="button-primary pd-h-16" type="submit">
                      Criar Campanha
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

export default CampaignAdd;
