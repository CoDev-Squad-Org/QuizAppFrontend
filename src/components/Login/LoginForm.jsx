/* import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validation = Yup.object().shape({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string().required("Required").min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
	return (
		<div>
			<h3><span>Login/</span>Register</h3>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validation}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({}) => (
					<Form>
						<div>
							<label htmlFor="email">Email</label>
							<Field name="email" type="email" />
							<ErrorMessage name="email" />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<Field name="password" type="password" />
							<ErrorMessage name="password" />
						</div>
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
 */

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const validation = Yup.object().shape({
	email: Yup.string().email("Email invalido!").required("Email requerido!"),

	password: Yup.string().min(6, "Un minimo de 6 caracteres!").required("Password requerido!"),
});

const LoginForm = () => {
	const [successMessage, setSuccessMessage] = useState(false);
	const { handleBlur, handleSubmit, handleChange, values, errors, touched } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},

		onSubmit: (values, { resetForm }) => {
			setSuccessMessage(true);
			setTimeout(() => {
				setSuccessMessage(false);
				resetForm();
			}, 5000);
			console.log(JSON.stringify(values));
		},

		validationSchema: validation,
	});

	return (
		<div className="form-container">
			<h3 className="form__title">
				<span>Login/</span>Register
			</h3>
			<form onSubmit={handleSubmit} className="form">
				<TextField
					className="form__input"
					id="email"
					name="email"
					label="email"
					margin="normal"
					onChange={handleChange}
					value={values.email}
					error={touched.email && Boolean(errors.email)}
					helperText={touched.email && errors.email}
					onBlur={handleBlur}
				/>
				<TextField
					className="form__input"
					id="password"
					name="password"
					label="password"
					margin="normal"
					onChange={handleChange}
					value={values.password}
					error={touched.password && Boolean(errors.password)}
					helperText={touched.password && errors.password}
					onBlur={handleBlur}
				/>
				<Button variant="contained" type="submit" className="btn__login ">
					Login
				</Button>
			</form>
			{successMessage &&
				<div className="success-message">Form submitted successfully!</div>}
		</div>
	);
};

export default LoginForm;
