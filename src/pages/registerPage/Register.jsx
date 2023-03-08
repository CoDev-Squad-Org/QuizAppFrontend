import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss";

export const Register = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        user: "",
        email: "",
        password: "",
        confirmPassword: "",
      },

      validationSchema: Yup.object({
        user: Yup.string()
          .min(4, "El usuario debe tener almenos 4 caracteres")
          .required("Debes ingresar un usuario"),
        email: Yup.string()
          .email("Ingrese un correo valido que contenga @ y .com")
          .required("Debes ingresar un correo"),
        password: Yup.string()
          .min(6, "La contraseña debe tener almenos 6 caracteres")
          .required("Debes ingresar una contraseña"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "La constraseña no coincide")
          .required("Debes confirmar la contraseña"),
      }),
      onSubmit: (data, { resetForm }) => {
        setSuccessMessage(true);
        console.log(JSON.stringify(data));
        setTimeout(() => {
          setSuccessMessage(false);
          resetForm();
          navigate("/login");
        }, 5000);
      },
    });

  return (
    <div className="register">
      <div className="container__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="white"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>

      <div className="container__form">
        <p className="breadCrumb">
          Login/<span className="breadCrumb__item">Registro</span>
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            size="small"
            type="text"
            name="user"
            label="Usuario"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.user}
            error={touched.user && Boolean(errors.user)}
            helperText={touched.user && errors.user}
          />
          <TextField
            size="small"
            type="email"
            name="email"
            label="Correo"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            size="small"
            type="password"
            name="password"
            label="Contraseña"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            size="small"
            type="password"
            name="confirmPassword"
            label="Confirmar contraseña"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />

          <Button type="submit" variant="contained" fullWidth>
            Registrar
          </Button>
        </form>

        {successMessage && (
          <div className="success-message">Registro exitoso! Inicie sesion con su nueva cuenta</div>
        )}
      </div>
    </div>
  );
};
