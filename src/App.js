import React from "react";
import { TextInput } from "./components";
import { Form, Formik } from "formik";
import * as yup from "yup";
import "./css/index.css";
import LoginView from "./views/login/LoginView";

function App() {
  

  return (
    <div className="App">
      <LoginView />
    </div>
  );
}

export default App;
