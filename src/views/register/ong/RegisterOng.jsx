import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { register } from "../../../features/user/userSlice";
import { ToastContainer } from "react-toastify";
import OngStepOne from "./OngStepOne";
import OngStepTwo from "./OngStepTwo";
import OngStepThree from "./OngStepThree";
import OngStepFour from "./OngStepFour";

export const RegisterOngContext = React.createContext();

function RegisterOng() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const [ongData, setOngData] = useState({
    socialName: '',
    fantasyName: '',
    foundingDate: '',
    phone: '',
    document: '',
    mission: '',
  })

  const [address, setAddress] = useState({
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    state: ''
  })

  const [contactInfo, setContactInfo] = useState({
    name: '',
    lastName: '',
    birthDate: '',
    phone: '',
    document: ''
  })

  const FORM_STATE = {
    steps: [
      <OngStepOne />,
      <OngStepTwo />,
      <OngStepThree />,
      <OngStepFour />
    ],
    selectedIndex: selectedIndex,
    next: () => setSelectedIndex(i => i + 1),
    previous: () => setSelectedIndex(i => i - 1),
    loginInfo: loginInfo,
    setLoginInfo: setLoginInfo,
    ongData: ongData,
    setOngData: setOngData,
    address: address,
    setAddress: setAddress,
    contactInfo: contactInfo,
    setContactInfo: setContactInfo,
    submit: async () => {
      const body = {
        socialName: ongData.socialName,
        fantasyName: ongData.fantasyName,
        email: loginInfo.email,
        password: loginInfo.password,
        document: ongData.document,
        type: 'ONG',
        role: 'ADMIN'
      }
      var { payload } = await dispatch(register(body))
      console.log(payload)
      return Promise.resolve(payload)
    }
  };

  useEffect(() => {
    const unloadCallback = (event) => {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = "";
      }
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      window.removeEventListener("beforeunload", unloadCallback);
    };
  }, []);

  return (
    <RegisterOngContext.Provider value={FORM_STATE}>
      <ToastContainer position='top-right'/>
      <div className="waves" style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}>
        <button
          onClick={() => {
            if(FORM_STATE.selectedIndex == 0) navigate('/')
            else FORM_STATE.previous()
          }}
          className="font-league font-24 bold m-32"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
            background: 'none',
            cursor: 'pointer'
          }}
        >
          <i className="bi bi-chevron-left font-32"></i>
          Voltar
        </button>
        <div
          className="shadow w-fit absolute-center"
          style={{ padding: "64px", borderRadius: "40px", backgroundColor: '#FFF'}}
        >
          <div className="w-fit m-align-center mb-32">
            <img src={logo} alt="Helpline logo" className="ml-28" />
          </div>
          {FORM_STATE.steps[FORM_STATE.selectedIndex]}
        </div>
      </div>
    </RegisterOngContext.Provider>
  );
}

export default RegisterOng;
