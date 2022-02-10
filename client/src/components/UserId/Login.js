import "./Index.css";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            email: Yup.string().min(10, "check email ").required("required"),

            password: Yup.string()
                .min(8, "password cannot be less than 10 characters")
                .required("required"),
        }),

        onSubmit: (formik) => {
            const newUser = {
                email: formik.email,

                password: formik.password,
            };
        },
    });

    return (
        <div className="login">
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <p>{formik.errors.email}</p>
                ) : null}
                <br /> <br />
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <p>{formik.errors.password}</p>
                ) : null}
                <br /> <br />
                <button type="submit" value="Login" id="btn">
                    Login
                </button>
                <br /> <br />
            </form>
        </div>
    );
};

export default Login;
